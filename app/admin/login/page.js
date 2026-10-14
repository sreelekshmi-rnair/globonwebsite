'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import '/public/css/admin.css';

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = 'Globon Admin - Sign In';
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
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to login');
      }

      router.push('/admin');
      router.refresh();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-card">
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ marginBottom: '18px' }}>
            <Image
              src="/images/logo/logo_.webp"
              alt="Globon Business Solutions"
              width={180}
              height={75}
              style={{ height: '62px', width: 'auto', objectFit: 'contain' }}
              priority
            />
          </div>
          <h2 style={{ fontSize: '22px', fontWeight: '800', margin: '0 0 6px', color: '#005b94' }}>
            Admin Control Center
          </h2>
          <p style={{ color: '#64748b', fontSize: '13.5px', margin: 0 }}>
            Sign in to manage services, loans, blogs &amp; leads
          </p>
        </div>

        {error && (
          <div
            style={{
              padding: '12px 16px',
              backgroundColor: '#fee2e2',
              color: '#dc2626',
              borderRadius: '8px',
              marginBottom: '20px',
              fontSize: '14px',
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g. admin"
              required
            />
          </div>

          <div className="form-group" style={{ marginBottom: '24px' }}>
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="admin-btn admin-btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign In to Dashboard'}
          </button>
        </form>

        <div
          style={{
            marginTop: '24px',
            paddingTop: '20px',
            borderTop: '1px solid #e2e8f0',
            textAlign: 'center',
            fontSize: '13px',
            color: '#64748b',
          }}
        >
          Default credentials: <strong>admin</strong> / <strong>admin123</strong>
          <div style={{ marginTop: '12px' }}>
            <a href="/" style={{ color: '#0284c7', textDecoration: 'none', fontWeight: '500' }}>
              &larr; Back to Main Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
