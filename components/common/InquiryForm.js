'use client';

import { useState } from 'react';

export default function InquiryForm({
  defaultType = 'General Inquiry',
  defaultSubject = '',
  showAmountField = false,
  title = 'Send an Inquiry / Apply Online',
  subtitle = 'Get quick advice and doorstep assistance from Globon specialists.',
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: defaultType,
    subject: defaultSubject,
    loanAmount: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ success: false, message: '', error: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ success: false, message: '', error: false });

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit inquiry');
      }

      setStatus({
        success: true,
        message: 'Thank you! Your request has been registered. A Globon financial advisor will contact you shortly.',
        error: false,
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        type: defaultType,
        subject: defaultSubject,
        loanAmount: '',
        message: '',
      });
    } catch (err) {
      setStatus({ success: false, message: err.message, error: true });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      style={{
        background: '#ffffff',
        padding: '36px 32px',
        borderRadius: '16px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
      }}
    >
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '800', margin: '0 0 6px', color: '#0f172a' }}>
          {title}
        </h3>
        <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>{subtitle}</p>
      </div>

      {status.message && (
        <div
          style={{
            padding: '14px 18px',
            borderRadius: '10px',
            marginBottom: '20px',
            fontSize: '14px',
            lineHeight: '1.5',
            backgroundColor: status.success ? '#dcfce7' : '#fee2e2',
            color: status.success ? '#15803d' : '#b91c1c',
            border: `1px solid ${status.success ? '#bbf7d0' : '#fecaca'}`,
          }}
        >
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: '#334155' }}>
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{
                width: '100%',
                padding: '11px 14px',
                borderRadius: '8px',
                border: '1px solid #cbd5e1',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: '#334155' }}>
              Mobile Phone *
            </label>
            <input
              type="tel"
              required
              placeholder="e.g. +91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              style={{
                width: '100%',
                padding: '11px 14px',
                borderRadius: '8px',
                border: '1px solid #cbd5e1',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: showAmountField ? '1fr 1fr' : '1fr', gap: '16px', marginBottom: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: '#334155' }}>
              Email Address
            </label>
            <input
              type="email"
              placeholder="e.g. rahul@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{
                width: '100%',
                padding: '11px 14px',
                borderRadius: '8px',
                border: '1px solid #cbd5e1',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {showAmountField && (
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: '#334155' }}>
                Required Loan Amount
              </label>
              <input
                type="text"
                placeholder="e.g. ₹25,00,000"
                value={formData.loanAmount}
                onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          )}
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: '#334155' }}>
            Inquiry Category / Product
          </label>
          <input
            type="text"
            value={formData.subject || defaultSubject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder="e.g. Business Loan / Home Loan / Financial Advisory"
            style={{
              width: '100%',
              padding: '11px 14px',
              borderRadius: '8px',
              border: '1px solid #cbd5e1',
              fontSize: '14px',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div style={{ marginBottom: '22px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: '#334155' }}>
            Requirement Details / Questions
          </label>
          <textarea
            rows="3"
            placeholder="Tell us briefly about your financing needs or timeline..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            style={{
              width: '100%',
              padding: '11px 14px',
              borderRadius: '8px',
              border: '1px solid #cbd5e1',
              fontSize: '14px',
              outline: 'none',
              boxSizing: 'border-box',
              resize: 'vertical',
            }}
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          style={{
            width: '100%',
            padding: '14px',
            backgroundColor: '#0284c7',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
          }}
        >
          {submitting ? 'Submitting Application...' : 'Submit Application Now →'}
        </button>
      </form>
    </div>
  );
}
