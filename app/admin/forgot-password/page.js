'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '/public/css/admin.css';

export default function AdminForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = 'Globon - Forgot Password';
      let link = document.querySelector("link[rel*='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.type = 'image/png';
      link.href = '/images/logo/logo.png?v=globon3';
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to process request');
      }

      setSuccess(data.message || 'Password reset link sent successfully.');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-signup-card" style={{ maxWidth: '440px' }}>
        <div className="admin-auth-header">
          <div style={{ marginBottom: '14px' }}>
            <Image
              src="/images/logo/logo_.webp"
              alt="Globon Business Solutions"
              width={180}
              height={70}
              style={{ height: '52px', width: 'auto', objectFit: 'contain' }}
              priority
            />
          </div>
          <h2 className="admin-auth-title" style={{ fontSize: '22px', fontWeight: '500', color: '#005b94' }}>
            Forgot Password
          </h2>
          <p style={{ margin: '8px 0 0', fontSize: '13px', color: '#64748b', lineHeight: 1.5 }}>
            Enter your admin email to receive a secure password reset link.
          </p>
        </div>

        {error && (
          <div
            style={{
              padding: '10px 14px',
              backgroundColor: '#fee2e2',
              color: '#dc2626',
              borderRadius: '8px',
              marginBottom: '16px',
              fontSize: '13px',
              lineHeight: 1.4,
              border: '1px solid #fecaca',
            }}
          >
            {error}
          </div>
        )}

        {success ? (
          <div>
            <div
              style={{
                padding: '12px 16px',
                backgroundColor: '#ecfdf5',
                color: '#065f46',
                borderRadius: '8px',
                marginBottom: '18px',
                fontSize: '13.5px',
                lineHeight: 1.5,
                border: '1px solid #a7f3d0',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <div>
                <strong>Reset Link Sent!</strong>
                <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#047857' }}>
                  {success}
                </p>
              </div>
            </div>

            <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.5, marginBottom: '20px' }}>
              Please check your email inbox (and spam folder) for instructions. The reset link is valid for <strong>60 minutes</strong>.
            </p>

            <button
              type="button"
              onClick={() => setSuccess('')}
              className="admin-auth-btn"
              style={{ background: '#f1f5f9 !important', color: '#334155 !important', border: '1px solid #cbd5e1' }}
            >
              Send to Another Email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="admin-auth-group" style={{ marginBottom: '20px' }}>
              <label className="admin-auth-label">Email Address</label>
              <input
                type="email"
                className="admin-auth-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. name@example.com"
                required
                autoFocus
                style={{ height: '40px', fontSize: '13.5px' }}
              />
            </div>

            <button
              type="submit"
              className="admin-auth-btn"
              disabled={loading}
              style={{ height: '40px', fontSize: '14px' }}
            >
              {loading ? 'Sending Reset Link...' : 'Send Reset Link'}
            </button>
          </form>
        )}

        <div className="admin-auth-footer" style={{ marginTop: '20px' }}>
          <div>
            Remembered your password?{' '}
            <Link href="/admin/login" style={{ color: '#005b94', fontWeight: 500, textDecoration: 'none' }}>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
