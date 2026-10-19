'use client';

import { useState, useEffect } from 'react';

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [savingStatus, setSavingStatus] = useState(false);
  const [notes, setNotes] = useState('');
  const [currentStatus, setCurrentStatus] = useState('NEW');

  const fetchInquiries = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/inquiries');
      if (res.ok) {
        const data = await res.json();
        setInquiries(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const openDetailModal = (inq) => {
    setSelectedInquiry(inq);
    setCurrentStatus(inq.status || 'NEW');
    setNotes(inq.notes || '');
  };

  const closeDetailModal = () => {
    setSelectedInquiry(null);
  };

  const handleUpdateInquiry = async () => {
    if (!selectedInquiry) return;
    setSavingStatus(true);
    try {
      const res = await fetch(`/api/inquiries/${selectedInquiry.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: currentStatus, notes }),
      });
      if (res.ok) {
        const updated = await res.json();
        setInquiries(inquiries.map((item) => (item.id === updated.id ? updated : item)));
        setSelectedInquiry(updated);
        alert('Lead status and internal notes saved successfully!');
      }
    } catch (err) {
      alert('Failed to update lead');
    } finally {
      setSavingStatus(false);
    }
  };

  const handleDelete = async (id, name) => {
    if (!confirm(`Are you sure you want to delete lead for "${name}"?`)) return;
    try {
      const res = await fetch(`/api/inquiries/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setInquiries(inquiries.filter((item) => item.id !== id));
        if (selectedInquiry?.id === id) closeDetailModal();
      }
    } catch (err) {
      alert('Failed to delete lead');
    }
  };

  const exportToCSV = () => {
    if (inquiries.length === 0) {
      alert('No data to export.');
      return;
    }

    const headers = [
      'ID',
      'Full Name',
      'Email Address',
      'Phone Number',
      'Service Needed',
      'Business Name',
      'Industry',
      'Business Age',
      'Monthly Revenue',
      'Created At',
    ];

    const rows = filteredInquiries.map((inq) => [
      inq.id,
      `"${(inq.fullName || '').replace(/"/g, '""')}"`,
      `"${(inq.email || '').replace(/"/g, '""')}"`,
      `"${(inq.phoneNumber || '').replace(/"/g, '""')}"`,
      `"${(inq.serviceNeeded || '').replace(/"/g, '""')}"`,
      `"${(inq.businessName || '').replace(/"/g, '""')}"`,
      `"${(inq.industry || '').replace(/"/g, '""')}"`,
      `"${(inq.businessAge || '').replace(/"/g, '""')}"`,
      `"${(inq.monthlyRevenue || '').replace(/"/g, '""')}"`,
      `"${new Date(inq.createdAt).toLocaleString()}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `globon_consultations_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredInquiries = inquiries.filter((inq) => {
    const q = search.toLowerCase();
    const fullName = (inq.fullName || '').toLowerCase();
    const email = (inq.email || '').toLowerCase();
    const phone = (inq.phoneNumber || '').toLowerCase();
    const srv = (inq.serviceNeeded || '').toLowerCase();
    const subj = (inq.subject || '').toLowerCase();
    const msg = (inq.message || '').toLowerCase();
    const bName = (inq.businessName || '').toLowerCase();
    const ind = (inq.industry || '').toLowerCase();

    return (
      fullName.includes(q) ||
      email.includes(q) ||
      phone.includes(q) ||
      srv.includes(q) ||
      subj.includes(q) ||
      msg.includes(q) ||
      bName.includes(q) ||
      ind.includes(q)
    );
  });

  return (
    <div>
      {/* Header bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
        <div className="admin-page-header" style={{ marginBottom: 0 }}>
          <h1 className="admin-page-title">
            Consultation Requests &amp; Leads
          </h1>
          <p className="admin-page-desc">
            All customer consultation inquiries, applications, and business profiles submitted through your website forms.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={exportToCSV}
            className="admin-btn admin-btn-outline"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <span>📥</span> Export CSV
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="admin-card" style={{ marginBottom: '20px', padding: '16px 20px' }}>
        <input
          type="text"
          className="form-control"
          placeholder="🔍 Search name, phone, business, industry, service..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Main Table Card */}
      <div className="admin-card">
        {loading ? (
          <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>⏳</div>
            Loading consultation records from MySQL...
          </div>
        ) : filteredInquiries.length === 0 ? (
          <div style={{ padding: '60px 20px', textAlign: 'center', color: '#94a3b8' }}>
            <div style={{ fontSize: '36px', marginBottom: '10px' }}>📋</div>
            <div style={{ fontSize: '16px', fontWeight: '700', color: '#475569' }}>
              No Consultation Submissions Found
            </div>
            <p style={{ margin: '6px 0 0', fontSize: '13px' }}>
              Submissions from the consultation forms on the website will be listed here automatically.
            </p>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', fontSize: '12.5px', color: '#64748b' }}>
              <span>Showing <strong>{filteredInquiries.length}</strong> consultation submissions</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: '#ffffff', padding: '4px 10px', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '11.5px', color: '#005b94', fontWeight: '600' }}>
                ↔️ Scroll right to view all columns & actions
              </span>
            </div>
            <div className="admin-table-container">
              <table className="admin-table" style={{ width: '100%', minWidth: '1150px', tableLayout: 'auto', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ minWidth: '120px' }}>Full Name</th>
                    <th style={{ minWidth: '150px' }}>Email Address</th>
                    <th style={{ minWidth: '110px' }}>Phone Number</th>
                    <th style={{ minWidth: '140px' }}>Service Needed</th>
                    <th style={{ minWidth: '120px' }}>Business Name</th>
                    <th style={{ minWidth: '100px' }}>Industry</th>
                    <th style={{ minWidth: '80px' }}>Age</th>
                    <th style={{ minWidth: '95px' }}>Revenue</th>
                    <th style={{ minWidth: '90px' }}>Date</th>
                    <th style={{ minWidth: '180px', textAlign: 'center', paddingRight: '18px' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredInquiries.map((inq) => {
                    const phone = inq.phoneNumber || inq.phone || '—';
                    const email = inq.email || '—';

                    return (
                      <tr key={inq.id}>
                        {/* 1. Full Name */}
                        <td style={{ fontWeight: '700', color: '#0f172a' }}>
                          {inq.fullName || inq.name || '—'}
                        </td>

                        {/* 2. Email Address */}
                        <td style={{ color: '#475569', fontSize: '12.5px', maxWidth: '170px', overflow: 'hidden', textOverflow: 'ellipsis' }} title={email}>
                          {email !== '—' ? (
                            <a href={`mailto:${email}`} style={{ color: '#0f172a', textDecoration: 'none' }}>
                              {email}
                            </a>
                          ) : '—'}
                        </td>

                        {/* 3. Phone Number */}
                        <td>
                          <a
                            href={`tel:${phone}`}
                            style={{ color: '#005b94', textDecoration: 'none', fontWeight: '700', whiteSpace: 'nowrap' }}
                          >
                            {phone}
                          </a>
                        </td>

                        {/* Service Needed */}
                        <td>
                          <span style={{
                            fontSize: '11.5px',
                            padding: '3px 8px',
                            borderRadius: '5px',
                            background: '#eff6ff',
                            color: '#1d4ed8',
                            fontWeight: '600',
                            whiteSpace: 'nowrap'
                          }}>
                            {inq.serviceNeeded || '—'}
                          </span>
                        </td>

                        {/* 4. Business Name */}
                        <td style={{ fontWeight: '600', color: '#334155', maxWidth: '140px', overflow: 'hidden', textOverflow: 'ellipsis' }} title={inq.businessName || ''}>
                          {inq.businessName || '—'}
                        </td>

                        {/* 5. Industry */}
                        <td>
                          <span style={{
                            fontSize: '11px',
                            padding: '2px 7px',
                            borderRadius: '5px',
                            background: '#f1f5f9',
                            color: '#334155',
                            fontWeight: '600',
                            whiteSpace: 'nowrap'
                          }}>
                            {inq.industry || '—'}
                          </span>
                        </td>

                        {/* 6. Business Age */}
                        <td style={{ color: '#475569', fontSize: '12.5px', whiteSpace: 'nowrap' }}>
                          {inq.businessAge || '—'}
                        </td>

                        {/* 7. Monthly Revenue */}
                        <td style={{ fontWeight: '700', color: '#16a34a', fontSize: '12.5px', whiteSpace: 'nowrap' }}>
                          {inq.monthlyRevenue || '—'}
                        </td>

                        {/* Date */}
                        <td style={{ fontSize: '11.5px', color: '#94a3b8', whiteSpace: 'nowrap' }}>
                          {new Date(inq.createdAt).toLocaleDateString()}
                        </td>

                        {/* Actions: ONLY coloured icons on pure white background */}
                        <td style={{ textAlign: 'center', whiteSpace: 'nowrap', paddingRight: '18px' }}>
                          <div className="action-btn-group">
                            <button
                              type="button"
                              onClick={() => openDetailModal(inq)}
                              className="action-icon-btn btn-review"
                              title="Review Details"
                              aria-label="Review Details"
                            >
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDelete(inq.id, inq.fullName || inq.name || 'Lead')}
                              className="action-icon-btn btn-delete"
                              title="Delete Lead"
                              aria-label="Delete Lead"
                            >
                              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Detail & Status Review Modal */}
      {selectedInquiry && (
        <div className="admin-modal-backdrop">
          <div className="admin-modal-dialog" style={{ maxWidth: '640px' }}>
            <div className="admin-modal-header">
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '800', color: '#0f172a' }}>
                Consultation Lead: {selectedInquiry.fullName || selectedInquiry.name}
              </h3>
              <button
                type="button"
                onClick={closeDetailModal}
                className="admin-modal-close"
                title="Close"
              >
                &times;
              </button>
            </div>

            <div className="admin-modal-body">
              {/* Form Data Grid matching consultation form */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '14px',
                marginBottom: '10px'
              }}>
                <div style={{ background: '#f8fafc', padding: '12px 14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>Full Name</div>
                  <div style={{ fontSize: '14.5px', fontWeight: '700', color: '#0f172a', marginTop: '3px' }}>
                    {selectedInquiry.fullName || selectedInquiry.name || '—'}
                  </div>
                </div>

                <div style={{ background: '#f8fafc', padding: '12px 14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>Email Address</div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#0f172a', marginTop: '3px' }}>
                    {selectedInquiry.email ? (
                      <a href={`mailto:${selectedInquiry.email}`} style={{ color: '#005b94', textDecoration: 'none' }}>
                        {selectedInquiry.email}
                      </a>
                    ) : '—'}
                  </div>
                </div>

                <div style={{ background: '#f8fafc', padding: '12px 14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>Phone Number</div>
                  <div style={{ fontSize: '14.5px', fontWeight: '700', color: '#005b94', marginTop: '3px' }}>
                    {selectedInquiry.phoneNumber || selectedInquiry.phone ? (
                      <a href={`tel:${selectedInquiry.phoneNumber || selectedInquiry.phone}`} style={{ color: '#005b94', textDecoration: 'none' }}>
                        {selectedInquiry.phoneNumber || selectedInquiry.phone}
                      </a>
                    ) : '—'}
                  </div>
                </div>

                <div style={{ background: '#f8fafc', padding: '12px 14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>Service Needed</div>
                  <div style={{ fontSize: '14.5px', fontWeight: '700', color: '#1d4ed8', marginTop: '3px' }}>
                    {selectedInquiry.serviceNeeded || '—'}
                  </div>
                </div>

                <div style={{ background: '#f8fafc', padding: '12px 14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>Business Name</div>
                  <div style={{ fontSize: '14.5px', fontWeight: '700', color: '#0f172a', marginTop: '3px' }}>
                    {selectedInquiry.businessName || '—'}
                  </div>
                </div>

                <div style={{ background: '#f8fafc', padding: '12px 14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>Industry</div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#0f172a', marginTop: '3px' }}>
                    {selectedInquiry.industry || '—'}
                  </div>
                </div>

                <div style={{ background: '#f8fafc', padding: '12px 14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>Business Age</div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#0f172a', marginTop: '3px' }}>
                    {selectedInquiry.businessAge || '—'}
                  </div>
                </div>

                <div style={{ background: '#f8fafc', padding: '12px 14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>Monthly Revenue</div>
                  <div style={{ fontSize: '14.5px', fontWeight: '700', color: '#16a34a', marginTop: '3px' }}>
                    {selectedInquiry.monthlyRevenue || '—'}
                  </div>
                </div>

                <div style={{ background: '#f8fafc', padding: '12px 14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>Submission Date</div>
                  <div style={{ fontSize: '13.5px', fontWeight: '600', color: '#475569', marginTop: '3px' }}>
                    {new Date(selectedInquiry.createdAt).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            <div className="admin-modal-footer" style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px 28px' }}>
              <button onClick={closeDetailModal} className="admin-btn admin-btn-primary" style={{ minWidth: '100px' }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
