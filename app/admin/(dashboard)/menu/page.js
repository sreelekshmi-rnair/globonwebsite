'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const MAX_MENU_LEVEL = 3;

function findNodeWithLevel(nodes, id, level = 1) {
  for (const node of nodes) {
    if (node.id === id) return { node, level };
    const found = findNodeWithLevel(node.children || [], id, level + 1);
    if (found) return found;
  }
  return null;
}

function subtreeHasId(node, id) {
  return node.id === id || (node.children || []).some((child) => subtreeHasId(child, id));
}

function subtreeHeight(node) {
  return 1 + Math.max(0, ...(node.children || []).map(subtreeHeight));
}

export default function AdminMenuPage() {
  const [tree, setTree] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Add Item Form State (Only URL & Link Text matching user's reference photo)
  const [linkUrl, setLinkUrl] = useState('');
  const [linkText, setLinkText] = useState('');
  const [services, setServices] = useState([]);
  const [isLinksOpen, setIsLinksOpen] = useState(true);

  // Expanded item drawer state (click '+' or item to expand options)
  const [expandedId, setExpandedId] = useState(null);

  // Delete modal state
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, id: null, title: '' });

  // Drag and drop state
  const [draggedItemId, setDraggedItemId] = useState(null);
  const [dragOverItemId, setDragOverItemId] = useState(null);
  // dropGap: { itemId, parentId, position } — show a blue line before/after an item
  const [dropGap, setDropGap] = useState(null);
  // Ref mirrors so onDrop/tree mutations always read the latest values synchronously
  const dropGapRef = useRef(null);
  const dragOverItemIdRef = useRef(null);
  const draggedItemIdRef = useRef(null);
  const treeRef = useRef([]);

  // Keep treeRef in sync whenever tree changes
  useEffect(() => { treeRef.current = tree; }, [tree]);

  // Load menu tree
  useEffect(() => {
    loadMenu();
  }, []);

  useEffect(() => {
    fetch('/api/services')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setServices(data?.services || []))
      .catch((err) => console.error(err));
  }, []);

  const slugFromLink = (link) => link.trim().split(/[?#]/)[0].split('/').filter(Boolean).pop() || '';

  // Pasting a service's link fills in its name
  function handleLinkUrlChange(value) {
    setLinkUrl(value);
    const service = services.find((s) => s.slug === slugFromLink(value));
    if (service && !linkText.trim()) setLinkText(service.title);
  }

  async function loadMenu() {
    setLoading(true);
    setErrorMessage('');
    try {
      const res = await fetch('/api/admin/menu');
      const data = await res.json();
      if (data.success && Array.isArray(data.menu)) {
        treeRef.current = data.menu;
        setTree(data.menu);
      } else {
        setErrorMessage(data.error || 'Failed to load menu structure');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('Network error while loading menu');
    } finally {
      setLoading(false);
    }
  }

  // Save full tree — always pass the tree explicitly, never read from stale closure
  async function handleSaveTree(treeToSave) {
    if (!Array.isArray(treeToSave)) return;
    setSaving(true);
    setSaveSuccess(false);
    setErrorMessage('');

    try {
      const res = await fetch('/api/admin/menu', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tree: treeToSave })
      });
      const data = await res.json();

      if (data.success) {
        setSaveSuccess(true);
        if (data.warning) setErrorMessage(data.warning);
        // Do NOT overwrite tree from response — local state is already correct
        setTimeout(() => setSaveSuccess(false), 3500);
      } else {
        setErrorMessage(data.error || 'Failed to save menu hierarchy');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('Network error while saving menu hierarchy');
    } finally {
      setSaving(false);
    }
  }

  // Add Item to Menu
  async function handleAddItem(e) {
    if (e) e.preventDefault();
    if (!linkText.trim()) {
      alert('Please enter Link Text');
      return;
    }

    // A link copied from the address bar works the same as a short one
    const cleanUrl = linkUrl.trim().replace(window.location.origin, '');
    const slug = slugFromLink(cleanUrl);
    const alreadyInMenu = (nodes) => nodes.some((n) => slugFromLink(n.url || '') === slug || alreadyInMenu(n.children || []));
    if (cleanUrl.startsWith('/services/') && alreadyInMenu(treeRef.current)) {
      setErrorMessage(`"${linkText.trim()}" is already in the menu. Drag it to move it.`);
      return;
    }
    setErrorMessage('');

    const payload = {
      title: linkText.trim(),
      url: cleanUrl || '#',
      parentId: null
    };

    setSaving(true);
    try {
      const res = await fetch('/api/admin/menu', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      if (data.success) {
        if (data.menu) {
          treeRef.current = data.menu;
          setTree(data.menu);
        }
        // Bring the new item into view, ready to drag
        if (data.item?.id) {
          setTimeout(() => {
            const el = document.getElementById(`menu-item-${data.item.id}`);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 150);
        }
        setLinkText('');
        setLinkUrl('');
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
      } else {
        setErrorMessage(data.error || 'Failed to add menu item');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('Network error while adding menu item');
    } finally {
      setSaving(false);
    }
  }

  // Move an item to be a sub-service of targetParentId (or null for root level)
  function moveItemToParent(itemId, targetParentId) {
    if (itemId === targetParentId) return;

    // Always read from ref — state closure may be stale
    const currentTree = treeRef.current;

    let nodeToMove = null;
    function removeRecursive(nodes) {
      const remaining = [];
      for (const n of nodes) {
        if (n.id === itemId) {
          nodeToMove = { ...n };
          continue;
        }
        if (n.children && n.children.length > 0) {
          remaining.push({ ...n, children: removeRecursive(n.children) });
        } else {
          remaining.push(n);
        }
      }
      return remaining;
    }

    const cleanTree = removeRecursive(currentTree);
    if (!nodeToMove) return;

    if (!targetParentId) {
      nodeToMove.parentId = null;
      const newTree = [...cleanTree, nodeToMove];
      treeRef.current = newTree;
      setTree(newTree);
      handleSaveTree(newTree);
      return;
    }

    nodeToMove.parentId = targetParentId;
    function insertRecursive(nodes) {
      return nodes.map((n) => {
        if (n.id === targetParentId) {
          const children = Array.isArray(n.children) ? [...n.children] : [];
          if (!children.some((c) => c.id === nodeToMove.id)) {
            children.push(nodeToMove);
          }
          return { ...n, children };
        }
        if (n.children && n.children.length > 0) {
          return { ...n, children: insertRecursive(n.children) };
        }
        return n;
      });
    }

    const newTree = insertRecursive(cleanTree);
    treeRef.current = newTree;
    setTree(newTree);
    handleSaveTree(newTree);
  }

  // Delete Item
  async function confirmDeleteItem() {
    if (!deleteModal.id) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/menu?id=${encodeURIComponent(deleteModal.id)}`, {
        method: 'DELETE'
      });
      const data = await res.json();
      if (data.success) {
        if (data.menu) setTree(data.menu);
        setDeleteModal({ isOpen: false, id: null, title: '' });
        if (expandedId === deleteModal.id) setExpandedId(null);
      } else {
        setErrorMessage(data.error || 'Failed to delete menu item');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('Network error while deleting item');
    } finally {
      setSaving(false);
    }
  }

  // Update item inline
  function updateItem(itemId, field, value) {
    function updateRecursive(nodes) {
      return nodes.map((node) => {
        if (node.id === itemId) {
          return { ...node, [field]: value };
        }
        if (node.children && node.children.length > 0) {
          return { ...node, children: updateRecursive(node.children) };
        }
        return node;
      });
    }
    const updated = updateRecursive(tree);
    setTree(updated);
  }

  // Move node Up or Down within its siblings
  function moveSibling(targetId, direction) {
    function reorder(nodes) {
      const idx = nodes.findIndex((n) => n.id === targetId);
      if (idx !== -1) {
        const next = [...nodes];
        if (direction === 'up' && idx > 0) {
          const temp = next[idx];
          next[idx] = next[idx - 1];
          next[idx - 1] = temp;
          return next;
        }
        if (direction === 'down' && idx < next.length - 1) {
          const temp = next[idx];
          next[idx] = next[idx + 1];
          next[idx + 1] = temp;
          return next;
        }
        return next;
      }
      return nodes.map((n) => {
        if (n.children && n.children.length > 0) {
          return { ...n, children: reorder(n.children) };
        }
        return n;
      });
    }

    const newTree = reorder(tree);
    setTree(newTree);
    handleSaveTree(newTree);
  }

  // Indent: Make target a child of its previous sibling (Level 1 -> 2, or Level 2 -> 3)
  function indentItem(targetId) {
    function process(nodes) {
      const idx = nodes.findIndex((n) => n.id === targetId);
      if (idx > 0) {
        const prevSibling = nodes[idx - 1];
        const targetNode = nodes[idx];

        targetNode.parentId = prevSibling.id;
        const newPrevSibling = {
          ...prevSibling,
          children: [...(prevSibling.children || []), targetNode]
        };

        const result = [...nodes.slice(0, idx - 1), newPrevSibling, ...nodes.slice(idx + 1)];
        return result;
      }

      return nodes.map((n) => {
        if (n.children && n.children.length > 0) {
          return { ...n, children: process(n.children) };
        }
        return n;
      });
    }

    const newTree = process(tree);
    setTree(newTree);
    handleSaveTree(newTree);
  }

  // Outdent: Move child out to become a sibling of its parent (Level 3 -> 2, or Level 2 -> 1)
  function outdentItem(targetId) {
    function process(nodes, grandParentId = null) {
      for (let i = 0; i < nodes.length; i++) {
        const parent = nodes[i];
        if (parent.children && parent.children.length > 0) {
          const childIdx = parent.children.findIndex((c) => c.id === targetId);
          if (childIdx !== -1) {
            const childNode = parent.children[childIdx];
            childNode.parentId = grandParentId;

            const remainingChildren = [
              ...parent.children.slice(0, childIdx),
              ...parent.children.slice(childIdx + 1)
            ];

            const updatedParent = {
              ...parent,
              children: remainingChildren
            };

            const result = [
              ...nodes.slice(0, i),
              updatedParent,
              childNode,
              ...nodes.slice(i + 1)
            ];
            return result;
          }

          const recursiveChildren = process(parent.children, parent.id);
          if (recursiveChildren !== parent.children) {
            return [
              ...nodes.slice(0, i),
              { ...parent, children: recursiveChildren },
              ...nodes.slice(i + 1)
            ];
          }
        }
      }
      return nodes;
    }

    const newTree = process(tree);
    setTree(newTree);
    handleSaveTree(newTree);
  }

  // Drag & Drop handlers
  function handleDragStart(e, itemId) {
    draggedItemIdRef.current = itemId;
    setDraggedItemId(itemId);
    dropGapRef.current = null;
    dragOverItemIdRef.current = null;
    setDropGap(null);
    setDragOverItemId(null);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', itemId);
  }

  function handleDragEnd() {
    draggedItemIdRef.current = null;
    setDraggedItemId(null);
    setDragOverItemId(null);
    dropGapRef.current = null;
    dragOverItemIdRef.current = null;
    setDropGap(null);
  }

  // Show where the dragged item will land (blue line or highlighted row)
  function setDropIndicator(gap, nestTargetId) {
    dropGapRef.current = gap;
    dragOverItemIdRef.current = nestTargetId;
    setDropGap(gap);
    setDragOverItemId(nestTargetId);
  }

  // An item can't go inside itself, and the menu only goes MAX_MENU_LEVEL levels deep
  function canPlaceItem(dragId, targetId, asChild) {
    const dragged = findNodeWithLevel(treeRef.current, dragId);
    const target = findNodeWithLevel(treeRef.current, targetId);
    if (!dragged || !target || subtreeHasId(dragged.node, targetId)) return false;
    const newLevel = asChild ? target.level + 1 : target.level;
    return newLevel + subtreeHeight(dragged.node) - 1 <= MAX_MENU_LEVEL;
  }

  // While dragging over a row:
  //   top third    = insert BEFORE this item, at its level
  //   middle third = NEST inside this item
  //   bottom third = insert AFTER this item, at its level
  function handleDragOverItem(e, itemId, parentId = null) {
    e.preventDefault();
    e.stopPropagation();

    const dragId = draggedItemIdRef.current;
    const rect = e.currentTarget.getBoundingClientRect();
    const relY = e.clientY - rect.top;
    const third = rect.height / 3;

    let zone = relY < third ? 'before' : relY > rect.height - third ? 'after' : 'nest';
    if (zone === 'nest' && !canPlaceItem(dragId, itemId, true)) {
      zone = relY < rect.height / 2 ? 'before' : 'after';
    }

    if (zone !== 'nest' && !canPlaceItem(dragId, itemId, false)) {
      e.dataTransfer.dropEffect = 'none';
      setDropIndicator(null, null);
      return;
    }

    e.dataTransfer.dropEffect = 'move';
    if (zone === 'nest') {
      setDropIndicator(null, itemId);
    } else {
      setDropIndicator({ position: zone, itemId, parentId }, null);
    }
  }

  // On drop: use refs (always fresh) to decide placement
  function handleDropOnItem(e) {
    e.preventDefault();
    e.stopPropagation();

    // Read from refs — React state is stale at drop time
    const dragId = draggedItemIdRef.current;
    const gap = dropGapRef.current;
    const nestTargetId = dragOverItemIdRef.current;

    if (dragId && gap && canPlaceItem(dragId, gap.itemId, false)) {
      reorderItems(dragId, gap.itemId, gap.parentId, gap.position);
    } else if (dragId && nestTargetId && canPlaceItem(dragId, nestTargetId, true)) {
      moveItemToParent(dragId, nestTargetId);
    }

    handleDragEnd();
  }

  // Reorder: remove draggedId then insert at referenceId position (mode: 'before' | 'after')
  // Works on the CLEAN tree (after removal) so referenceId is never the dragged item itself.
  function reorderItems(draggedId, referenceId, parentId, mode) {
    let nodeToMove = null;

    // Always read from ref — state closure may be stale
    const currentTree = treeRef.current;

    function removeNode(nodes) {
      const result = [];
      for (const n of nodes) {
        if (n.id === draggedId) { nodeToMove = { ...n }; continue; }
        result.push({ ...n, children: n.children ? removeNode(n.children) : [] });
      }
      return result;
    }

    const cleanTree = removeNode(currentTree);
    if (!nodeToMove) return;

    function insertNode(nodes, targetParentId) {
      if (!targetParentId) {
        if (!referenceId) {
          nodeToMove.parentId = null;
          return [nodeToMove, ...nodes];
        }
        const idx = nodes.findIndex(n => n.id === referenceId);
        if (idx !== -1) {
          nodeToMove.parentId = null;
          const result = [...nodes];
          const insertAt = mode === 'before' ? idx : idx + 1;
          result.splice(insertAt, 0, nodeToMove);
          return result;
        }
        nodeToMove.parentId = null;
        return [...nodes, nodeToMove];
      }

      return nodes.map(n => {
        if (n.id === targetParentId) {
          const children = Array.isArray(n.children) ? [...n.children] : [];
          if (!referenceId) {
            nodeToMove.parentId = targetParentId;
            return { ...n, children: [nodeToMove, ...children] };
          }
          const idx = children.findIndex(c => c.id === referenceId);
          if (idx !== -1) {
            nodeToMove.parentId = targetParentId;
            const insertAt = mode === 'before' ? idx : idx + 1;
            children.splice(insertAt, 0, nodeToMove);
            return { ...n, children };
          }
          return { ...n, children: [...children, nodeToMove] };
        }
        if (n.children && n.children.length > 0) {
          return { ...n, children: insertNode(n.children, targetParentId) };
        }
        return n;
      });
    }

    const newTree = insertNode(cleanTree, parentId || null);
    treeRef.current = newTree;
    setTree(newTree);
    handleSaveTree(newTree);
  }

  // Get potential parents for any item (excludes itself and descendants, limits to level < 3)
  function getPotentialParents(nodes, currentItemId, currentLevel = 1) {
    const list = [];
    if (!Array.isArray(nodes)) return list;

    for (const node of nodes) {
      if (node.id === currentItemId) continue;

      if (currentLevel < 3) {
        list.push({
          id: node.id,
          title: node.title,
          level: currentLevel
        });
      }

      if (node.children && node.children.length > 0 && currentLevel < 2) {
        list.push(...getPotentialParents(node.children, currentItemId, currentLevel + 1));
      }
    }
    return list;
  }

  // Render tree node matching reference screenshot:
  // Clean white row with brown handle on left, title in middle, and '+' on right.
  function renderTreeNode(item, level = 1, isLast = false, parentSiblings = [], parentId = null) {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedId === item.id;
    const isDragOver = dragOverItemId === item.id && dragOverItemId !== draggedItemId;
    const isBeingDragged = draggedItemId === item.id;

    const siblingIdx = parentSiblings.findIndex((s) => s.id === item.id);
    const canIndent = level < 3 && siblingIdx > 0;
    const canOutdent = level > 1;

    // Show blue line BEFORE this item
    const showGapBefore =
      dropGap &&
      dropGap.position === 'before' &&
      dropGap.itemId === item.id &&
      dropGap.parentId === parentId;

    // Show blue line AFTER this item
    const showGapAfter =
      dropGap &&
      dropGap.position === 'after' &&
      dropGap.itemId === item.id &&
      dropGap.parentId === parentId;

    // Indentation: 0px for Level 1, 38px for Level 2, 76px for Level 3
    const indentPixels = (level - 1) * 38;

    // All available parent options for moving this item
    const parentOptions = getPotentialParents(tree, item.id);

    return (
      <div
        key={item.id}
        id={`menu-item-${item.id}`}
        style={{
          position: 'relative',
          paddingLeft: `${indentPixels}px`,
          marginBottom: '4px',
          opacity: isBeingDragged ? 0.35 : 1,
          transition: 'opacity 0.15s ease',
        }}
      >
        {/* Blue gap line BEFORE this item */}
        {showGapBefore && (
          <div style={{
            position: 'absolute',
            top: '-4px',
            left: `${indentPixels}px`,
            right: 0,
            height: '3px',
            background: '#59bdfc',
            borderRadius: '2px',
            boxShadow: '0 0 6px rgba(89,189,252,0.5)',
            zIndex: 2,
            pointerEvents: 'none',
          }} />
        )}

        {/* Connector Elbow Line for Sub-Services */}
        {level > 1 && (
          <div
            style={{
              position: 'absolute',
              left: `${indentPixels - 24}px`,
              top: '20px',
              width: '18px',
              height: '2px',
              backgroundColor: '#cbd5e1'
            }}
          />
        )}
        {level > 1 && (
          <div
            style={{
              position: 'absolute',
              left: `${indentPixels - 24}px`,
              top: '-12px',
              bottom: 'calc(100% - 20px)',
              width: '2px',
              backgroundColor: '#cbd5e1'
            }}
          />
        )}

        {/* Clean Menu Item Row - Matches Reference Screenshot */}
        <div
          onDragEnter={(e) => e.preventDefault()}
          onDragOver={(e) => handleDragOverItem(e, item.id, parentId)}
          onDrop={handleDropOnItem}
          onDragLeave={(e) => {
            // relatedTarget is empty when the browser can't tell; the next dragover decides
            if (e.relatedTarget && !e.currentTarget.contains(e.relatedTarget)) {
              dragOverItemIdRef.current = null;
              setDragOverItemId(null);
            }
          }}
          style={{
            background: isDragOver ? '#dbeafe' : '#ffffff',
            border: isDragOver ? '2px dashed #59bdfc' : '1px solid #e2e8f0',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
            transition: 'all 0.2s ease',
            overflow: 'hidden'
          }}
        >
          {/* Left Side: Brown Square Drag Handle + Item Title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1, minWidth: 0 }}>
            {/* Brown Square Drag Handle Icon */}
            <div
              draggable
              onDragStart={(e) => handleDragStart(e, item.id)}
              onDragEnd={handleDragEnd}
              title="Drag to any position — drop on the middle of a row to make it a sub-service"
              style={{
                width: '42px',
                height: '42px',
                background: '#8b4513',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'grab',
                flexShrink: 0
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="5 9 2 12 5 15"></polyline>
                <polyline points="9 5 12 2 15 5"></polyline>
                <polyline points="15 19 12 22 9 19"></polyline>
                <polyline points="19 9 22 12 19 15"></polyline>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <line x1="12" y1="2" x2="12" y2="22"></line>
              </svg>
            </div>

            {/* Clean Title Text with click to open settings */}
            <div
              onClick={() => setExpandedId(isExpanded ? null : item.id)}
              style={{
                pointerEvents: draggedItemId ? 'none' : 'auto',
                fontWeight: 600,
                color: '#1e293b',
                fontSize: '15px',
                cursor: 'pointer',
                userSelect: 'none',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                padding: '10px 0',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <span>{item.title}</span>
              {isDragOver && (
                <span style={{ fontSize: '12px', color: '#0369a1', fontWeight: 700, background: '#dbeafe', padding: '2px 8px', borderRadius: '4px' }}>
                  ↳ Release to nest as sub-service
                </span>
              )}
            </div>
          </div>

          {/* Right Side: Clean '+' Toggle Icon */}
          <button
            type="button"
            onClick={() => setExpandedId(isExpanded ? null : item.id)}
            title={isExpanded ? 'Collapse options' : 'Expand to move to sub-service or edit'}
            style={{
              background: 'none',
              border: 'none',
              padding: '12px 18px',
              cursor: 'pointer',
              color: isExpanded ? '#0369a1' : '#64748b',
              fontSize: '18px',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              outline: 'none',
              transition: 'color 0.2s ease'
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = '#0369a1')}
            onMouseOut={(e) => (e.currentTarget.style.color = isExpanded ? '#0369a1' : '#64748b')}
          >
            {isExpanded ? '−' : '+'}
          </button>
        </div>

        {/* ========================================================
            EXPANDED OPTIONS DRAWER:
            Includes "Move to Sub-Service of:" selector + Quick Pills
            ======================================================== */}
        {isExpanded && (
          <div
            style={{
              background: '#f8fafc',
              border: '1px solid #cbd5e1',
              borderTop: 'none',
              borderRadius: '0 0 6px 6px',
              padding: '18px 20px',
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.03)'
            }}
          >
            {/* ========================================================
                FEATURE: MOVE TO SUB-SERVICE OF (PARENT SELECTOR)
                ======================================================== */}
            <div
              style={{
                background: '#ffffff',
                border: '1.5px solid #59bdfc',
                borderRadius: '6px',
                padding: '14px 16px',
                marginBottom: '16px',
                boxShadow: '0 2px 5px rgba(89,189,252,0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontSize: '13.5px', fontWeight: 700, color: '#0369a1' }}>
                  Move to Sub-Service of (Select Parent Service):
                </label>
                <span style={{ fontSize: '12px', color: '#64748b' }}>
                  Current Level: <strong style={{ color: '#0f172a' }}>Level {level} {level === 1 ? '(Main Service)' : level === 2 ? '(Sub-Service)' : '(Sub-Sub-Service)'}</strong>
                </span>
              </div>

              {/* Dropdown to select ANY service as parent */}
              <div style={{ marginBottom: '10px' }}>
                <select
                  value={item.parentId || ''}
                  onChange={(e) => moveItemToParent(item.id, e.target.value || null)}
                  style={{
                    width: '100%',
                    padding: '9px 12px',
                    border: '1px solid #cbd5e1',
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontWeight: 600,
                    background: '#f8fafc',
                    color: '#0f172a',
                    cursor: 'pointer'
                  }}
                >
                  <option value="">-- Main Level Service (No Parent) --</option>
                  {parentOptions.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.level === 1 ? `📁 ${p.title} (Main Service)` : `   └─ 📄 ${p.title} (Sub-Service)`}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quick One-Click Parent Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>
                  Quick Move Under:
                </span>
                {item.parentId && (
                  <button
                    type="button"
                    onClick={() => moveItemToParent(item.id, null)}
                    style={{
                      padding: '4px 10px',
                      fontSize: '12px',
                      background: '#fff1f2',
                      color: '#be123c',
                      border: '1px solid #fecdd3',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontWeight: 600,
                      transition: 'all 0.15s ease'
                    }}
                    title="Move back to top level as a main service"
                  >
                    ↰ Move to Main Level
                  </button>
                )}
                {tree.filter((r) => r.id !== item.id).map((r) => {
                  const isCurrentParent = item.parentId === r.id;
                  return (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => moveItemToParent(item.id, r.id)}
                      style={{
                        padding: '4px 10px',
                        fontSize: '12px',
                        background: isCurrentParent ? '#59bdfc' : '#f1f5f9',
                        color: isCurrentParent ? '#0f172a' : '#334155',
                        border: isCurrentParent ? '1px solid #59bdfc' : '1px solid #cbd5e1',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 600,
                        transition: 'all 0.15s ease'
                      }}
                    >
                      {isCurrentParent ? `✓ Sub-Service of ${r.title}` : `+ ${r.title}`}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Label and URL inputs */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '4px' }}>
                  Navigation Label:
                </label>
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => updateItem(item.id, 'title', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 10px',
                    border: '1px solid #cbd5e1',
                    borderRadius: '4px',
                    fontSize: '13.5px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '4px' }}>
                  URL:
                </label>
                <input
                  type="text"
                  value={item.url}
                  onChange={(e) => updateItem(item.id, 'url', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 10px',
                    border: '1px solid #cbd5e1',
                    borderRadius: '4px',
                    fontSize: '13px',
                    fontFamily: 'monospace',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>

            {/* Action & Move Buttons Row */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '10px',
                paddingTop: '10px',
                borderTop: '1px solid #e2e8f0'
              }}
            >
              {/* Move / Indent Controls */}
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#64748b', marginRight: '4px' }}>
                  Reorder:
                </span>

                <button
                  type="button"
                  onClick={() => moveSibling(item.id, 'up')}
                  style={{
                    padding: '6px 10px',
                    background: '#ffffff',
                    border: '1px solid #cbd5e1',
                    borderRadius: '4px',
                    fontSize: '12px',
                    cursor: 'pointer',
                    color: '#334155'
                  }}
                >
                  ↑ Up
                </button>

                <button
                  type="button"
                  onClick={() => moveSibling(item.id, 'down')}
                  style={{
                    padding: '6px 10px',
                    background: '#ffffff',
                    border: '1px solid #cbd5e1',
                    borderRadius: '4px',
                    fontSize: '12px',
                    cursor: 'pointer',
                    color: '#334155'
                  }}
                >
                  ↓ Down
                </button>

                {canOutdent && (
                  <button
                    type="button"
                    onClick={() => outdentItem(item.id)}
                    style={{
                      padding: '6px 10px',
                      background: '#ffffff',
                      border: '1px solid #cbd5e1',
                      borderRadius: '4px',
                      fontSize: '12px',
                      cursor: 'pointer',
                      color: '#0369a1',
                      fontWeight: 600
                    }}
                  >
                    ← Move Out (Outdent)
                  </button>
                )}

                {canIndent && (
                  <button
                    type="button"
                    onClick={() => indentItem(item.id)}
                    style={{
                      padding: '6px 10px',
                      background: '#ffffff',
                      border: '1px solid #cbd5e1',
                      borderRadius: '4px',
                      fontSize: '12px',
                      cursor: 'pointer',
                      color: '#0369a1',
                      fontWeight: 600
                    }}
                  >
                    → Indent
                  </button>
                )}
              </div>

              {/* Delete & Done Buttons */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <button
                  type="button"
                  onClick={() => setDeleteModal({ isOpen: true, id: item.id, title: item.title })}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#dc2626',
                    fontSize: '13px',
                    cursor: 'pointer',
                    textDecoration: 'underline'
                  }}
                >
                  Remove item
                </button>

                <button
                  type="button"
                  onClick={() => {
                    handleSaveTree(treeRef.current);
                    setExpandedId(null);
                  }}
                  style={{
                    padding: '7px 16px',
                    background: '#59bdfc',
                    color: '#0f172a',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Save &amp; Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Children Rows (Level 2 or Level 3) */}
        {hasChildren && (
          <div style={{ position: 'relative' }}>
            {item.children.map((child, idx) =>
              renderTreeNode(child, level + 1, idx === item.children.length - 1, item.children, item.id)
            )}
          </div>
        )}

        {/* Blue gap line AFTER this item */}
        {showGapAfter && (
          <div style={{
            position: 'absolute',
            bottom: '-4px',
            left: `${indentPixels}px`,
            right: 0,
            height: '3px',
            background: '#59bdfc',
            borderRadius: '2px',
            boxShadow: '0 0 6px rgba(89,189,252,0.5)',
            zIndex: 2,
            pointerEvents: 'none',
          }} />
        )}
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '24px 20px 60px' }}>
      {/* Top Banner & Actions */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '24px'
        }}
      >
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', margin: 0 }}>
            Menu &amp; Services Hierarchy
          </h1>
          <p style={{ color: '#64748b', fontSize: '14px', margin: '4px 0 0' }}>
            Add and organize website services into Main Services and Sub-Services.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            type="button"
            onClick={() => handleSaveTree(treeRef.current)}
            disabled={saving}
            style={{
              padding: '10px 22px',
              background: '#59bdfc',
              color: '#0f172a',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: saving ? 'wait' : 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 2px 6px rgba(89,189,252,0.25)'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
              <polyline points="17 21 17 13 7 13 7 21"></polyline>
              <polyline points="7 3 7 8 15 8"></polyline>
            </svg>
            {saving ? 'Saving...' : 'Save Menu Hierarchy'}
          </button>
        </div>
      </div>

      {/* Notification Alerts */}
      {saveSuccess && (
        <div
          style={{
            background: '#ecfdf5',
            border: '1px solid #a7f3d0',
            color: '#065f46',
            padding: '12px 18px',
            borderRadius: '6px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '14px',
            fontWeight: 500
          }}
        >
          <span>✓</span> Menu hierarchy saved successfully! Changes are active in your website header mega menu.
        </div>
      )}

      {errorMessage && (
        <div
          style={{
            background: '#fef2f2',
            border: '1px solid #fecaca',
            color: '#991b1b',
            padding: '12px 18px',
            borderRadius: '6px',
            marginBottom: '20px',
            fontSize: '14px'
          }}
        >
          {errorMessage}
        </div>
      )}

      {/* Main Grid: Left Links Form + Right Hierarchy Tree */}
      <div
        className="admin-menu-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(300px, 340px) 1fr',
          gap: '28px',
          alignItems: 'start'
        }}
      >
        {/* ========================================================
            LEFT COLUMN: LINKS CARD (Matching Reference Photo Exactly)
            Only Url, Link Text, and brown "Add to menu" button!
            ======================================================== */}
        <div>
          <div
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
              overflow: 'hidden'
            }}
          >
            {/* Header matching brown reference screenshot */}
            <div
              onClick={() => setIsLinksOpen(!isLinksOpen)}
              style={{
                padding: '14px 18px',
                background: '#fafafa',
                borderBottom: isLinksOpen ? '1px solid #e2e8f0' : 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                userSelect: 'none'
              }}
            >
              <div style={{ fontWeight: 600, color: '#334155', fontSize: '15px' }}>
                Links
              </div>
              <span style={{ color: '#64748b', fontSize: '14px' }}>
                {isLinksOpen ? '▲' : '▼'}
              </span>
            </div>

            {/* Links Form Body */}
            {isLinksOpen && (
              <form onSubmit={handleAddItem} style={{ padding: '20px 18px' }}>
                {/* Url input */}
                <div style={{ marginBottom: '16px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '13.5px',
                      fontWeight: 500,
                      color: '#475569',
                      marginBottom: '6px'
                    }}
                  >
                    Url:
                  </label>
                  <input
                    type="text"
                    value={linkUrl}
                    onChange={(e) => handleLinkUrlChange(e.target.value)}
                    placeholder="Paste the link copied from Services"
                    style={{
                      width: '100%',
                      padding: '9px 12px',
                      border: '1px solid #cbd5e1',
                      borderRadius: '4px',
                      fontSize: '14px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {/* Link Text input */}
                <div style={{ marginBottom: '20px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '13.5px',
                      fontWeight: 500,
                      color: '#475569',
                      marginBottom: '6px'
                    }}
                  >
                    Link Text:
                  </label>
                  <input
                    type="text"
                    value={linkText}
                    onChange={(e) => setLinkText(e.target.value)}
                    placeholder="Menu Item"
                    required
                    style={{
                      width: '100%',
                      padding: '9px 12px',
                      border: '1px solid #cbd5e1',
                      borderRadius: '4px',
                      fontSize: '14px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {/* Brown "Add to menu" button placed directly under Link Text */}
                <button
                  type="submit"
                  disabled={saving}
                  style={{
                    background: '#8b4513',
                    color: '#ffffff',
                    border: 'none',
                    padding: '9px 20px',
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: saving ? 'wait' : 'pointer',
                    transition: 'background 0.2s ease',
                    boxShadow: '0 2px 4px rgba(139, 69, 19, 0.2)'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.background = '#73380f')}
                  onMouseOut={(e) => (e.currentTarget.style.background = '#8b4513')}
                >
                  {saving ? 'Adding...' : 'Add to menu'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ========================================================
            RIGHT COLUMN: MENU STRUCTURE TREE
            Clean list with brown drag handle, clean title & '+' toggle
            ======================================================== */}
        <div>
          <div
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '24px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.05)'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px',
                paddingBottom: '14px',
                borderBottom: '1px solid #f1f5f9'
              }}
            >
              <div>
                <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                  Menu Structure
                </h2>
                <p style={{ color: '#64748b', fontSize: '13px', margin: '4px 0 0' }}>
                  Drag a service to any position: a <strong style={{ color: '#0369a1' }}>blue line</strong> shows where it will land. Drop on the <strong>middle of a row</strong> to make it a sub-service.
                </p>
              </div>

              <div
                style={{
                  fontSize: '12px',
                  color: '#475569',
                  background: '#f1f5f9',
                  padding: '5px 12px',
                  borderRadius: '16px',
                  fontWeight: 600
                }}
              >
                {tree.length} Root Services
              </div>
            </div>

            {loading ? (
              <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>
                Loading menu structure...
              </div>
            ) : tree.length === 0 ? (
              <div
                style={{
                  padding: '40px 20px',
                  textAlign: 'center',
                  background: '#f8fafc',
                  borderRadius: '6px',
                  border: '1px dashed #cbd5e1'
                }}
              >
                <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
                  No menu items yet. Add links using the form on the left.
                </p>
              </div>
            ) : (
              <div
                onDragEnter={(e) => e.preventDefault()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDropOnItem}
                onDragLeave={(e) => {
                  if (e.relatedTarget && !e.currentTarget.contains(e.relatedTarget)) setDropIndicator(null, null);
                }}
              >
                {tree.map((item, idx) =>
                  renderTreeNode(item, 1, idx === tree.length - 1, tree)
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteModal.isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.55)',
            backdropFilter: 'blur(3px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            padding: '20px'
          }}
          onClick={() => setDeleteModal({ isOpen: false, id: null, title: '' })}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: '8px',
              maxWidth: '440px',
              width: '100%',
              padding: '24px',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#fee2e2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#dc2626',
                  flexShrink: 0
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
              </div>
              <div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                  Remove Menu Item?
                </h3>
                <p style={{ fontSize: '13px', color: '#64748b', margin: '2px 0 0' }}>
                  Are you sure you want to remove &quot;{deleteModal.title}&quot;?
                </p>
              </div>
            </div>

            <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.5, marginBottom: '20px' }}>
              Removing this item will also remove any nested sub-services under it. This change will be saved to your navigation structure.
            </p>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button
                type="button"
                onClick={() => setDeleteModal({ isOpen: false, id: null, title: '' })}
                style={{
                  padding: '8px 16px',
                  background: '#f1f5f9',
                  border: '1px solid #cbd5e1',
                  borderRadius: '4px',
                  fontSize: '13.5px',
                  color: '#475569',
                  fontWeight: 500,
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmDeleteItem}
                disabled={saving}
                style={{
                  padding: '8px 18px',
                  background: '#dc2626',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  cursor: saving ? 'wait' : 'pointer'
                }}
              >
                {saving ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
