'use client';

import { useState, useEffect } from 'react';

export default function AdminLoansPage() {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingLoan, setEditingLoan] = useState(null);
  const [form, setForm] = useState({
    title: '',
    slug: '',
    category: 'Commercial',
    interestRate: '8.5% p.a.',
    maxAmount: 'Up to ₹50 Lakhs',
    tenure: '1 to 5 Years',
    processingFee: '0.5%',
    shortDescription: '',
    description: '',
    eligibility: '',
    documentsRequired: '',
    benefits: '',
    image: '/assets/images/service/service-01.jpg',
    isPopular: false,
    order: 0,
  });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const fetchLoans = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/loans');
      if (res.ok) {
        const data = await res.json();
        setLoans(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLoans();
  }, []);

  // Automatically dismiss message after 4 seconds
  useEffect(() => {
    if (!message.text) return;
    const timer = setTimeout(() => {
      setMessage({ text: '', type: '' });
    }, 4000);
    return () => clearTimeout(timer);
  }, [message.text]);

  const openCreateModal = () => {
    setEditingLoan(null);
    setForm({
      title: '',
      slug: '',
      category: 'Commercial',
      interestRate: '8.5% p.a.',
      maxAmount: 'Up to ₹50 Lakhs',
      tenure: '1 to 5 Years',
      processingFee: '0.5%',
      shortDescription: '',
      description: '',
      eligibility: '',
      documentsRequired: '',
      benefits: '',
      image: '/assets/images/service/service-01.jpg',
      isPopular: false,
      order: loans.length + 1,
    });
    setIsModalOpen(true);
  };

  const openEditModal = (loan) => {
    setEditingLoan(loan);
    setForm({
      title: loan.title,
      slug: loan.slug,
      category: loan.category || 'Commercial',
      interestRate: loan.interestRate || '8.5% p.a.',
      maxAmount: loan.maxAmount || 'Up to ₹50 Lakhs',
      tenure: loan.tenure || '1 to 5 Years',
      processingFee: loan.processingFee || '0.5%',
      shortDescription: loan.shortDescription || '',
      description: loan.description || '',
      eligibility: loan.eligibility || '',
      documentsRequired: loan.documentsRequired || '',
      benefits: loan.benefits || '',
      image: loan.image || '/assets/images/service/service-01.jpg',
      isPopular: loan.isPopular || false,
      order: loan.order || 0,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingLoan(null);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage({ text: '', type: '' });

    try {
      const url = editingLoan ? `/api/loans/${editingLoan.id}` : '/api/loans';
      const method = editingLoan ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to save loan product');

      setMessage({ text: `Loan product successfully ${editingLoan ? 'updated' : 'created'}!`, type: 'success' });
      closeModal();
      fetchLoans();
    } catch (err) {
      setMessage({ text: err.message, type: 'error' });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id, title) => {
    if (!confirm(`Are you sure you want to delete the loan "${title}"?`)) return;

    try {
      const res = await fetch(`/api/loans/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setMessage({ text: 'Loan deleted successfully', type: 'success' });
        fetchLoans();
      } else {
        throw new Error('Failed to delete loan');
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
            Loan Products Management
          </h1>
          <p className="admin-page-desc">
            Add and manage loan offerings (Business, Home, LAP, Personal) with interest rates and eligibility.
          </p>
        </div>
        <button onClick={openCreateModal} className="admin-btn admin-btn-primary">
          + Add New Loan Product
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
          <div style={{ padding: '30px', textAlign: 'center', color: '#64748b' }}>Loading loans...</div>
        ) : loans.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center', color: '#94a3b8' }}>
            No loan products found. Click &quot;Add New Loan Product&quot; to create one.
          </div>
        ) : (
          <div className="admin-table-container">
            <table className="admin-table" style={{ width: '100%', minWidth: '1150px' }}>
              <thead>
                <tr>
                  <th style={{ width: '80px' }}>Order</th>
                  <th style={{ minWidth: '220px' }}>Loan Name &amp; Slug</th>
                  <th style={{ minWidth: '150px' }}>Category</th>
                  <th style={{ minWidth: '120px' }}>Interest Rate</th>
                  <th style={{ minWidth: '140px' }}>Max Amount</th>
                  <th style={{ minWidth: '130px' }}>Tenure</th>
                  <th style={{ width: '110px' }}>Badge</th>
                  <th style={{ width: '110px' }}>Live Link</th>
                  <th style={{ textAlign: 'right', minWidth: '140px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {loans.map((loan) => (
                  <tr key={loan.id}>
                    <td style={{ fontWeight: '600', color: '#64748b', width: '60px' }}>
                      #{loan.order}
                    </td>
                    <td>
                      <div style={{ fontWeight: '500', color: '#0f172a', fontSize: '15px' }}>
                        {loan.title}
                      </div>
                      <div style={{ fontSize: '12px', color: '#0284c7' }}>
                        /loans/{loan.slug}
                      </div>
                    </td>
                    <td>
                      <span className="admin-badge badge-in_review">{loan.category}</span>
                    </td>
                    <td style={{ fontWeight: '500', color: '#16a34a' }}>
                      {loan.interestRate}
                    </td>
                    <td style={{ fontWeight: '600', color: '#0f172a' }}>
                      {loan.maxAmount}
                    </td>
                    <td style={{ fontSize: '13px', color: '#475569' }}>
                      {loan.tenure}
                    </td>
                    <td>
                      {loan.isPopular ? (
                        <span className="admin-badge badge-approved">Popular Choice</span>
                      ) : (
                        <span style={{ color: '#94a3b8', fontSize: '12px' }}>Standard</span>
                      )}
                    </td>
                    <td>
                      <a
                        href={`/loans/${loan.slug}`}
                        target="_blank"
                        rel="noreferrer"
                        className="admin-btn admin-btn-outline admin-btn-sm"
                      >
                        View Page ↗
                      </a>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <button
                        onClick={() => openEditModal(loan)}
                        className="admin-btn admin-btn-outline admin-btn-sm"
                        style={{ marginRight: '8px' }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(loan.id, loan.title)}
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
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'normal' }}>
                {editingLoan ? `Edit Loan: ${editingLoan.title}` : 'Add New Loan Product'}
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
                  <label className="form-label">Loan Product Title *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    placeholder="e.g. Business & MSME Loan"
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
                      placeholder="e.g. business-loan"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Category</label>
                    <input
                      type="text"
                      className="form-control"
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                      placeholder="e.g. Commercial / Residential / Personal"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Interest Rate</label>
                    <input
                      type="text"
                      className="form-control"
                      value={form.interestRate}
                      onChange={(e) => setForm({ ...form, interestRate: e.target.value })}
                      placeholder="e.g. 8.40% p.a."
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Maximum Loan Amount</label>
                    <input
                      type="text"
                      className="form-control"
                      value={form.maxAmount}
                      onChange={(e) => setForm({ ...form, maxAmount: e.target.value })}
                      placeholder="e.g. Up to ₹2 Crores"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Repayment Tenure</label>
                    <input
                      type="text"
                      className="form-control"
                      value={form.tenure}
                      onChange={(e) => setForm({ ...form, tenure: e.target.value })}
                      placeholder="e.g. Up to 30 Years"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Processing Fee</label>
                    <input
                      type="text"
                      className="form-control"
                      value={form.processingFee}
                      onChange={(e) => setForm({ ...form, processingFee: e.target.value })}
                      placeholder="e.g. 0.5% - 1.0%"
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
                        checked={form.isPopular}
                        onChange={(e) => setForm({ ...form, isPopular: e.target.checked })}
                      />
                      Mark as &quot;Popular Choice&quot; Badge
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
                    placeholder="Brief summary of loan purpose..."
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Detailed Description (for dedicated loan page) *</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    placeholder="Comprehensive explanation of features and terms..."
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Eligibility Criteria (one per line)</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    value={form.eligibility}
                    onChange={(e) => setForm({ ...form, eligibility: e.target.value })}
                    placeholder="Minimum 2 years business vintage&#10;Turnover exceeding ₹25 Lakhs&#10;CIBIL score 680+"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Required Documents (one per line)</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    value={form.documentsRequired}
                    onChange={(e) => setForm({ ...form, documentsRequired: e.target.value })}
                    placeholder="Last 2 years ITR & Audit Report&#10;Last 12 months Bank Statement&#10;KYC of Promoters"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Key Benefits (one per line)</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    value={form.benefits}
                    onChange={(e) => setForm({ ...form, benefits: e.target.value })}
                    placeholder="Disbursement in 48 hours&#10;Collateral-free options available&#10;Flexible EMI structures"
                  />
                </div>
              </div>

              <div className="admin-modal-footer">
                <button type="button" onClick={closeModal} className="admin-btn admin-btn-outline">
                  Cancel
                </button>
                <button type="submit" className="admin-btn admin-btn-primary" disabled={saving}>
                  {saving ? 'Saving...' : editingLoan ? 'Update Loan Product' : 'Create Loan Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
