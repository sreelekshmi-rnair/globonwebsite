'use client';

import { useState, useEffect } from 'react';

export default function AdminServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [form, setForm] = useState({
    title: '',
    slug: '',
    category: 'Financial Solutions',
    icon: 'flaticon-business',
    shortDescription: '',
    description: '',
    features: '',
    image: '/assets/images/service/service-01.jpg',
    isFeatured: false,
    order: 0,
  });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const fetchServices = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/services');
      if (res.ok) {
        const data = await res.json();
        setServices(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const openCreateModal = () => {
    setEditingService(null);
    setForm({
      title: '',
      slug: '',
      category: 'Financial Solutions',
      icon: 'flaticon-business',
      shortDescription: '',
      description: '',
      features: '',
      image: '/assets/images/service/service-01.jpg',
      isFeatured: false,
      order: services.length + 1,
    });
    setIsModalOpen(true);
  };

  const openEditModal = (service) => {
    setEditingService(service);
    setForm({
      title: service.title,
      slug: service.slug,
      category: service.category || 'Financial Solutions',
      icon: service.icon || 'flaticon-business',
      shortDescription: service.shortDescription || '',
      description: service.description || '',
      features: service.features || '',
      image: service.image || '/assets/images/service/service-01.jpg',
      isFeatured: service.isFeatured || false,
      order: service.order || 0,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingService(null);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage({ text: '', type: '' });

    try {
      const url = editingService ? `/api/services/${editingService.id}` : '/api/services';
      const method = editingService ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to save');

      setMessage({ text: `Service successfully ${editingService ? 'updated' : 'created'}!`, type: 'success' });
      closeModal();
      fetchServices();
    } catch (err) {
      setMessage({ text: err.message, type: 'error' });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id, title) => {
    if (!confirm(`Are you sure you want to delete the service "${title}"?`)) return;

    try {
      const res = await fetch(`/api/services/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setMessage({ text: 'Service deleted successfully', type: 'success' });
        fetchServices();
      } else {
        throw new Error('Failed to delete service');
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
        <div className="admin-page-header" style={{ marginBottom: 0 }}>
          <h1 className="admin-page-title">
            Services Management
          </h1>
          <p className="admin-page-desc">
            Create, edit, or remove service offerings displayed across your website.
          </p>
        </div>
        <button onClick={openCreateModal} className="admin-btn admin-btn-primary">
          + Add New Service
        </button>
      </div>

      {message.text && (
        <div
          style={{
            padding: '12px 18px',
            borderRadius: '8px',
            marginBottom: '20px',
            backgroundColor: message.type === 'success' ? '#dcfce7' : '#fee2e2',
            color: message.type === 'success' ? '#15803d' : '#b91c1c',
            fontWeight: '500',
          }}
        >
          {message.text}
        </div>
      )}

      <div className="admin-card">
        {loading ? (
          <div style={{ padding: '30px', textAlign: 'center', color: '#64748b' }}>Loading services...</div>
        ) : services.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center', color: '#94a3b8' }}>
            No services found. Click &quot;Add New Service&quot; to create your first one.
          </div>
        ) : (
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th style={{ width: '80px' }}>Order</th>
                  <th style={{ minWidth: '220px' }}>Service Title</th>
                  <th style={{ minWidth: '150px' }}>Category</th>
                  <th style={{ minWidth: '200px' }}>Key Highlights</th>
                  <th style={{ width: '120px' }}>Featured</th>
                  <th style={{ width: '120px' }}>Live Link</th>
                  <th style={{ textAlign: 'right', minWidth: '140px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.id}>
                    <td style={{ fontWeight: '600', color: '#64748b', width: '60px' }}>
                      #{service.order}
                    </td>
                    <td>
                      <div style={{ fontWeight: '700', color: '#0f172a', fontSize: '15px' }}>
                        {service.title}
                      </div>
                      <div style={{ fontSize: '12px', color: '#0284c7' }}>
                        /services/{service.slug}
                      </div>
                    </td>
                    <td>
                      <span className="admin-badge badge-contacted">{service.category}</span>
                    </td>
                    <td style={{ maxWidth: '300px' }}>
                      <div style={{ fontSize: '13px', color: '#475569', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {service.shortDescription}
                      </div>
                    </td>
                    <td>
                      {service.isFeatured ? (
                        <span className="admin-badge badge-approved">Featured</span>
                      ) : (
                        <span style={{ color: '#94a3b8', fontSize: '12px' }}>Standard</span>
                      )}
                    </td>
                    <td>
                      <a
                        href={`/services/${service.slug}`}
                        target="_blank"
                        rel="noreferrer"
                        className="admin-btn admin-btn-outline admin-btn-sm"
                      >
                        View Page ↗
                      </a>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <button
                        onClick={() => openEditModal(service)}
                        className="admin-btn admin-btn-outline admin-btn-sm"
                        style={{ marginRight: '8px' }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(service.id, service.title)}
                        className="admin-btn admin-btn-danger admin-btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal Dialog */}
      {isModalOpen && (
        <div className="admin-modal-backdrop">
          <div className="admin-modal-dialog">
            <div className="admin-modal-header">
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700' }}>
                {editingService ? `Edit Service: ${editingService.title}` : 'Add New Service'}
              </h3>
              <button
                onClick={closeModal}
                style={{ background: 'none', border: 'none', fontSize: '22px', cursor: 'pointer', color: '#64748b' }}
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleSave}>
              <div className="admin-modal-body">
                <div className="form-group">
                  <label className="form-label">Service Title *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    placeholder="e.g. Loans & Advances"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">URL Slug (leave blank to auto-generate)</label>
                    <input
                      type="text"
                      className="form-control"
                      value={form.slug}
                      onChange={(e) => setForm({ ...form, slug: e.target.value })}
                      placeholder="e.g. loans-advances"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Category</label>
                    <input
                      type="text"
                      className="form-control"
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                      placeholder="e.g. Financial Solutions"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Display Order</label>
                    <input
                      type="number"
                      className="form-control"
                      value={form.order}
                      onChange={(e) => setForm({ ...form, order: e.target.value })}
                    />
                  </div>
                  <div className="form-group" style={{ display: 'flex', alignItems: 'center', marginTop: '28px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: '600' }}>
                      <input
                        type="checkbox"
                        checked={form.isFeatured}
                        onChange={(e) => setForm({ ...form, isFeatured: e.target.checked })}
                      />
                      Show in Featured / Home sections
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Short Description (for cards and previews) *</label>
                  <textarea
                    className="form-control"
                    rows="2"
                    value={form.shortDescription}
                    onChange={(e) => setForm({ ...form, shortDescription: e.target.value })}
                    placeholder="Concise overview of this service..."
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Detailed Description (for dedicated service page) *</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    placeholder="Comprehensive explanation of what Globon provides under this service..."
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Key Features / Highlights (one per line)</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    value={form.features}
                    onChange={(e) => setForm({ ...form, features: e.target.value })}
                    placeholder="Quick disbursement timelines&#10;Competitive interest rates&#10;Zero hidden charges"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Cover Image Path</label>
                  <input
                    type="text"
                    className="form-control"
                    value={form.image}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                    placeholder="/assets/images/service/service-01.jpg"
                  />
                </div>
              </div>

              <div className="admin-modal-footer">
                <button type="button" onClick={closeModal} className="admin-btn admin-btn-outline">
                  Cancel
                </button>
                <button type="submit" className="admin-btn admin-btn-primary" disabled={saving}>
                  {saving ? 'Saving...' : editingService ? 'Update Service' : 'Create Service'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
