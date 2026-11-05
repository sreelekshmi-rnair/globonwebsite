import { NextResponse } from 'next/server';
import { getMenuTree, saveMenuTree, flattenMenuTree } from '@/lib/menuStore';
import { syncServicesWithMenu } from '@/lib/servicesStore';
import { getCurrentAdmin } from '@/lib/auth';

export const dynamic = 'force-dynamic';

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

// Helper to recursively find and insert a child
function insertChild(nodes, parentId, newItem) {
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].id === parentId) {
      if (!Array.isArray(nodes[i].children)) {
        nodes[i].children = [];
      }
      nodes[i].children.push(newItem);
      return true;
    }
    if (nodes[i].children && nodes[i].children.length > 0) {
      const found = insertChild(nodes[i].children, parentId, newItem);
      if (found) return true;
    }
  }
  return false;
}

// Helper to recursively delete an item
function deleteNode(nodes, targetId) {
  const next = [];
  for (const node of nodes) {
    if (node.id === targetId) {
      continue;
    }
    if (node.children && node.children.length > 0) {
      node.children = deleteNode(node.children, targetId);
    }
    next.push(node);
  }
  return next;
}

export async function GET() {
  try {
    const tree = getMenuTree();
    const flat = flattenMenuTree(tree);
    return NextResponse.json({
      success: true,
      menu: tree,
      flatMenu: flat
    });
  } catch (err) {
    console.error('GET /api/admin/menu error:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve menu hierarchy' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  if (!getCurrentAdmin()) {
    return NextResponse.json({ success: false, error: 'Your login has expired. Please log in again.' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, url, parentId } = body;

    if (!title || !title.trim()) {
      return NextResponse.json(
        { success: false, error: 'Link text is required' },
        { status: 400 }
      );
    }

    const tree = getMenuTree();
    const cleanTitle = title.trim();
    const cleanUrl = url && url.trim() ? url.trim() : `/services/${slugify(cleanTitle)}`;
    const newItem = {
      id: `menu-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      title: cleanTitle,
      url: cleanUrl,
      parentId: parentId || null,
      order: Date.now(),
      children: []
    };

    if (parentId) {
      const inserted = insertChild(tree, parentId, newItem);
      if (!inserted) {
        // Fallback to root if parent not found
        newItem.parentId = null;
        tree.push(newItem);
      }
    } else {
      tree.push(newItem);
    }

    const saved = saveMenuTree(tree);
    if (!saved) {
      return NextResponse.json(
        { success: false, error: 'Failed to persist menu item' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Menu item added successfully',
      item: newItem,
      menu: tree,
      flatMenu: flattenMenuTree(tree)
    });
  } catch (err) {
    console.error('POST /api/admin/menu error:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to add menu item' },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  if (!getCurrentAdmin()) {
    return NextResponse.json({ success: false, error: 'Your login has expired. Please log in again.' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { tree } = body;

    if (!Array.isArray(tree)) {
      return NextResponse.json(
        { success: false, error: 'Invalid tree structure provided' },
        { status: 400 }
      );
    }

    const { tree: syncedTree, moved, warnings } = await syncServicesWithMenu(tree);
    const saved = saveMenuTree(syncedTree);
    if (!saved) {
      return NextResponse.json(
        { success: false, error: 'Failed to persist menu hierarchy' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Menu hierarchy saved successfully',
      menu: syncedTree,
      flatMenu: flattenMenuTree(syncedTree),
      moved,
      warning: warnings.join(' ')
    });
  } catch (err) {
    console.error('PUT /api/admin/menu error:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to update menu hierarchy' },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  if (!getCurrentAdmin()) {
    return NextResponse.json({ success: false, error: 'Your login has expired. Please log in again.' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Item ID is required for deletion' },
        { status: 400 }
      );
    }

    const tree = getMenuTree();
    const updatedTree = deleteNode(tree, id);
    const saved = saveMenuTree(updatedTree);

    if (!saved) {
      return NextResponse.json(
        { success: false, error: 'Failed to save updated hierarchy after deletion' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Menu item deleted successfully',
      menu: updatedTree,
      flatMenu: flattenMenuTree(updatedTree)
    });
  } catch (err) {
    console.error('DELETE /api/admin/menu error:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to delete menu item' },
      { status: 500 }
    );
  }
}
