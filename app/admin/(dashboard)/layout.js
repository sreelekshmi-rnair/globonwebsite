'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import '/public/css/admin.css';

export default function AdminDashboardLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [adminUser, setAdminUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newLeadsCount, setNewLeadsCount] = useState(0);
  const [newContactsCount, setNewContactsCount] = useState(0);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const titles = {
        '/admin': 'Globon Admin - Dashboard',
        '/admin/services': 'Globon Admin - Services',
        '/admin/loans': 'Globon Admin - Loan Products',
        '/admin/blogs': 'Globon Admin - Blogs',
        '/admin/inquiries': 'Globon Admin - Consultations & Leads',
        '/admin/contacts': 'Globon Admin - Contact Messages',
      };
      document.title = titles[pathname] || 'Globon Admin Panel';

      let link = document.querySelector("link[rel*='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.type = 'image/png';
      link.href = '/images/logo/logo.png?v=globon3';
    }

    async function checkAuth() {
      try {
        const res = await fetch('/api/auth/me');
        if (!res.ok) {
          router.push('/admin/login');
          return;
        }
        const data = await res.json();
        setAdminUser(data.user);

        const statsRes = await fetch('/api/admin/stats');
        if (statsRes.ok) {
          const statsData = await statsRes.json();
          setNewLeadsCount(statsData.counts?.newInquiries || 0);
          setNewContactsCount(statsData.counts?.newContacts || statsData.counts?.contacts || 0);
        }
      } catch (err) {
        router.push('/admin/login');
      } finally {
        setLoading(false);
      }
    }
    checkAuth();
  }, [router, pathname]);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/admin/login');
      router.refresh();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
        <div style={{ textAlign: 'center', color: '#64748b' }}>
          <div style={{ fontSize: '28px', marginBottom: '8px' }}>⚡</div>
          Loading Admin Control Center...
        </div>
      </div>
    );
  }

  return (
    <div className="admin-body">
      <div className="admin-wrapper">
        {/* Crisp White Sidebar with Globon Official Logo */}
        <aside className="admin-sidebar">
          <div className="admin-sidebar-header">
            <Link href="/admin" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image
                src="/images/logo/logo_.webp"
                alt="Globon Business Solutions"
                width={160}
                height={65}
                style={{ height: '54px', width: 'auto', objectFit: 'contain' }}
                priority
              />
            </Link>
          </div>

          <nav className="admin-nav">
            <div className="admin-nav-category">HOME</div>
            <Link
              href="/admin"
              className={`admin-nav-item ${pathname === '/admin' ? 'active' : ''}`}
            >
              <span style={{ fontSize: '17px' }}>⊞</span>
              <span>Dashboard</span>
            </Link>

            <div className="admin-nav-category">MANAGEMENT</div>
            <Link
              href="/admin/services"
              className={`admin-nav-item ${pathname === '/admin/services' ? 'active' : ''}`}
            >
              <span style={{ fontSize: '17px' }}>💼</span>
              <span>Services</span>
            </Link>

            <Link
              href="/admin/loans"
              className={`admin-nav-item ${pathname === '/admin/loans' ? 'active' : ''}`}
            >
              <span style={{ fontSize: '17px' }}>💰</span>
              <span>Loan Products</span>
            </Link>

            <Link
              href="/admin/blogs"
              className={`admin-nav-item ${pathname === '/admin/blogs' ? 'active' : ''}`}
            >
              <span style={{ fontSize: '17px' }}>📝</span>
              <span>Blogs</span>
            </Link>

            <div className="admin-nav-category">COMMUNICATION</div>
            <Link
              href="/admin/inquiries"
              className={`admin-nav-item ${pathname === '/admin/inquiries' ? 'active' : ''}`}
            >
              <span style={{ fontSize: '17px' }}>📬</span>
              <span>Consultations &amp; Leads</span>
              {Boolean(newLeadsCount && newLeadsCount > 0) && (
                <span className="admin-nav-badge">{newLeadsCount}</span>
              )}
            </Link>

            <Link
              href="/admin/contacts"
              className={`admin-nav-item ${pathname === '/admin/contacts' ? 'active' : ''}`}
            >
              <span style={{ fontSize: '17px' }}>💬</span>
              <span>Contact Messages</span>
              {Boolean(newContactsCount && newContactsCount > 0) && (
                <span className="admin-nav-badge" style={{ background: '#059669' }}>{newContactsCount}</span>
              )}
            </Link>
          </nav>

          <div className="admin-sidebar-footer">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: '#f1f5f9',
                  color: '#334155',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '13px',
                }}
              >
                {adminUser?.username?.[0]?.toUpperCase() || 'A'}
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>
                  {adminUser?.name || 'Administrator'}
                </div>
                <div style={{ fontSize: '11px', color: '#94a3b8' }}>Admin Mode</div>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="admin-btn admin-btn-danger admin-btn-sm"
              title="Logout"
            >
              Exit
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="admin-main">
          <header className="admin-topbar">
            <div>
              <span style={{ color: '#94a3b8', fontSize: '12px', fontWeight: '600', letterSpacing: '0.5px' }}>
                ADMIN CONTROL PANEL
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <a
                href="/"
                className="admin-btn admin-btn-outline admin-btn-sm"
                target="_blank"
                rel="noreferrer"
              >
                Live Site ↗
              </a>
            </div>
          </header>

          <main className="admin-content">{children}</main>
        </div>
      </div>
    </div>
  );
}
