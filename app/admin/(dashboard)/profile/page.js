'use client';

import { useState, useEffect } from 'react';
import '/public/css/admin.css';

export default function AdminProfilePage() {
  const [activeTab, setActiveTab] = useState('edit'); // 'edit' | 'password'

  // Profile data
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    avatar: '',
  });

  // Edit form state
  const [editForm, setEditForm] = useState({
    name: '',
    phone: '',
    address: '',
  });

  // Password form state
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(true);
  const [savingProfile, setSavingProfile] = useState(false);
  const [savingPassword, setSavingPassword] = useState(false);
  const [profileSuccess, setProfileSuccess] = useState('');
  const [profileError, setProfileError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch('/api/admin/profile');
        if (res.ok) {
          const data = await res.json();
          if (data.profile) {
            setProfile(data.profile);
            setEditForm({
              name: data.profile.name || '',
              phone: data.profile.phone || '',
              address: data.profile.address || '',
            });
          }
        }
      } catch (err) {
        console.error('Failed to load profile', err);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setProfileError('');
    setProfileSuccess('');
    setSavingProfile(true);

    try {
      const res = await fetch('/api/admin/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editForm),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to update profile');
      }

      setProfile(data.profile);
      setProfileSuccess('Profile updated successfully!');
      setTimeout(() => setProfileSuccess(''), 4000);
    } catch (err) {
      setProfileError(err.message);
    } finally {
      setSavingProfile(false);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setPasswordError('');
    setPasswordSuccess('');

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordError('New passwords do not match');
      return;
    }

    if (passwordForm.newPassword.length < 6) {
      setPasswordError('New password must be at least 6 characters long');
      return;
    }

    setSavingPassword(true);

    try {
      const res = await fetch('/api/admin/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(passwordForm),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to update password');
      }

      setPasswordSuccess('Password has been updated successfully!');
      setPasswordForm({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
      setTimeout(() => setPasswordSuccess(''), 4000);
    } catch (err) {
      setPasswordError(err.message);
    } finally {
      setSavingPassword(false);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: '60px 20px', textAlign: 'center', color: '#64748b' }}>
        Loading profile information...
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', paddingBottom: '40px' }}>
      {/* Two Column Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px',
          alignItems: 'start',
        }}
      >
        {/* Left Column: Profile Details Card */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 18px rgba(0, 91, 148, 0.04)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              padding: '18px 24px',
              borderBottom: '1px solid #f1f5f9',
            }}
          >
            <h2
              style={{
                fontSize: '18px',
                fontWeight: 500,
                color: '#0f172a',
                margin: 0,
              }}
            >
              Profile Details
            </h2>
          </div>

          <div
            style={{
              padding: '36px 24px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Circular Avatar */}
            <div
              style={{
                width: '130px',
                height: '130px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #2b4c5f 0%, #1a3240 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                boxShadow: '0 6px 20px rgba(0, 91, 148, 0.15)',
                border: '4px solid #ffffff',
                marginBottom: '20px',
              }}
            >
              {profile.avatar ? (
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <svg
                  width="85"
                  height="85"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="50" fill="#2d5267" />
                  {/* Neck */}
                  <rect x="42" y="55" width="16" height="18" fill="#e2a878" />
                  {/* Shirt */}
                  <path d="M22 92 C22 75, 36 68, 50 68 C64 68, 78 75, 78 92 Z" fill="#e05a36" />
                  {/* Collar */}
                  <polygon points="50,78 40,68 60,68" fill="#ffffff" />
                  {/* Face */}
                  <ellipse cx="50" cy="46" rx="19" ry="21" fill="#f4be92" />
                  {/* Hair */}
                  <path
                    d="M31 42 C30 25, 45 22, 50 22 C55 22, 70 25, 69 42 C67 36, 61 32, 50 32 C39 32, 33 36, 31 42 Z"
                    fill="#a66e4e"
                  />
                  {/* Beard */}
                  <path
                    d="M34 46 C34 60, 42 66, 50 66 C58 66, 66 60, 66 46 C66 54, 58 61, 50 61 C42 61, 34 54, 34 46 Z"
                    fill="#a66e4e"
                  />
                  {/* Eyes */}
                  <circle cx="43" cy="44" r="2.2" fill="#334155" />
                  <circle cx="57" cy="44" r="2.2" fill="#334155" />
                  {/* Nose */}
                  <path d="M50 45 L48 49 L52 49" stroke="#d79461" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              )}
            </div>

            {/* User Info Details */}
            <h3
              style={{
                fontSize: '20px',
                fontWeight: 500,
                color: '#0f172a',
                margin: '0 0 6px 0',
              }}
            >
              {profile.name || 'Admin User'}
            </h3>

            <div
              style={{
                fontSize: '14px',
                color: '#64748b',
                marginBottom: '14px',
                wordBreak: 'break-all',
              }}
            >
              {profile.email || 'admin@globon.com'}
            </div>

            <div
              style={{
                fontSize: '13.5px',
                color: '#475569',
                marginBottom: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>{profile.phone || '+91 9876543210'}</span>
            </div>

            <div
              style={{
                fontSize: '13px',
                color: '#64748b',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textAlign: 'center',
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{profile.address || '123 Street, City, Country'}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Manage Profile Card */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 18px rgba(0, 91, 148, 0.04)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              padding: '18px 24px',
              borderBottom: '1px solid #f1f5f9',
            }}
          >
            <h2
              style={{
                fontSize: '18px',
                fontWeight: 500,
                color: '#0f172a',
                margin: 0,
              }}
            >
              Manage Profile
            </h2>
          </div>

          <div style={{ padding: '24px' }}>
            {/* Tabs Header */}
            <div
              style={{
                display: 'flex',
                gap: '12px',
                marginBottom: '26px',
                borderBottom: '1px solid #e2e8f0',
                paddingBottom: '12px',
              }}
            >
              <button
                type="button"
                onClick={() => setActiveTab('edit')}
                style={{
                  background: activeTab === 'edit' ? '#f0f9ff' : 'transparent',
                  border: activeTab === 'edit' ? '1px solid #bae6fd' : '1px solid transparent',
                  color: activeTab === 'edit' ? '#005b94' : '#64748b',
                  padding: '7px 16px',
                  borderRadius: '8px',
                  fontSize: '13.5px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                Edit Profile
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('password')}
                style={{
                  background: activeTab === 'password' ? '#fef2f2' : 'transparent',
                  border: activeTab === 'password' ? '1px solid #fecaca' : '1px solid transparent',
                  color: activeTab === 'password' ? '#ef4444' : '#ea580c',
                  padding: '7px 16px',
                  borderRadius: '8px',
                  fontSize: '13.5px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                Change Password
              </button>
            </div>

            {/* TAB 1: Edit Profile */}
            {activeTab === 'edit' && (
              <form onSubmit={handleProfileSubmit}>
                {profileSuccess && (
                  <div
                    style={{
                      padding: '10px 14px',
                      backgroundColor: '#ecfdf5',
                      color: '#065f46',
                      borderRadius: '8px',
                      marginBottom: '16px',
                      fontSize: '13px',
                      border: '1px solid #a7f3d0',
                    }}
                  >
                    ✓ {profileSuccess}
                  </div>
                )}

                {profileError && (
                  <div
                    style={{
                      padding: '10px 14px',
                      backgroundColor: '#fee2e2',
                      color: '#dc2626',
                      borderRadius: '8px',
                      marginBottom: '16px',
                      fontSize: '13px',
                      border: '1px solid #fecaca',
                    }}
                  >
                    {profileError}
                  </div>
                )}

                <div style={{ marginBottom: '16px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '12.5px',
                      fontWeight: 500,
                      color: '#334155',
                      marginBottom: '5px',
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      height: '40px',
                      padding: '8px 14px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '13.5px',
                      color: '#0f172a',
                      outline: 'none',
                    }}
                  />
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '12.5px',
                      fontWeight: 500,
                      color: '#334155',
                      marginBottom: '5px',
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={profile.email}
                    disabled
                    style={{
                      width: '100%',
                      height: '40px',
                      padding: '8px 14px',
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0',
                      fontSize: '13.5px',
                      color: '#64748b',
                      background: '#f8fafc',
                      cursor: 'not-allowed',
                    }}
                  />
                  <span style={{ fontSize: '11px', color: '#94a3b8' }}>
                    Email address is tied to your login credentials.
                  </span>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '12.5px',
                      fontWeight: 500,
                      color: '#334155',
                      marginBottom: '5px',
                    }}
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    value={editForm.phone}
                    onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                    placeholder="+91 9876543210"
                    style={{
                      width: '100%',
                      height: '40px',
                      padding: '8px 14px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '13.5px',
                      color: '#0f172a',
                      outline: 'none',
                    }}
                  />
                </div>

                <div style={{ marginBottom: '22px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '12.5px',
                      fontWeight: 500,
                      color: '#334155',
                      marginBottom: '5px',
                    }}
                  >
                    Address
                  </label>
                  <textarea
                    rows="3"
                    value={editForm.address}
                    onChange={(e) => setEditForm({ ...editForm, address: e.target.value })}
                    placeholder="123 Street, City, Country"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '13.5px',
                      color: '#0f172a',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={savingProfile}
                  className="admin-btn admin-btn-primary"
                  style={{
                    padding: '10px 24px',
                    fontSize: '13.5px',
                    fontWeight: 500,
                    borderRadius: '8px',
                  }}
                >
                  {savingProfile ? 'Saving Changes...' : 'Save Changes'}
                </button>
              </form>
            )}

            {/* TAB 2: Change Password */}
            {activeTab === 'password' && (
              <form onSubmit={handlePasswordSubmit}>
                {passwordSuccess && (
                  <div
                    style={{
                      padding: '10px 14px',
                      backgroundColor: '#ecfdf5',
                      color: '#065f46',
                      borderRadius: '8px',
                      marginBottom: '16px',
                      fontSize: '13px',
                      border: '1px solid #a7f3d0',
                    }}
                  >
                    ✓ {passwordSuccess}
                  </div>
                )}

                {passwordError && (
                  <div
                    style={{
                      padding: '10px 14px',
                      backgroundColor: '#fee2e2',
                      color: '#dc2626',
                      borderRadius: '8px',
                      marginBottom: '16px',
                      fontSize: '13px',
                      border: '1px solid #fecaca',
                    }}
                  >
                    {passwordError}
                  </div>
                )}

                {/* Current Password */}
                <div style={{ marginBottom: '16px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '12.5px',
                      fontWeight: 500,
                      color: '#334155',
                      marginBottom: '5px',
                    }}
                  >
                    Current Password
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type={showCurrentPassword ? 'text' : 'password'}
                      value={passwordForm.currentPassword}
                      onChange={(e) =>
                        setPasswordForm({ ...passwordForm, currentPassword: e.target.value })
                      }
                      required
                      placeholder="••••••••"
                      style={{
                        width: '100%',
                        height: '40px',
                        padding: '8px 42px 8px 14px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '13.5px',
                        color: '#0f172a',
                        outline: 'none',
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      aria-label="Toggle password visibility"
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        color: '#64748b',
                        cursor: 'pointer',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {showCurrentPassword ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                          <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                          <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                          <line x1="2" y1="2" x2="22" y2="22" />
                        </svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* New Password */}
                <div style={{ marginBottom: '16px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '12.5px',
                      fontWeight: 500,
                      color: '#334155',
                      marginBottom: '5px',
                    }}
                  >
                    New Password
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type={showNewPassword ? 'text' : 'password'}
                      value={passwordForm.newPassword}
                      onChange={(e) =>
                        setPasswordForm({ ...passwordForm, newPassword: e.target.value })
                      }
                      required
                      minLength={6}
                      placeholder="At least 6 characters"
                      style={{
                        width: '100%',
                        height: '40px',
                        padding: '8px 42px 8px 14px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '13.5px',
                        color: '#0f172a',
                        outline: 'none',
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      aria-label="Toggle password visibility"
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        color: '#64748b',
                        cursor: 'pointer',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {showNewPassword ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                          <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                          <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                          <line x1="2" y1="2" x2="22" y2="22" />
                        </svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm New Password */}
                <div style={{ marginBottom: '22px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '12.5px',
                      fontWeight: 500,
                      color: '#334155',
                      marginBottom: '5px',
                    }}
                  >
                    Confirm New Password
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={passwordForm.confirmPassword}
                      onChange={(e) =>
                        setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })
                      }
                      required
                      minLength={6}
                      placeholder="Re-enter new password"
                      style={{
                        width: '100%',
                        height: '40px',
                        padding: '8px 42px 8px 14px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '13.5px',
                        color: '#0f172a',
                        outline: 'none',
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      aria-label="Toggle password visibility"
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        color: '#64748b',
                        cursor: 'pointer',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {showConfirmPassword ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                          <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                          <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                          <line x1="2" y1="2" x2="22" y2="22" />
                        </svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={savingPassword}
                  className="admin-btn admin-btn-primary"
                  style={{
                    padding: '10px 24px',
                    fontSize: '13.5px',
                    fontWeight: 500,
                    borderRadius: '8px',
                  }}
                >
                  {savingPassword ? 'Updating Password...' : 'Change Password'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
