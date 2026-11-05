'use client';
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const defaultServices = [
  { id: 'svc-1', title: 'Loans', description: 'Personal & home loans' },
  { id: 'svc-2', title: 'Business Services', description: 'Business growth solutions' },
  { id: 'svc-3', title: 'Insurance', description: 'Protect what matters most' },
  { id: 'svc-4', title: 'Real Estate', description: 'Property & mortgage services' },
  { id: 'svc-5', title: 'Digital Services', description: 'Tech & growth solutions' },
  { id: 'svc-6', title: 'Study Abroad', description: 'Education loan assistance' },
];

export default function ServiceDnD() {
  const [services, setServices] = useState(defaultServices);
  const [mainService, setMainService] = useState(null);

  function onDragEnd(result) {
    const { source, destination, draggableId } = result;
    if (!destination) return;

    // Reorder within the services list
    if (
      source.droppableId === 'services' &&
      destination.droppableId === 'services'
    ) {
      const reordered = Array.from(services);
      const [removed] = reordered.splice(source.index, 1);
      reordered.splice(destination.index, 0, removed);
      setServices(reordered);
      return;
    }

    // Drop a service into the "Main Service" bucket
    if (
      source.droppableId === 'services' &&
      destination.droppableId === 'main'
    ) {
      const moved = services.find((s) => s.id === draggableId);
      if (moved) setMainService(moved);
      return;
    }

    // Drag back out of main bucket into list
    if (
      source.droppableId === 'main' &&
      destination.droppableId === 'services'
    ) {
      setMainService(null);
      return;
    }
  }

  return (
    <div style={{ padding: '24px', fontFamily: 'inherit' }}>
      <DragDropContext onDragEnd={onDragEnd}>
        {/* ── Service Cards List ── */}
        <h3 style={{ marginBottom: '12px', color: '#0369a1', fontWeight: 700 }}>
          Services — drag any card into the box below to set it as Main Service
        </h3>
        <Droppable droppableId="services" direction="vertical">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginBottom: '28px',
              }}
            >
              {services.map((svc, idx) => (
                <Draggable key={svc.id} draggableId={svc.id} index={idx}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        padding: '14px 18px',
                        background: snapshot.isDragging ? '#e0edff' : '#ffffff',
                        border: '1.5px solid #e2e8f0',
                        borderRadius: '8px',
                        boxShadow: snapshot.isDragging
                          ? '0 8px 20px rgba(89,189,252,0.15)'
                          : '0 2px 6px rgba(0,0,0,0.05)',
                        cursor: 'grab',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        ...provided.draggableProps.style,
                      }}
                    >
                      {/* Drag handle icon */}
                      <span
                        style={{
                          background: '#7c3d12',
                          color: '#fff',
                          width: '32px',
                          height: '32px',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          fontSize: '16px',
                        }}
                      >
                        ⊕
                      </span>
                      <div>
                        <div style={{ fontWeight: 600, color: '#1e293b' }}>{svc.title}</div>
                        <div style={{ fontSize: '13px', color: '#64748b' }}>{svc.description}</div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        {/* ── Main Service Drop Zone ── */}
        <h3 style={{ marginBottom: '12px', color: '#0369a1', fontWeight: 700 }}>
          Main Service
        </h3>
        <Droppable droppableId="main">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{
                minHeight: '100px',
                border: `2px dashed ${snapshot.isDraggingOver ? '#59bdfc' : '#cbd5e1'}`,
                borderRadius: '10px',
                padding: '20px',
                background: snapshot.isDraggingOver ? '#f0f7ff' : '#f8fafc',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: mainService ? 'flex-start' : 'center',
              }}
            >
              {mainService ? (
                <div
                  style={{
                    padding: '14px 20px',
                    background: '#59bdfc',
                    color: '#0f172a',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <span>★</span>
                  <span>{mainService.title}</span>
                  <button
                    onClick={() => setMainService(null)}
                    style={{
                      marginLeft: '12px',
                      background: 'rgba(255,255,255,0.25)',
                      border: 'none',
                      color: '#fff',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      padding: '2px 8px',
                      fontSize: '12px',
                    }}
                  >
                    ✕ Remove
                  </button>
                </div>
              ) : (
                <p style={{ color: '#94a3b8', fontSize: '15px', margin: 0 }}>
                  ← Drag a service card here to set it as the Main Service
                </p>
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
