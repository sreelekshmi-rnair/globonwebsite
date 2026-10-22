'use client';

import { useState, useEffect } from 'react';

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/contacts');
      if (res.ok) {
        const data = await res.json();
        setContacts(data.contacts || []);
      }
    } catch (err) {
      console.error('Error fetching contacts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id, name) => {
    if (!confirm(`Are you sure you want to delete message from "${name}"?`)) return;
    try {
      const res = await fetch(`/api/contacts/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setContacts((prev) => prev.filter((c) => c.id !== id));
      } else {
        alert('Failed to delete contact message');
      }
    } catch (err) {
      console.error(err);
      alert('Error deleting contact message');
    }
  };

  const filteredContacts = contacts.filter((c) => {
    const q = search.toLowerCase();
    const name = (c.name || c.fullName || '').toLowerCase();
    const phone = (c.phoneNumber || c.phone || '').toLowerCase();
    const email = (c.email || '').toLowerCase();
    const subject = (c.subject || '').toLowerCase();
    const msg = (c.messageSnippet || c.message || '').toLowerCase();

    return (
      name.includes(q) ||
      phone.includes(q) ||
      email.includes(q) ||
      subject.includes(q) ||
      msg.includes(q)
    );
  });

  return (
    <div>
      {/* Page Header */}
      <div className="admin-page-header">
        <h1 className="admin-page-title">Contact Messages</h1>
        <p className="admin-page-desc">
          Customer submissions received from the Contact Us page.
        </p>
      </div>

      {/* Clean Table Card */}
      <div className="admin-card">
        {/* Search bar & total count */}
        <div style={{
          padding: '18px 24px',
          borderBottom: '1px solid #f1f5f9',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '14px'
        }}>
          <div style={{ position: 'relative', width: '320px', maxWidth: '100%' }}>
            <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}>🔍</span>
            <input
              type="text"
              placeholder="Search contact messages..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="admin-form-input"
              style={{ paddingLeft: '38px', height: '42px', margin: 0, fontSize: '14px' }}
            />
          </div>

          <div style={{ fontSize: '13.5px', color: '#64748b', fontWeight: '600' }}>
            Total: <strong style={{ color: '#0f172a' }}>{filteredContacts.length}</strong> {filteredContacts.length === 1 ? 'message' : 'messages'}
          </div>
        </div>

        {loading ? (
          <div style={{ padding: '60px', textAlign: 'center', color: '#64748b' }}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>⚡</div>
            Loading contact messages...
          </div>
        ) : filteredContacts.length === 0 ? (
          <div style={{ padding: '60px', textAlign: 'center', color: '#64748b' }}>
            <div style={{ fontSize: '32px', marginBottom: '10px' }}>✉️</div>
            <div style={{ fontSize: '16px', fontWeight: '500', color: '#334155', marginBottom: '6px' }}>No messages found</div>
            <div style={{ fontSize: '13.5px' }}>
              {search ? 'No contact messages matched your search query.' : 'No messages have been submitted through the contact form yet.'}
            </div>
          </div>
        ) : (
          <div className="admin-table-container">
            <table className="admin-table" style={{ width: '100%', tableLayout: 'auto' }}>
              <thead>
                <tr>
                  <th style={{ minWidth: '160px' }}>Name</th>
                  <th style={{ minWidth: '150px' }}>Phone Number</th>
                  <th style={{ minWidth: '180px' }}>Email Address</th>
                  <th style={{ minWidth: '180px' }}>Subject</th>
                  <th style={{ minWidth: '280px' }}>Message Snippet</th>
                  <th style={{ width: '80px', textAlign: 'center' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredContacts.map((c) => {
                  const name = c.name || c.fullName || '—';
                  const phone = c.phoneNumber || c.phone || '—';
                  const email = c.email || '—';
                  const subject = c.subject || '—';
                  const snippet = c.messageSnippet || c.message || '—';

                  return (
                    <tr key={c.id}>
                      {/* 1. Name */}
                      <td style={{ fontWeight: '500', color: '#0f172a' }}>
                        {name}
                      </td>

                      {/* 2. Phone Number */}
                      <td>
                        <a
                          href={`tel:${phone}`}
                          style={{ color: '#005b94', textDecoration: 'none', fontWeight: '500' }}
                        >
                          {phone}
                        </a>
                      </td>

                      {/* 3. Email Address */}
                      <td>
                        {email !== '—' ? (
                          <a
                            href={`mailto:${email}`}
                            style={{ color: '#475569', textDecoration: 'none' }}
                          >
                            {email}
                          </a>
                        ) : '—'}
                      </td>

                      {/* 4. Subject */}
                      <td style={{ fontWeight: '600', color: '#1e293b' }}>
                        {subject}
                      </td>

                      {/* 5. Message Snippet */}
                      <td style={{ color: '#334155', lineHeight: '1.6', fontSize: '13.5px' }}>
                        {snippet}
                      </td>

                      {/* 6. Action (Delete) */}
                      <td style={{ textAlign: 'center' }}>
                        <button
                          type="button"
                          onClick={() => handleDelete(c.id, name)}
                          title="Delete message"
                          style={{
                            background: '#fef2f2',
                            color: '#dc2626',
                            border: '1px solid #fecaca',
                            borderRadius: '6px',
                            padding: '6px 10px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            lineHeight: 1,
                            transition: 'all 0.15s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#dc2626';
                            e.currentTarget.style.color = '#ffffff';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#fef2f2';
                            e.currentTarget.style.color = '#dc2626';
                          }}
                        >
                          🗑️
                        </button>
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
