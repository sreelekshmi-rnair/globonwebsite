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

  const counts = stats?.counts || { services: 0, loans: 0, blogs: 0, inquiries: 0, newInquiries: 0 };
  const recentInquiries = stats?.recentInquiries || [];

  return (
    <div>
      {/* Page Title & Subtitle matching the screenshot */}
      <div className="admin-page-header">
        <h1 className="admin-page-title">Dashboard Overview</h1>
        <p className="admin-page-desc">
          Gain clear insight into your system&apos;s key metrics and manage everything with confidence and ease.
        </p>
      </div>

      {/* Metric Cards Grid matching the screenshot layout & colors */}
      <div className="admin-stat-grid">
        {/* Card 1: Highlight Dark Card */}
        <div className="admin-stat-card-dark">
          <div>
            <div className="stat-label">Total Services</div>
            <div className="stat-val">{counts.services}</div>
          </div>
          <div className="stat-icon-wrap">
            <span>💼</span>
          </div>
        </div>

        {/* Card 2: Total Enquiries */}
        <div className="admin-stat-card-white">
          <div>
            <div className="stat-label">Total Enquiries</div>
            <div className="stat-val">{counts.inquiries}</div>
          </div>
          <div className="stat-icon-wrap icon-blue-circle">
            <span>ℹ️</span>
          </div>
        </div>

        {/* Card 3: Loan Products */}
        <div className="admin-stat-card-white">
          <div>
            <div className="stat-label">Loan Products</div>
            <div className="stat-val">{counts.loans}</div>
          </div>
          <div className="stat-icon-wrap icon-yellow-circle">
            <span>💰</span>
          </div>
        </div>

        {/* Card 4: Blog Articles */}
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
          📬 View Customer Leads
        </Link>
      </div>

      {/* Recent Leads / Inquiries Table */}
      <div className="admin-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h3 style={{ fontSize: '17px', fontWeight: '800', margin: '0 0 4px', color: '#0f172a' }}>
              Recent Customer Leads &amp; Applications
            </h3>
            <span style={{ fontSize: '13px', color: '#64748b' }}>
              Submissions received from website visitors
            </span>
          </div>
          <Link href="/admin/inquiries" className="admin-btn admin-btn-outline admin-btn-sm">
            View All Enquiries &rarr;
          </Link>
        </div>

        {recentInquiries.length === 0 ? (
          <div style={{ padding: '40px 20px', textAlign: 'center', color: '#94a3b8' }}>
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>📬</div>
            <div style={{ fontWeight: '600', color: '#475569', marginBottom: '4px' }}>No submissions yet</div>
            <p style={{ margin: 0, fontSize: '13px' }}>
              Customer inquiries submitted on your website will appear here automatically.
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
                  <th style={{ minWidth: '150px' }}>Business Name</th>
                  <th style={{ minWidth: '130px' }}>Industry</th>
                  <th style={{ minWidth: '150px' }}>Service Needed</th>
                  <th style={{ minWidth: '100px' }}>Date</th>
                  <th style={{ minWidth: '110px', textAlign: 'right' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {recentInquiries.map((inq) => {
                  const fullName = inq.fullName || '—';
                  const phone = inq.phoneNumber || '—';
                  const service = inq.serviceNeeded || 'Consultation';

                  return (
                    <tr key={inq.id}>
                      <td style={{ fontWeight: '700', color: '#0f172a' }}>{fullName}</td>
                      <td style={{ fontSize: '13px', color: '#475569' }}>{inq.email || '—'}</td>
                      <td>
                        <a href={`tel:${phone}`} style={{ fontSize: '13px', fontWeight: '700', color: '#005b94', textDecoration: 'none' }}>
                          {phone}
                        </a>
                      </td>
                      <td style={{ fontWeight: '600', color: '#334155' }}>
                        {inq.businessName || '—'}
                      </td>
                      <td>
                        <span style={{ fontSize: '12px', background: '#f1f5f9', padding: '3px 8px', borderRadius: '6px', fontWeight: '600' }}>
                          {inq.industry || '—'}
                        </span>
                      </td>
                      <td>
                        <span style={{ fontSize: '12px', background: '#e0f2fe', color: '#0369a1', padding: '4px 10px', borderRadius: '12px', fontWeight: '700' }}>
                          {service}
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
    </div>
  );
}
