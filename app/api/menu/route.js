import { NextResponse } from 'next/server';
import { getMenuTree, flattenMenuTree } from '@/lib/menuStore';

export const dynamic = 'force-dynamic';

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
    console.error('GET /api/menu error:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve menu structure' },
      { status: 500 }
    );
  }
}
