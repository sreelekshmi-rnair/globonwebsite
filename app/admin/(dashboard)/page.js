'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminDashboardPage() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      try {
        const res = await fetch('/api/admin/stats');
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadStats();
  }, []);

  const counts = stats?.counts || { services: 0, loans: 0, blogs: 0, inquiries: 0, newInquiries: 0, contacts: 0, newContacts: 0 };
  const recentInquiries = stats?.recentInquiries || [];
  const recentContacts = stats?.recentContacts || [];

  return (
    <div>
      {/* Page Title & Subtitle */}
      <div className="admin-page-header">
        <h1 className="admin-page-title">Dashboard Overview</h1>
        <p className="admin-page-desc">
          Gain clear insight into your system&apos;s key metrics and manage everything with confidence and ease.
        </p>
      </div>

      {/* Metric Cards Grid */}
      <div className="admin-stat-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        {/* Card 1: Services */}
        <div className="admin-stat-card-dark">
          <div>
            <div className="stat-label">Total Services</div>
            <div className="stat-val">{counts.services}</div>
          </div>
          <div className="stat-icon-wrap">
            <span>💼</span>
          </div>
        </div>

        {/* Card 2: Consultations & Leads */}
        <div className="admin-stat-card-white">
          <div>
            <div className="stat-label">Consultation Leads</div>
            <div className="stat-val">{counts.inquiries}</div>
          </div>
          <div className="stat-icon-wrap icon-blue-circle">
            <span>📬</span>
          </div>
        </div>

        {/* Card 3: Contact Messages */}
        <div className="admin-stat-card-white">
          <div>
            <div className="stat-label">Contact Messages</div>
            <div className="stat-val">{counts.contacts || 0}</div>
          </div>
          <div className="stat-icon-wrap" style={{ background: '#ecfdf5', color: '#059669', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
            <span>💬</span>
          </div>
        </div>

        {/* Card 4: Loan Products */}
        <div className="admin-stat-card-white">
          <div>
            <div className="stat-label">Loan Products</div>
            <div className="stat-val">{counts.loans}</div>
          </div>
          <div className="stat-icon-wrap icon-yellow-circle">
            <span>💰</span>
          </div>
        </div>

        {/* Card 5: Blog Articles */}
        <div className="admin-stat-card-white">
          <div>
            <div className="stat-label">Published Blogs</div>
            <div className="stat-val">{counts.blogs}</div>
          </div>
          <div className="stat-icon-wrap icon-green-circle">
            <span>📝</span>
          </div>
        </div>
      </div>

      {/* Quick Action Shortcuts */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '28px', flexWrap: 'wrap' }}>
        <Link href="/admin/services" className="admin-btn admin-btn-primary">
          + Add New Service
        </Link>
        <Link href="/admin/loans" className="admin-btn admin-btn-outline">
          + Add Loan Product
        </Link>
        <Link href="/admin/blogs" className="admin-btn admin-btn-outline">
          + Write Blog Post
        </Link>
        <Link href="/admin/inquiries" className="admin-btn admin-btn-outline">
          📬 View Consultation Leads
        </Link>
        <Link href="/admin/contacts" className="admin-btn admin-btn-outline" style={{ borderColor: '#059669', color: '#059669' }}>
          💬 View Contact Messages
        </Link>
      </div>

      {/* Recent Consultation Leads Table */}
      <div className="admin-card" style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h3 style={{ fontSize: '17px', fontWeight: '800', margin: '0 0 4px', color: '#0f172a' }}>
              Recent Consultation Leads (Home Page Form)
            </h3>
            <span style={{ fontSize: '13px', color: '#64748b' }}>
              Submissions received from the homepage advisory consultation form
            </span>
          </div>
          <Link href="/admin/inquiries" className="admin-btn admin-btn-outline admin-btn-sm">
            View All Leads &rarr;
          </Link>
        </div>

        {recentInquiries.length === 0 ? (
          <div style={{ padding: '40px 20px', textAlign: 'center', color: '#94a3b8' }}>
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>📬</div>
            <div style={{ fontWeight: '600', color: '#475569', marginBottom: '4px' }}>No consultation leads yet</div>
            <p style={{ margin: 0, fontSize: '13px' }}>
              Consultation inquiries submitted on your home page will appear here automatically.
            </p>
          </div>
        ) : (
          <div className="admin-table-container">
            <table className="admin-table" style={{ width: '100%', minWidth: '1100px', tableLayout: 'auto', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ minWidth: '150px' }}>Full Name</th>
                  <th style={{ minWidth: '180px' }}>Email Address</th>
                  <th style={{ minWidth: '130px' }}>Phone Number</th>
                  <th style={{ minWidth: '140px' }}>Service Needed</th>
                  <th style={{ minWidth: '150px' }}>Business Name</th>
                  <th style={{ minWidth: '130px' }}>Industry</th>
                  <th style={{ minWidth: '100px' }}>Date</th>
                  <th style={{ minWidth: '110px', textAlign: 'right' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {recentInquiries.map((inq) => {
                  const fullName = inq.fullName || '—';
                  const phone = inq.phoneNumber || '—';

                  return (
                    <tr key={inq.id}>
                      <td style={{ fontWeight: '700', color: '#0f172a' }}>{fullName}</td>
                      <td style={{ fontSize: '13px', color: '#475569' }}>{inq.email || '—'}</td>
                      <td>
                        <a href={`tel:${phone}`} style={{ fontSize: '13px', fontWeight: '700', color: '#005b94', textDecoration: 'none' }}>
                          {phone}
                        </a>
                      </td>
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
                      <td style={{ fontWeight: '600', color: '#334155' }}>
                        {inq.businessName || '—'}
                      </td>
                      <td>
                        <span style={{ fontSize: '12px', background: '#f1f5f9', padding: '3px 8px', borderRadius: '6px', fontWeight: '600' }}>
                          {inq.industry || '—'}
                        </span>
                      </td>
                      <td style={{ fontSize: '12px', color: '#64748b' }}>
                        {new Date(inq.createdAt).toLocaleDateString()}
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <Link
                          href="/admin/inquiries"
                          className="admin-btn admin-btn-outline admin-btn-sm"
                        >
                          Review &rarr;
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Recent Contact Form Messages Table */}
      <div className="admin-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h3 style={{ fontSize: '17px', fontWeight: '800', margin: '0 0 4px', color: '#0f172a' }}>
              Recent Contact Form Messages
            </h3>
            <span style={{ fontSize: '13px', color: '#64748b' }}>
              Direct messages and questions received from the Contact Us page
            </span>
          </div>
          <Link href="/admin/contacts" className="admin-btn admin-btn-outline admin-btn-sm" style={{ borderColor: '#059669', color: '#059669' }}>
            View All Contact Messages &rarr;
          </Link>
        </div>

        {recentContacts.length === 0 ? (
          <div style={{ padding: '40px 20px', textAlign: 'center', color: '#94a3b8' }}>
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>💬</div>
            <div style={{ fontWeight: '600', color: '#475569', marginBottom: '4px' }}>No contact messages yet</div>
            <p style={{ margin: 0, fontSize: '13px' }}>
              Messages submitted on the Contact page will appear here.
            </p>
          </div>
        ) : (
          <div className="admin-table-container">
            <table className="admin-table" style={{ width: '100%', minWidth: '950px', tableLayout: 'auto', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ minWidth: '150px' }}>Name</th>
                  <th style={{ minWidth: '150px' }}>Phone Number</th>
                  <th style={{ minWidth: '170px' }}>Email Address</th>
                  <th style={{ minWidth: '170px' }}>Subject</th>
                  <th style={{ minWidth: '240px' }}>Message Snippet</th>
                  <th style={{ minWidth: '90px', textAlign: 'right' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {recentContacts.map((c) => (
                  <tr key={c.id}>
                    <td style={{ fontWeight: '700', color: '#0f172a' }}>{c.name || c.fullName || '—'}</td>
                    <td>
                      <a href={`tel:${c.phoneNumber}`} style={{ fontSize: '13px', fontWeight: '700', color: '#005b94', textDecoration: 'none' }}>
                        {c.phoneNumber}
                      </a>
                    </td>
                    <td style={{ fontSize: '13px', color: '#475569' }}>{c.email || '—'}</td>
                    <td style={{ fontWeight: '600', color: '#1e293b' }}>
                      {c.subject || '—'}
                    </td>
                    <td style={{ fontSize: '13px', color: '#334155', maxWidth: '240px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={c.messageSnippet || c.message || ''}>
                      {c.messageSnippet || c.message || '—'}
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <Link
                        href="/admin/contacts"
                        className="admin-btn admin-btn-outline admin-btn-sm"
                      >
                        View &rarr;
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
