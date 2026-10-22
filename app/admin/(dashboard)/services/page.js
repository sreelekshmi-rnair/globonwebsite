'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CATEGORY_OPTIONS = [
  { slug: 'loans-advances', title: 'Loans & Advances', icon: '🏦' },
  { slug: 'business-financial-solutions', title: 'Business & Financial Solutions', icon: '💼' },
  { slug: 'business-registration-compliance', title: 'Business Registration & Compliance', icon: '🏛️' },
  { slug: 'business-planning-consultancy', title: 'Business Planning & Consultancy', icon: '📊' },
  { slug: 'business-technology-solutions', title: 'Business Technology Solutions', icon: '💻' },
  { slug: 'life-health-insurance', title: 'Life & Health Insurance', icon: '🛡️' },
  { slug: 'travel-group-insurance', title: 'Travel & Group Insurance', icon: '✈️' },
  { slug: 'real-estate-services', title: 'Real Estate Services', icon: '🏡' },
  { slug: 'digital-marketing-services', title: 'Digital & Marketing Services', icon: '🚀' },
];

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

export default function AdminServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, id: null, title: '' });
  const [deleting, setDeleting] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '', liveLink: '', categoryLink: '' });
  const [activeDropdownId, setActiveDropdownId] = useState(null);
  const [uploadingHero, setUploadingHero] = useState(false);
  const [uploadingOverview, setUploadingOverview] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const heroFileInputRef = useRef(null);
  const overviewFileInputRef = useRef(null);

  const handleFileUpload = async (e, field = 'heroImage') => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setUploadError('Please select an image file (PNG, JPG, WEBP, SVG, etc.)');
      return;
    }

    if (field === 'heroImage') setUploadingHero(true);
    if (field === 'overviewImage') setUploadingOverview(true);
    setUploadError('');

    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to upload image');
      }

      setForm((prev) => ({
        ...prev,
        [field]: data.url,
      }));
    } catch (err) {
      console.error('Image upload error:', err);
      setUploadError(err.message || 'Image upload failed');
    } finally {
      if (field === 'heroImage') {
        setUploadingHero(false);
        if (heroFileInputRef.current) heroFileInputRef.current.value = '';
      }
      if (field === 'overviewImage') {
        setUploadingOverview(false);
        if (overviewFileInputRef.current) overviewFileInputRef.current.value = '';
      }
    }
  };

  // Unified Single-Form State - Clean and only saving user-provided fields
  const initialForm = {
    category: 'loans-advances',
    customCategory: '',
    title: '',
    slug: '',
    subtitle: '',
    shortDesc: '',
    heroImage: '',
    overviewTitle: '',
    overviewDesc: '',
    overviewImage: '',
    overviewBulletsText: '',
    highlightsText: '',
    optionsBadge: '',
    optionsTitle: '',
    options: [],
    documentGroups: [],
    advisoryNote: '',
    eligibilityDesc: '',
    feesDesc: '',
    faqs: [],
  };

  const [form, setForm] = useState(initialForm);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/services');
      if (res.ok) {
        const data = await res.json();
        setServices(data.services || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Automatically dismiss message after 4 seconds
  useEffect(() => {
    if (!message.text) return;
    const timer = setTimeout(() => {
      setMessage({ text: '', type: '', liveLink: '', categoryLink: '' });
    }, 4000);
    return () => clearTimeout(timer);
  }, [message.text]);

  // Close dropdown menu on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.service-action-dropdown')) {
        setActiveDropdownId(null);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const openCreateModal = () => {
    setEditingService(null);
    const defaultCat = selectedCategory !== 'ALL' ? selectedCategory : 'loans-advances';
    setForm({
      ...initialForm,
      category: defaultCat,
    });
    setIsModalOpen(true);
  };

  const openEditModal = (service) => {
    setEditingService(service);
    const isStandardCat = CATEGORY_OPTIONS.some((c) => c.slug === service.category);

    const overviewBulletsArr = Array.isArray(service.overviewBullets) && service.overviewBullets.length > 0
      ? service.overviewBullets
      : [];

    const highlightsArr = Array.isArray(service.features) && service.features.length > 0
      ? service.features
      : Array.isArray(service.highlights) && service.highlights.length > 0
      ? service.highlights
      : [];

    const faqs = Array.isArray(service.faqs) && service.faqs.length > 0
      ? service.faqs.map((f) => ({ q: f.q || f.question || '', a: f.a || f.answer || '' }))
      : [];

    const docGroups = Array.isArray(service.documentGroups) && service.documentGroups.length > 0
      ? service.documentGroups.map((g) => ({
          title: g.title || '',
          subtitle: g.subtitle || '',
          icon: g.icon || '💼',
          docsText: Array.isArray(g.docs) ? g.docs.join('\n') : (g.docs || ''),
        }))
      : [];

    const options = Array.isArray(service.options) && service.options.length > 0
      ? service.options.map((o) => ({
          title: o.title || '',
          desc: o.desc || o.description || '',
          icon: o.icon || '🌟',
        }))
      : [];

    setForm({
      category: isStandardCat ? service.category : 'custom',
      customCategory: isStandardCat ? '' : (service.categoryTitle || service.category || ''),
      title: service.title || '',
      slug: service.slug || '',
      subtitle: service.subtitle || service.tagline || '',
      shortDesc: service.shortDesc || '',
      heroImage: service.heroImage || service.image || '',
      overviewTitle: service.overviewTitle || '',
      overviewDesc: service.overviewDesc || '',
      overviewImage: service.overviewImage || '',
      overviewBulletsText: (overviewBulletsArr.length > 0 ? overviewBulletsArr : highlightsArr).join('\n'),
      highlightsText: highlightsArr.join('\n'),
      optionsBadge: service.optionsBadge || '',
      optionsTitle: service.optionsTitle || '',
      options,
      documentGroups: docGroups,
      advisoryNote: service.advisoryNote || '',
      eligibilityDesc: service.eligibilityDesc || '',
      feesDesc: service.feesDesc || '',
      faqs,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingService(null);
  };

  const handleDocGroupChange = (index, field, value) => {
    setForm((prev) => {
      const updated = [...(prev.documentGroups || [])];
      if (!updated[index]) updated[index] = { title: '', subtitle: '', icon: '💼', docsText: '' };
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, documentGroups: updated };
    });
  };

  const handleAddDocGroup = () => {
    setForm((prev) => ({
      ...prev,
      documentGroups: [
        ...(prev.documentGroups || []),
        { title: '', subtitle: '', icon: '📋', docsText: '' },
      ],
    }));
  };

  const handleRemoveDocGroup = (index) => {
    setForm((prev) => ({
      ...prev,
      documentGroups: (prev.documentGroups || []).filter((_, i) => i !== index),
    }));
  };

  const handleOptionChange = (index, field, value) => {
    setForm((prev) => {
      const updated = [...(prev.options || [])];
      if (!updated[index]) updated[index] = { title: '', desc: '', icon: '🌟' };
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, options: updated };
    });
  };

  const handleAddOption = () => {
    setForm((prev) => ({
      ...prev,
      options: [
        ...(prev.options || []),
        { title: '', desc: '', icon: '🌟' },
      ],
    }));
  };

  const handleRemoveOption = (index) => {
    setForm((prev) => ({
      ...prev,
      options: (prev.options || []).filter((_, i) => i !== index),
    }));
  };

  const handleFaqChange = (index, field, value) => {
    setForm((prev) => {
      const updated = [...(prev.faqs || [])];
      if (!updated[index]) updated[index] = { q: '', a: '' };
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, faqs: updated };
    });
  };

  const handleAddFaq = () => {
    setForm((prev) => ({
      ...prev,
      faqs: [...(prev.faqs || []), { q: '', a: '' }],
    }));
  };

  const handleRemoveFaq = (index) => {
    setForm((prev) => ({
      ...prev,
      faqs: (prev.faqs || []).filter((_, i) => i !== index),
    }));
  };

  const handleTitleChange = (val) => {
    setForm((prev) => ({
      ...prev,
      title: val,
      slug: prev.slug === '' || prev.slug === slugify(prev.title) ? slugify(val) : prev.slug,
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage({ text: '', type: '', liveLink: '', categoryLink: '' });

    try {
      const finalCategory = form.category === 'custom' ? slugify(form.customCategory) : form.category;
      if (!form.title.trim()) throw new Error('Service Title is required');
      if (!finalCategory) throw new Error('Category selection is required');

      const finalSlug = form.slug.trim() || slugify(form.title);

      // Parse overview bullets - ONLY what user typed
      const parsedOverviewBullets = (form.overviewBulletsText || '')
        .split('\n')
        .map((s) => s.trim())
        .filter(Boolean);

      // Parse highlights - ONLY what user typed
      const parsedHighlights = (form.highlightsText || '')
        .split('\n')
        .map((s) => s.trim())
        .filter(Boolean);

      // Parse FAQs - ONLY what user added
      const parsedFaqs = (form.faqs || [])
        .map((f) => ({ q: f.q?.trim() || '', a: f.a?.trim() || '' }))
        .filter((f) => f.q && f.a);

      // Parse Document Groups - ONLY what user added
      const parsedDocGroups = (form.documentGroups || [])
        .map((g) => ({
          title: g.title?.trim() || '',
          subtitle: g.subtitle?.trim() || '',
          icon: g.icon || '💼',
          docs: (g.docsText || '')
            .split('\n')
            .map((s) => s.trim())
            .filter(Boolean),
        }))
          .filter((g) => g.title || g.docs.length > 0);

      // Parse Options / Eligible Purposes - ONLY what user added
      const parsedOptions = (form.options || [])
        .map((o, idx) => ({
          title: o.title?.trim() || '',
          desc: o.desc?.trim() || '',
          icon: o.icon || (idx === 0 ? '👨‍👩‍👧' : idx === 1 ? '🎓' : '🏠'),
          bg: idx % 3 === 0 ? '#eff6ff' : idx % 3 === 1 ? '#f0fdf4' : '#fffbeb',
          border: idx % 3 === 0 ? '#bfdbfe' : idx % 3 === 1 ? '#bbf7d0' : '#fde68a',
          iconBg: idx % 3 === 0 ? '#dbeafe' : idx % 3 === 1 ? '#dcfce7' : '#fef3c7',
          accent: idx % 3 === 0 ? '#0366a2' : idx % 3 === 1 ? '#16a34a' : '#d97706',
        }))
        .filter((o) => o.title || o.desc);

      // Build payload strictly from user input (NO fake fallbacks, NO legacy fields)
      const payload = {
        id: editingService ? String(editingService.id || '') : undefined,
        originalId: editingService ? String(editingService.id || '') : undefined,
        originalSlug: editingService ? String(editingService.slug || '') : undefined,
        title: form.title.trim(),
        slug: finalSlug,
        category: finalCategory,
        subtitle: form.subtitle.trim(),
        shortDesc: form.shortDesc.trim(),
        heroImage: form.heroImage.trim(),
        overviewTitle: form.overviewTitle?.trim() || '',
        overviewDesc: form.overviewDesc?.trim() || '',
        overviewImage: form.overviewImage?.trim() || '',
        overviewBullets: parsedOverviewBullets,
        optionsBadge: form.optionsBadge?.trim() || '',
        optionsTitle: form.optionsTitle?.trim() || '',
        options: parsedOptions,
        features: parsedHighlights,
        highlights: parsedHighlights,
        eligibilityDesc: form.eligibilityDesc?.trim() || '',
        feesDesc: form.feesDesc?.trim() || '',
        documentGroups: parsedDocGroups,
        advisoryNote: form.advisoryNote?.trim() || '',
        faqs: parsedFaqs,
      };

      const url = editingService ? `/api/services/${editingService.id || editingService.slug}` : '/api/services';
      const method = editingService ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to save service');

      const liveServiceUrl = `/services/${finalCategory}/${finalSlug}`;
      const categoryUrl = `/services/${finalCategory}`;

      setMessage({
        text: `Service "${payload.title}" successfully ${editingService ? 'updated' : 'published'}! It is now live in that category.`,
        type: 'success',
        liveLink: liveServiceUrl,
        categoryLink: categoryUrl,
      });

      closeModal();
      fetchServices();
    } catch (err) {
      setMessage({ text: err.message, type: 'error', liveLink: '', categoryLink: '' });
    } finally {
      setSaving(false);
    }
  };

  const openDeleteModal = (service) => {
    setDeleteModal({
      isOpen: true,
      id: service.id || service.slug,
      title: service.title || '',
    });
  };

  const closeDeleteModal = () => {
    setDeleteModal({ isOpen: false, id: null, title: '' });
  };

  const executeDelete = async () => {
    if (!deleteModal.id) return;
    setDeleting(true);

    try {
      const res = await fetch(`/api/services/${deleteModal.id}`, { method: 'DELETE' });
      if (res.ok) {
        setMessage({ text: `Service "${deleteModal.title}" deleted successfully`, type: 'success', liveLink: '', categoryLink: '' });
        closeDeleteModal();
        fetchServices();
      } else {
        const data = await res.json();
        throw new Error(data.error || 'Failed to delete service');
      }
    } catch (err) {
      alert(err.message);
    } finally {
      setDeleting(false);
    }
  };

  // Filtered Services List
  const filteredServices = services.filter((s) => {
    const matchesCat = selectedCategory === 'ALL' || s.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      s.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.shortDesc && s.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())) ||
      s.slug?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const totalPages = Math.ceil(filteredServices.length / pageSize) || 1;
  const validCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (validCurrentPage - 1) * pageSize;
  const paginatedServices = filteredServices.slice(startIndex, startIndex + pageSize);

  const currentCatObj = CATEGORY_OPTIONS.find((c) => c.slug === form.category);

  return (
    <div style={{ paddingBottom: '60px' }}>
      {/* Top Banner: Airy & Aligned */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '24px',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
            <h1
              style={{
                fontSize: '20px',
                fontWeight: '500',
                color: '#0f172a',
                margin: 0,
                letterSpacing: '-0.2px',
              }}
            >
              Services Management
            </h1>
            <span
              style={{
                backgroundColor: '#e0f2fe',
                color: '#005b94',
                fontSize: '12.5px',
                fontWeight: '500',
                padding: '3px 10px',
                borderRadius: '20px',
              }}
            >
              {services.length} Total
            </span>
          </div>
          <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
            Manage, edit, and organize all website services across categories.
          </p>
        </div>

        <button
          onClick={openCreateModal}
          style={{
            backgroundColor: '#005b94',
            color: '#ffffff',
            padding: '11px 22px',
            borderRadius: '10px',
            fontWeight: '500',
            fontSize: '14px',
            border: 'none',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 14px rgba(0, 91, 148, 0.25)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#004775';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#005b94';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <span style={{ fontSize: '18px', lineHeight: 1 }}>+</span>
          <span>Add New Service</span>
        </button>
      </div>

      {/* Success / Error Notification */}
      {message.text && (
        <div
          style={{
            padding: '14px 20px',
            borderRadius: '12px',
            marginBottom: '20px',
            backgroundColor: message.type === 'success' ? '#dcfce7' : '#fee2e2',
            color: message.type === 'success' ? '#15803d' : '#b91c1c',
            border: `1px solid ${message.type === 'success' ? '#86efac' : '#fca5a5'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600', fontSize: '14px' }}>
            <span>{message.type === 'success' ? '✓' : '⚠️'}</span>
            <span>{message.text}</span>
          </div>
          <button
            type="button"
            onClick={() => setMessage({ text: '', type: '', liveLink: '', categoryLink: '' })}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '16px',
              color: message.type === 'success' ? '#15803d' : '#b91c1c',
              cursor: 'pointer',
              padding: '0 4px',
              lineHeight: 1,
            }}
            title="Dismiss"
          >
            ✕
          </button>
        </div>
      )}

      {/* Streamlined Single-Row Toolbar */}
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '14px',
          padding: '14px 18px',
          marginBottom: '20px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '14px',
        }}
      >
        {/* Left Side: Search + Category Dropdown */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '1 1 auto', minWidth: '280px' }}>
          {/* Search Input */}
          <div style={{ position: 'relative', flex: '1 1 260px', maxWidth: '360px' }}>
            <span
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#94a3b8',
                fontSize: '15px',
                pointerEvents: 'none',
              }}
            >
              🔍
            </span>
            <input
              type="text"
              placeholder="Search services by title or keyword..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              style={{
                width: '100%',
                padding: '10px 36px 10px 38px',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                fontSize: '14px',
                outline: 'none',
                color: '#1e293b',
                backgroundColor: '#ffffff',
                transition: 'all 0.2s ease',
              }}
              onFocus={(e) => {
                e.target.style.backgroundColor = '#ffffff';
                e.target.style.borderColor = '#005b94';
              }}
              onBlur={(e) => {
                e.target.style.backgroundColor = '#ffffff';
                e.target.style.borderColor = '#e2e8f0';
              }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setCurrentPage(1);
                }}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#94a3b8',
                  fontSize: '14px',
                  padding: '2px',
                }}
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Dropdown Selector */}
          <div style={{ position: 'relative', minWidth: '220px' }}>
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1);
              }}
              style={{
                width: '100%',
                padding: '10px 34px 10px 14px',
                borderRadius: '8px',
                border: '1px solid #cbd5e1',
                fontSize: '13.5px',
                fontWeight: '600',
                color: selectedCategory === 'ALL' ? '#334155' : '#005b94',
                backgroundColor: selectedCategory === 'ALL' ? '#ffffff' : '#f0f9ff',
                cursor: 'pointer',
                outline: 'none',
                appearance: 'none',
                WebkitAppearance: 'none',
                backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
                backgroundSize: '14px',
              }}
            >
              <option value="ALL">📁 All Categories ({services.length})</option>
              {CATEGORY_OPTIONS.map((cat) => {
                const count = services.filter((s) => s.category === cat.slug).length;
                return (
                  <option key={cat.slug} value={cat.slug}>
                    {cat.icon} {cat.title} ({count})
                  </option>
                );
              })}
            </select>
          </div>

          {/* Active filter badge if category is selected */}
          {selectedCategory !== 'ALL' && (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                backgroundColor: '#e0f2fe',
                color: '#005b94',
                borderRadius: '20px',
                fontSize: '12.5px',
                fontWeight: '600',
              }}
            >
              <span>{CATEGORY_OPTIONS.find((c) => c.slug === selectedCategory)?.title}</span>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('ALL');
                  setCurrentPage(1);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#005b94',
                  cursor: 'pointer',
                  padding: 0,
                  fontSize: '13px',
                  display: 'flex',
                  alignItems: 'center',
                }}
                title="Clear category filter"
              >
                ✕
              </button>
            </div>
          )}
        </div>

        {/* Right Side: View Switcher (Table vs Grid) & Item Count */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span style={{ fontSize: '13px', color: '#64748b', fontWeight: '500' }}>
            Showing <strong>{filteredServices.length === 0 ? 0 : startIndex + 1}–{Math.min(startIndex + pageSize, filteredServices.length)}</strong> of <strong>{filteredServices.length}</strong>
          </span>

          {/* View Mode Toggle: Cards or List */}
          <div
            style={{
              display: 'inline-flex',
              backgroundColor: '#ffffff',
              padding: '3px',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
            }}
          >
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                border: 'none',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: viewMode === 'grid' ? '#ffffff' : 'transparent',
                color: viewMode === 'grid' ? '#005b94' : '#64748b',
                boxShadow: viewMode === 'grid' ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
                transition: 'all 0.15s ease',
              }}
              title="Cards Grid View"
            >
              <span>⊞</span>
              <span>Cards</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('table')}
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                border: 'none',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: viewMode === 'table' ? '#ffffff' : 'transparent',
                color: viewMode === 'table' ? '#005b94' : '#64748b',
                boxShadow: viewMode === 'table' ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
                transition: 'all 0.15s ease',
              }}
              title="Horizontal Card List"
            >
              <span>☰</span>
              <span>List</span>
            </button>
          </div>
        </div>
      </div>

      {/* Services List Display */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '60px 0', color: '#64748b' }}>
          <div style={{ fontSize: '32px', marginBottom: '12px' }}>⚡</div>
          Loading services...
        </div>
      ) : filteredServices.length === 0 ? (
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '60px 20px',
            textAlign: 'center',
            border: '1px solid #e2e8f0',
          }}
        >
          <div style={{ fontSize: '40px', marginBottom: '12px' }}>📝</div>
          <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#0f172a', marginBottom: '8px' }}>
            No services match your search
          </h3>
          <p style={{ color: '#64748b', fontSize: '14.5px', marginBottom: '20px', maxWidth: '500px', margin: '0 auto 20px auto' }}>
            Try adjusting your search query or category filter, or add a new service.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('ALL');
              setCurrentPage(1);
            }}
            style={{
              backgroundColor: '#f1f5f9',
              color: '#0f172a',
              padding: '10px 20px',
              borderRadius: '8px',
              fontWeight: '500',
              border: '1px solid #cbd5e1',
              cursor: 'pointer',
              marginRight: '12px',
            }}
          >
            Reset Filters
          </button>
          <button
            onClick={openCreateModal}
            style={{
              backgroundColor: '#005b94',
              color: '#ffffff',
              padding: '10px 20px',
              borderRadius: '8px',
              fontWeight: '500',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            + Add New Service
          </button>
        </div>
      ) : viewMode === 'table' ? (
        /* HORIZONTAL CARD ROWS - Clean, floating cards with no vertical spreadsheet borders */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {paginatedServices.map((service) => {
            const catObj = CATEGORY_OPTIONS.find((c) => c.slug === service.category);
            const catName = catObj ? catObj.title : (service.categoryTitle || service.category);
            const liveUrl = `/services/${service.category}/${service.slug}`;
            const categoryUrl = `/services/${service.category}`;

            return (
              <div
                key={service.id || service.slug}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '14px',
                  border: '1px solid #e2e8f0',
                  padding: '16px 22px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '18px',
                  flexWrap: 'wrap',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 91, 148, 0.08)';
                  e.currentTarget.style.borderColor = '#005b94';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.02)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                {/* Left: Title, Slug, Subtitle & Full Description */}
                <div style={{ flex: '1 1 320px', minWidth: '240px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: '14.5px', fontWeight: '500', color: '#0f172a', margin: 0 }}>
                      {service.title}
                    </h3>
                    <span style={{ fontSize: '10.5px', backgroundColor: '#f1f5f9', color: '#475569', padding: '2px 7px', borderRadius: '5px', fontFamily: 'monospace' }}>
                      /{service.slug}
                    </span>
                  </div>
                  {service.subtitle && (
                    <p style={{ fontSize: '12.5px', fontWeight: '500', color: '#005b94', margin: '0 0 4px 0', lineHeight: '1.4' }}>
                      {service.subtitle}
                    </p>
                  )}
                  {(service.shortDesc || service.overviewDesc) && (
                    <p style={{ fontSize: '12px', color: '#64748b', margin: 0, lineHeight: '1.5' }}>
                      {service.shortDesc || service.overviewDesc}
                    </p>
                  )}
                </div>

                {/* Center: Category Badge */}
                <div style={{ flex: '0 0 auto' }}>
                  <Link
                    href={categoryUrl}
                    target="_blank"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '12.5px',
                      fontWeight: '600',
                      padding: '5px 12px',
                      borderRadius: '12px',
                      backgroundColor: '#eff6ff',
                      color: '#005b94',
                      border: '1px solid #dbeafe',
                      textDecoration: 'none',
                    }}
                  >
                    <span>{catObj?.icon || '📁'}</span>
                    <span>{catName}</span>
                  </Link>
                </div>

                {/* Right: Live Link + Edit + Delete */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: '0 0 auto' }}>
                  <Link
                    href={liveUrl}
                    target="_blank"
                    style={{
                      fontSize: '13px',
                      fontWeight: '600',
                      color: '#005b94',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '7px 12px',
                      borderRadius: '8px',
                      backgroundColor: '#f0f9ff',
                      border: '1px solid #e0f2fe',
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#e0f2fe';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#f0f9ff';
                    }}
                  >
                    <span>View Page</span>
                    <span>↗</span>
                  </Link>

                  {/* Sky-Blue Action Dropdown Button (matching user reference design) */}
                  <div className="service-action-dropdown" style={{ position: 'relative' }}>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveDropdownId(activeDropdownId === (service.id || service.slug) ? null : (service.id || service.slug));
                      }}
                      style={{
                        width: '36px',
                        height: '36px',
                        backgroundColor: '#38bdf8',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 8px rgba(56, 189, 248, 0.35)',
                        transition: 'all 0.15s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0ea5e9')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#38bdf8')}
                      title="Actions"
                      aria-label="Actions"
                    >
                      <svg width="11" height="9" viewBox="0 0 12 10" fill="#ffffff">
                        <path d="M6 9L1 2H11L6 9Z" />
                      </svg>
                    </button>

                    {activeDropdownId === (service.id || service.slug) && (
                      <div
                        style={{
                          position: 'absolute',
                          top: 'calc(100% + 6px)',
                          right: 0,
                          backgroundColor: '#ffffff',
                          borderRadius: '12px',
                          border: '1px solid #eef2f6',
                          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.09), 0 4px 12px rgba(0, 0, 0, 0.04)',
                          minWidth: '140px',
                          padding: '6px 0',
                          zIndex: 100,
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveDropdownId(null);
                            openEditModal(service);
                          }}
                          style={{
                            display: 'block',
                            width: '100%',
                            textAlign: 'left',
                            padding: '10px 20px',
                            backgroundColor: 'transparent',
                            border: 'none',
                            fontSize: '14px',
                            fontWeight: '500',
                            color: '#334155',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease',
                            fontFamily: 'inherit',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#f8fafc';
                            e.currentTarget.style.color = '#005b94';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = '#334155';
                          }}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveDropdownId(null);
                            openDeleteModal(service);
                          }}
                          style={{
                            display: 'block',
                            width: '100%',
                            textAlign: 'left',
                            padding: '10px 20px',
                            backgroundColor: 'transparent',
                            border: 'none',
                            fontSize: '14px',
                            fontWeight: '500',
                            color: '#475569',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease',
                            fontFamily: 'inherit',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#fff1f2';
                            e.currentTarget.style.color = '#e11d48';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = '#475569';
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* GRID VIEW - Refined, Spacious Cards */
        <div className="row g-4">
          {paginatedServices.map((service) => {
            const catObj = CATEGORY_OPTIONS.find((c) => c.slug === service.category);
            const catName = catObj ? catObj.title : (service.categoryTitle || service.category);
            const liveUrl = `/services/${service.category}/${service.slug}`;
            const categoryUrl = `/services/${service.category}`;

            return (
              <div key={service.id || service.slug} className="col-12 col-md-6 col-lg-4" style={{ zIndex: activeDropdownId === (service.id || service.slug) ? 50 : 1 }}>
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    border: '1px solid #eef2f6',
                    padding: '28px 24px 22px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 20px -2px rgba(0,0,0,0.03)',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px -4px rgba(0, 91, 148, 0.08)';
                    e.currentTarget.style.borderColor = '#cbd5e1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px -2px rgba(0,0,0,0.03)';
                    e.currentTarget.style.borderColor = '#eef2f6';
                  }}
                >
                  <div>
                    {/* Top Row: Category Pill with blue square + Live Link */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', gap: '8px' }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '10px', height: '10px', backgroundColor: '#005b94', borderRadius: '2px', display: 'inline-block' }}></span>
                        <span style={{ fontSize: '11px', fontWeight: '500', letterSpacing: '0.6px', color: '#005b94', textTransform: 'uppercase' }}>
                          {catName}
                        </span>
                      </div>
                      <Link
                        href={liveUrl}
                        target="_blank"
                        style={{
                          fontSize: '12px',
                          color: '#005b94',
                          fontWeight: '500',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '3px',
                          padding: '2px 8px',
                          borderRadius: '6px',
                          backgroundColor: '#f0f9ff',
                        }}
                        title="View live service page"
                      >
                        <span>View</span>
                        <span>↗</span>
                      </Link>
                    </div>

                    {/* Main Title (reduced clean normal letters) */}
                    <h3
                      style={{
                        fontSize: '15px',
                        fontWeight: '500',
                        color: '#0f172a',
                        margin: '0 0 6px 0',
                        lineHeight: '1.35',
                        letterSpacing: '-0.1px',
                      }}
                    >
                      {service.title}
                    </h3>

                    {/* Subtitle */}
                    {service.subtitle && (
                      <h4
                        style={{
                          fontSize: '12.5px',
                          fontWeight: '500',
                          color: '#005b94',
                          lineHeight: '1.4',
                          margin: '0 0 8px 0',
                        }}
                      >
                        {service.subtitle}
                      </h4>
                    )}

                    {/* Full Description / shortDesc */}
                    {(service.shortDesc || service.overviewDesc) && (
                      <p
                        style={{
                          fontSize: '12.5px',
                          color: '#475569',
                          lineHeight: '1.5',
                          margin: '0 0 14px 0',
                        }}
                      >
                        {service.shortDesc || service.overviewDesc}
                      </p>
                    )}

                    {/* Image / Graphic Display */}
                    {service.heroImage && (
                      <div style={{ marginBottom: '18px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #f1f5f9', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                        <img
                          src={service.heroImage}
                          alt={service.title}
                          style={{
                            width: '100%',
                            height: '140px',
                            objectFit: 'cover',
                            display: 'block',
                          }}
                          onError={(e) => {
                            e.currentTarget.parentElement.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Centered Sky-Blue Dropdown Button (matching user reference screenshot) */}
                  <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '6px' }}>
                    <div className="service-action-dropdown" style={{ position: 'relative', display: 'inline-block' }}>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveDropdownId(activeDropdownId === (service.id || service.slug) ? null : (service.id || service.slug));
                        }}
                        style={{
                          width: '36px',
                          height: '36px',
                          backgroundColor: '#38bdf8',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 3px 10px rgba(56, 189, 248, 0.35)',
                          transition: 'all 0.15s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0ea5e9')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#38bdf8')}
                        title="Actions"
                        aria-label="Actions"
                      >
                        <svg width="11" height="9" viewBox="0 0 12 10" fill="#ffffff">
                          <path d="M6 9L1 2H11L6 9Z" />
                        </svg>
                      </button>

                      {/* Clean Dropdown Popover Menu */}
                      {activeDropdownId === (service.id || service.slug) && (
                        <div
                          style={{
                            position: 'absolute',
                            top: 'calc(100% + 6px)',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: '#ffffff',
                            borderRadius: '12px',
                            border: '1px solid #eef2f6',
                            boxShadow: '0 14px 35px rgba(0, 0, 0, 0.09), 0 4px 12px rgba(0, 0, 0, 0.04)',
                            minWidth: '140px',
                            padding: '6px 0',
                            zIndex: 100,
                          }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveDropdownId(null);
                              openEditModal(service);
                            }}
                            style={{
                              display: 'block',
                              width: '100%',
                              textAlign: 'left',
                              padding: '10px 20px',
                              backgroundColor: 'transparent',
                              border: 'none',
                              fontSize: '14px',
                              fontWeight: '500',
                              color: '#334155',
                              cursor: 'pointer',
                              transition: 'all 0.15s ease',
                              fontFamily: 'inherit',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#f8fafc';
                              e.currentTarget.style.color = '#005b94';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = '#334155';
                            }}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveDropdownId(null);
                              openDeleteModal(service);
                            }}
                            style={{
                              display: 'block',
                              width: '100%',
                              textAlign: 'left',
                              padding: '10px 20px',
                              backgroundColor: 'transparent',
                              border: 'none',
                              fontSize: '14px',
                              fontWeight: '500',
                              color: '#475569',
                              cursor: 'pointer',
                              transition: 'all 0.15s ease',
                              fontFamily: 'inherit',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#fff1f2';
                              e.currentTarget.style.color = '#e11d48';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = '#475569';
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            marginTop: '24px',
            padding: '12px 18px',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
          }}
        >
          <div style={{ fontSize: '13.5px', color: '#64748b' }}>
            Page <strong>{validCurrentPage}</strong> of <strong>{totalPages}</strong> ({filteredServices.length} total services)
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <button
              type="button"
              disabled={validCurrentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              style={{
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid #cbd5e1',
                backgroundColor: validCurrentPage === 1 ? '#f8fafc' : '#ffffff',
                color: validCurrentPage === 1 ? '#94a3b8' : '#334155',
                cursor: validCurrentPage === 1 ? 'not-allowed' : 'pointer',
                fontSize: '13px',
                fontWeight: '600',
              }}
            >
              ← Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                type="button"
                onClick={() => setCurrentPage(pageNum)}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  border: pageNum === validCurrentPage ? '1px solid #005b94' : '1px solid #e2e8f0',
                  backgroundColor: pageNum === validCurrentPage ? '#005b94' : '#ffffff',
                  color: pageNum === validCurrentPage ? '#ffffff' : '#334155',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: '500',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {pageNum}
              </button>
            ))}

            <button
              type="button"
              disabled={validCurrentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              style={{
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid #cbd5e1',
                backgroundColor: validCurrentPage === totalPages ? '#f8fafc' : '#ffffff',
                color: validCurrentPage === totalPages ? '#94a3b8' : '#334155',
                cursor: validCurrentPage === totalPages ? 'not-allowed' : 'pointer',
                fontSize: '13px',
                fontWeight: '600',
              }}
            >
              Next →
            </button>
          </div>
        </div>
      )}

      {/* Single Form Modal */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(4px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              maxWidth: '820px',
              width: '100%',
              maxHeight: '90vh',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Modal Header - Fixed at Top */}
            <div
              style={{
                padding: '20px 28px',
                borderBottom: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#ffffff',
                flexShrink: 0,
                zIndex: 10,
              }}
            >
              <h2 style={{ fontSize: '19px', fontWeight: 'normal', color: '#0f172a', margin: 0 }}>
                {editingService ? `Edit Service: ${editingService.title}` : 'Add New Service Page'}
              </h2>

              <button
                type="button"
                onClick={closeModal}
                style={{
                  background: '#f1f5f9',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  color: '#475569',
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>
            </div>

            {/* Form Container */}
            <form
              onSubmit={handleSave}
              style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                minHeight: 0,
                overflow: 'hidden',
              }}
            >
              {/* Scrollable Form Body - ONLY this section scrolls! */}
              <div
                style={{
                  flex: 1,
                  overflowY: 'auto',
                  padding: '24px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '22px',
                }}
              >
                {/* Category Dropdown (High Priority) */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  padding: '18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label style={{ fontSize: '14px', fontWeight: 'normal', color: '#0f172a' }}>
                    1. Select Target Category *
                  </label>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>
                    Auto-publishes to this category
                  </span>
                </div>

                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '15px',
                    fontWeight: 'normal',
                    color: '#0f172a',
                    backgroundColor: '#ffffff',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                  required
                >
                  {CATEGORY_OPTIONS.map((cat) => (
                    <option key={cat.slug} value={cat.slug}>
                      {cat.icon} {cat.title}
                    </option>
                  ))}
                  <option value="custom">➕ Other / Custom Category...</option>
                </select>

                {form.category === 'custom' && (
                  <input
                    type="text"
                    placeholder="Enter Custom Category Name (e.g. Export Import Services)"
                    value={form.customCategory}
                    onChange={(e) => setForm({ ...form, customCategory: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '14px',
                      marginTop: '4px',
                    }}
                    required
                  />
                )}

                <div style={{ fontSize: '12.5px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>📍 Target URLs:</span>
                  <span style={{ fontFamily: 'monospace' }}>
                    /services/{form.category === 'custom' ? slugify(form.customCategory || 'custom') : form.category}
                  </span>
                  <span>&amp;</span>
                  <span style={{ fontFamily: 'monospace' }}>
                    /services/{form.category === 'custom' ? slugify(form.customCategory || 'custom') : form.category}/{form.slug || '[service-slug]'}
                  </span>
                </div>
              </div>

              {/* Basic Details: Title & Slug */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 'normal', color: '#1e293b', marginBottom: '6px' }}>
                    Service Title *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Personal Loan Assistance"
                    value={form.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '14.5px',
                      color: '#0f172a',
                    }}
                    required
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 'normal', color: '#1e293b', marginBottom: '6px' }}>
                    URL Slug *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. personal-loan-assistance"
                    value={form.slug}
                    onChange={(e) => setForm({ ...form, slug: slugify(e.target.value) })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '14px',
                      color: '#334155',
                      fontFamily: 'monospace',
                    }}
                    required
                  />
                </div>
              </div>

              {/* Subtitle / Tagline */}
              <div>
                <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 'normal', color: '#1e293b', marginBottom: '6px' }}>
                  Subtitle / Tagline
                </label>
                <input
                  type="text"
                  placeholder="e.g. Financial Support for Your Personal Needs and Milestones"
                  value={form.subtitle}
                  onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '14px',
                    color: '#0f172a',
                  }}
                />
              </div>

              {/* Short Description */}
              <div>
                <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 'normal', color: '#1e293b', marginBottom: '6px' }}>
                  Short Description / Summary *
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Fast approval, competitive interest rates, and minimal documentation with end-to-end liaison."
                  value={form.shortDesc}
                  onChange={(e) => setForm({ ...form, shortDesc: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '14px',
                    color: '#0f172a',
                    lineHeight: '1.5',
                  }}
                  required
                />
              </div>

              {/* Image Picker: Hero Banner Image */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px dashed #cbd5e1',
                  borderRadius: '14px',
                  padding: '18px 20px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <label style={{ fontSize: '13.5px', fontWeight: 'normal', color: '#0f172a' }}>
                    Top Hero Banner Background Image
                  </label>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>
                    Cutout photography shown in the top hero header
                  </span>
                </div>

                {/* Hidden File Input */}
                <input
                  type="file"
                  ref={heroFileInputRef}
                  onChange={(e) => handleFileUpload(e, 'heroImage')}
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="service-hero-device-upload"
                />

                {uploadError && (
                  <div style={{ fontSize: '13px', color: '#dc2626', marginBottom: '12px', fontWeight: 'normal' }}>
                    ⚠️ {uploadError}
                  </div>
                )}

                {/* Selected Image Preview with Change & Remove */}
                {form.heroImage ? (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '14px 16px',
                      backgroundColor: '#ffffff',
                      borderRadius: '12px',
                      border: '1px solid #e2e8f0',
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        width: '90px',
                        height: '65px',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        backgroundColor: '#f1f5f9',
                        flexShrink: 0,
                        border: '1px solid #e2e8f0',
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={form.heroImage}
                        alt="Hero Banner Preview"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>

                    <div style={{ flexGrow: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '13px', fontWeight: 'normal', color: '#0f172a', marginBottom: '3px' }}>
                        Hero Banner Image Selected
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748b', fontFamily: 'monospace', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                        {form.heroImage}
                      </div>
                      <div style={{ fontSize: '11.5px', color: '#16a34a', marginTop: '3px' }}>
                        ✓ Ready for top hero banner
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button
                        type="button"
                        onClick={() => heroFileInputRef.current?.click()}
                        disabled={uploadingHero}
                        style={{
                          backgroundColor: '#ffffff',
                          border: '1px solid #cbd5e1',
                          color: '#0f172a',
                          padding: '7px 14px',
                          borderRadius: '6px',
                          fontSize: '12.5px',
                          fontWeight: 'normal',
                          cursor: 'pointer',
                        }}
                      >
                        {uploadingHero ? 'Uploading...' : 'Change Image'}
                      </button>

                      <button
                        type="button"
                        onClick={() => setForm({ ...form, heroImage: '' })}
                        style={{
                          backgroundColor: '#fff1f2',
                          border: '1px solid #fecdd3',
                          color: '#e11d48',
                          padding: '7px 12px',
                          borderRadius: '6px',
                          fontSize: '12.5px',
                          fontWeight: 'normal',
                          cursor: 'pointer',
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Clean Drop/Click Area when no hero image is selected yet */
                  <div
                    onClick={() => heroFileInputRef.current?.click()}
                    style={{
                      border: '1.5px dashed #cbd5e1',
                      borderRadius: '12px',
                      padding: '24px 20px',
                      textAlign: 'center',
                      backgroundColor: '#ffffff',
                      cursor: uploadingHero ? 'not-allowed' : 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#94a3b8';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#cbd5e1';
                    }}
                  >
                    <div style={{ fontSize: '30px', marginBottom: '6px' }}>
                      {uploadingHero ? '⏳' : '📁'}
                    </div>
                    <div style={{ fontSize: '14.5px', fontWeight: 'normal', color: '#0f172a', marginBottom: '3px' }}>
                      {uploadingHero ? 'Uploading Hero Image...' : 'Click to Select Hero Banner Image from Device'}
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>
                      Header background cutout photo (PNG, JPG, WEBP)
                    </div>
                  </div>
                )}
              </div>

              {/* DEDICATED OVERVIEW SECTION (Photo on Left + Narrative + Checkmarks on Right) */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                {/* Section Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', borderBottom: '1px solid #e2e8f0', paddingBottom: '16px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 'normal', backgroundColor: '#f1f5f9', color: '#475569', padding: '3px 10px', borderRadius: '6px' }}>
                        Overview Section
                      </span>
                      <span style={{ fontSize: '12.5px', color: '#64748b' }}>
                        Side-by-side: Photo + Title + Narrative + Checkmarks
                      </span>
                    </div>
                    <h3 style={{ fontSize: '17px', fontWeight: 'normal', color: '#0f172a', margin: 0 }}>
                      Overview Content &amp; Visual
                    </h3>
                  </div>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>
                    Displays right below the top hero banner
                  </span>
                </div>

                {/* Overview Title / Heading */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <label style={{ fontSize: '13.5px', fontWeight: 'normal', color: '#1e293b' }}>
                      Overview Section Title / Heading
                    </label>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>
                      Leave empty to use Service Title ({form.title || 'EDUCATION LOAN ASSISTANCE'})
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder={form.title ? form.title.toUpperCase() : 'e.g. EDUCATION LOAN ASSISTANCE'}
                    value={form.overviewTitle}
                    onChange={(e) => setForm({ ...form, overviewTitle: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '14.5px',
                      color: '#0f172a',
                      fontWeight: 'normal',
                    }}
                  />
                </div>

                {/* Overview Narrative Description / Paragraph */}
                <div>
                  <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 'normal', color: '#1e293b', marginBottom: '6px' }}>
                    Overview Narrative Paragraph / Description
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. From professional courses in India to higher education abroad, education expenses can involve tuition fees, accommodation, travel, books, equipment, and other study-related costs..."
                    value={form.overviewDesc}
                    onChange={(e) => setForm({ ...form, overviewDesc: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '14px',
                      color: '#0f172a',
                      lineHeight: '1.6',
                    }}
                  />
                  <span style={{ fontSize: '12px', color: '#64748b', marginTop: '4px', display: 'block' }}>
                    The explanatory paragraph displayed under the OVERVIEW heading.
                  </span>
                </div>

                {/* Overview Portrait Image Upload Box (Left Side Photo) */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px dashed #cbd5e1',
                    borderRadius: '12px',
                    padding: '18px 20px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <div>
                      <label style={{ fontSize: '13.5px', fontWeight: 'normal', color: '#0f172a', margin: 0 }}>
                        Overview Portrait Image (Left Side Photo)
                      </label>
                      <span style={{ fontSize: '12px', color: '#64748b', display: 'block', marginTop: '2px' }}>
                        Portrait or photo shown on the left of the overview text and checkmarks
                      </span>
                    </div>
                  </div>

                  {/* Hidden File Input for Overview */}
                  <input
                    type="file"
                    ref={overviewFileInputRef}
                    onChange={(e) => handleFileUpload(e, 'overviewImage')}
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="overview-image-device-upload"
                  />

                  {form.overviewImage ? (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        padding: '12px 16px',
                        backgroundColor: '#ffffff',
                        borderRadius: '10px',
                        border: '1px solid #e2e8f0',
                      }}
                    >
                      <div
                        style={{
                          position: 'relative',
                          width: '85px',
                          height: '75px',
                          borderRadius: '10px',
                          overflow: 'hidden',
                          backgroundColor: '#f1f5f9',
                          flexShrink: 0,
                          border: '1px solid #cbd5e1',
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={form.overviewImage}
                          alt="Overview Preview"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>

                      <div style={{ flexGrow: 1, minWidth: 0 }}>
                        <div style={{ fontSize: '13px', fontWeight: 'normal', color: '#0f172a', marginBottom: '2px' }}>
                          Overview Photo Selected
                        </div>
                        <div style={{ fontSize: '12px', color: '#64748b', fontFamily: 'monospace', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                          {form.overviewImage}
                        </div>
                        <div style={{ fontSize: '11.5px', color: '#16a34a', marginTop: '3px' }}>
                          ✓ Appears on the left side of Overview section
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                          type="button"
                          onClick={() => overviewFileInputRef.current?.click()}
                          disabled={uploadingOverview}
                          style={{
                            backgroundColor: '#ffffff',
                            border: '1px solid #cbd5e1',
                            color: '#0f172a',
                            padding: '7px 14px',
                            borderRadius: '6px',
                            fontSize: '12.5px',
                            fontWeight: 'normal',
                            cursor: 'pointer',
                          }}
                        >
                          {uploadingOverview ? 'Uploading...' : 'Change Photo'}
                        </button>

                        <button
                          type="button"
                          onClick={() => setForm({ ...form, overviewImage: '' })}
                          style={{
                            backgroundColor: '#fff1f2',
                            border: '1px solid #fecdd3',
                            color: '#e11d48',
                            padding: '7px 12px',
                            borderRadius: '6px',
                            fontSize: '12.5px',
                            fontWeight: 'normal',
                            cursor: 'pointer',
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div
                      onClick={() => overviewFileInputRef.current?.click()}
                      style={{
                        border: '1.5px dashed #cbd5e1',
                        borderRadius: '10px',
                        padding: '22px 20px',
                        textAlign: 'center',
                        backgroundColor: '#ffffff',
                        cursor: uploadingOverview ? 'not-allowed' : 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#94a3b8';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#cbd5e1';
                      }}
                    >
                      <div style={{ fontSize: '28px', marginBottom: '6px' }}>
                        {uploadingOverview ? '⏳' : '🖼️'}
                      </div>
                      <div style={{ fontSize: '14px', fontWeight: 'normal', color: '#0f172a', marginBottom: '3px' }}>
                        {uploadingOverview ? 'Uploading Overview Image...' : 'Click to Upload Overview Photo from Your Device'}
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>
                        Portrait or service illustration image (PNG, JPG, WEBP)
                      </div>
                    </div>
                  )}
                </div>

                {/* Overview Checkmark Bullets (✔) */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <label style={{ fontSize: '13.5px', fontWeight: 'normal', color: '#1e293b' }}>
                      Overview Checkmark Bullets (1 item per line)
                    </label>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>
                      1 item per line
                    </span>
                  </div>
                  <textarea
                    rows={4}
                    placeholder={"Requirement-based option guidance\nDocument checklist and preparation support\nApplication coordination with the relevant lender\nTerms and approval depend on the lender and applicant"}
                    value={form.overviewBulletsText}
                    onChange={(e) => setForm({ ...form, overviewBulletsText: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '14px',
                      color: '#0f172a',
                      lineHeight: '1.6',
                      fontFamily: 'inherit',
                    }}
                  />
                  <div style={{ fontSize: '12px', color: '#64748b', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>✓ Each line above becomes an individual point with a checkmark on the right side of the Overview section.</span>
                  </div>
                </div>
              </div>

              {/* Key Features & Highlights Section */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '14px',
                  padding: '20px',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '18px' }}>⚡</span>
                    <label style={{ fontSize: '14px', fontWeight: 'normal', color: '#0f172a', margin: 0 }}>
                      Key Features &amp; Highlights (1 per line)
                    </label>
                  </div>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>
                    Displays in the Features section on the service page
                  </span>
                </div>

                <textarea
                  rows={4}
                  placeholder={"Enter key features or highlights (1 per line)...\ne.g. Quick turnaround\nPersonalized advisory\nDedicated support"}
                  value={form.highlightsText}
                  onChange={(e) => setForm({ ...form, highlightsText: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '14px',
                    color: '#0f172a',
                    backgroundColor: '#ffffff',
                    fontFamily: 'inherit',
                    lineHeight: '1.6',
                  }}
                />

                <div style={{ fontSize: '12px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>✓ Each line becomes an individual feature item on the service page.</span>
                </div>
              </div>

              {/* Options / Eligible Purposes Section (Separate Cards) */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                  <div>
                    <label style={{ fontSize: '14px', fontWeight: 'normal', color: '#0f172a', margin: 0, display: 'block' }}>
                      Eligible Purposes / Options &amp; Services (Separate Cards)
                    </label>
                    <span style={{ fontSize: '12.5px', color: '#64748b' }}>
                      Each purpose/option appears as a card under &quot;ELIGIBLE PURPOSES: OPTIONS / SERVICES&quot;
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddOption}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '8px',
                      backgroundColor: '#0f172a',
                      color: '#ffffff',
                      border: 'none',
                      fontSize: '13px',
                      fontWeight: 'normal',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span>+</span>
                    <span>Add Purpose / Option Card</span>
                  </button>
                </div>

                {/* Section Header Controls */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', backgroundColor: '#ffffff', padding: '14px 16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 'normal', color: '#475569', marginBottom: '4px' }}>
                      Section Subtitle / Tag
                    </label>
                    <input
                      type="text"
                      placeholder="ELIGIBLE PURPOSES"
                      value={form.optionsBadge}
                      onChange={(e) => setForm({ ...form, optionsBadge: e.target.value })}
                      style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px', color: '#0f172a' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 'normal', color: '#475569', marginBottom: '4px' }}>
                      Section Main Title
                    </label>
                    <input
                      type="text"
                      placeholder="OPTIONS / SERVICES"
                      value={form.optionsTitle}
                      onChange={(e) => setForm({ ...form, optionsTitle: e.target.value })}
                      style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px', color: '#0f172a' }}
                    />
                  </div>
                </div>

                {/* List of Individual Purpose Cards */}
                {(!form.options || form.options.length === 0) ? (
                  <div style={{ textAlign: 'center', padding: '24px 16px', backgroundColor: '#ffffff', borderRadius: '10px', border: '1px dashed #cbd5e1', color: '#64748b', fontSize: '13.5px' }}>
                    No purpose / option cards added yet. Click <strong>&quot;+ Add Purpose / Option Card&quot;</strong> above if you want to display separate cards.
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {form.options.map((opt, idx) => (
                      <div
                        key={idx}
                        style={{
                          backgroundColor: '#ffffff',
                          border: '1px solid #e2e8f0',
                          borderLeft: '4px solid #94a3b8',
                          borderRadius: '12px',
                          padding: '16px 18px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '12px',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f1f5f9', paddingBottom: '8px' }}>
                          <span style={{ fontSize: '13px', fontWeight: 'normal', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '16px' }}>{opt.icon || (idx === 0 ? '👨‍👩‍👧' : idx === 1 ? '🎓' : '🏠')}</span>
                            <span>Separate Card #{idx + 1}</span>
                          </span>
                          <button
                            type="button"
                            onClick={() => handleRemoveOption(idx)}
                            style={{
                              backgroundColor: '#fff1f2',
                              border: '1px solid #fecdd3',
                              color: '#e11d48',
                              padding: '4px 10px',
                              borderRadius: '6px',
                              fontSize: '12px',
                              fontWeight: 'normal',
                              cursor: 'pointer',
                            }}
                          >
                            ✕ Remove Card
                          </button>
                        </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: '12px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 'normal', color: '#334155', marginBottom: '4px' }}>
                            Icon / Emoji
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 🎓"
                            value={opt.icon}
                            onChange={(e) => handleOptionChange(idx, 'icon', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '9px 10px',
                              borderRadius: '8px',
                              border: '1px solid #cbd5e1',
                              fontSize: '20px',
                              textAlign: 'center',
                              backgroundColor: '#ffffff',
                            }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 'normal', color: '#334155', marginBottom: '4px' }}>
                            Card Title *
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Medical or Education Expenses"
                            value={opt.title}
                            onChange={(e) => handleOptionChange(idx, 'title', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '9px 12px',
                              borderRadius: '8px',
                              border: '1px solid #cbd5e1',
                              fontSize: '13.5px',
                              fontWeight: 'normal',
                              color: '#0f172a',
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 'normal', color: '#334155', marginBottom: '4px' }}>
                          Card Description (Optional)
                        </label>
                        <textarea
                          rows={2}
                          placeholder="e.g. Timely funding for higher studies, coaching admissions, medical treatments, or health emergencies."
                          value={opt.desc}
                          onChange={(e) => handleOptionChange(idx, 'desc', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '9px 12px',
                            borderRadius: '8px',
                            border: '1px solid #cbd5e1',
                            fontSize: '13.5px',
                            color: '#334155',
                            lineHeight: '1.5',
                          }}
                        />
                      </div>

                      {/* Quick Emoji Suggestions */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '11px', color: '#64748b' }}>Quick icons:</span>
                        {['👨‍👩‍👧', '🎓', '🏠', '💼', '🏢', '🚗', '🏥', '✈️', '🛡️', '💰'].map((emoji) => (
                          <button
                            key={emoji}
                            type="button"
                            onClick={() => handleOptionChange(idx, 'icon', emoji)}
                            style={{
                              background: '#ffffff',
                              border: '1px solid #e2e8f0',
                              borderRadius: '4px',
                              padding: '2px 6px',
                              fontSize: '14px',
                              cursor: 'pointer',
                            }}
                          >
                            {emoji}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                )}
              </div>

              {/* Document Groups / Cards by Heading */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                  <div>
                    <label style={{ fontSize: '14px', fontWeight: 'normal', color: '#0f172a', margin: 0, display: 'block' }}>
                      Required Documents (Cards by Heading)
                    </label>
                    <span style={{ fontSize: '12.5px', color: '#64748b' }}>
                      Each item here appears as a distinct card with checkmarks on the service page (e.g. Salaried, Business, NRI, Property, etc.)
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddDocGroup}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '8px',
                      backgroundColor: '#0f172a',
                      color: '#ffffff',
                      border: 'none',
                      fontSize: '13px',
                      fontWeight: 'normal',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span>+</span>
                    <span>Add Document Heading Card</span>
                  </button>
                </div>

                {(!form.documentGroups || form.documentGroups.length === 0) ? (
                  <div style={{ textAlign: 'center', padding: '24px 16px', backgroundColor: '#ffffff', borderRadius: '10px', border: '1px dashed #cbd5e1', color: '#64748b', fontSize: '13.5px' }}>
                    No document heading cards added yet. Click <strong>&quot;+ Add Document Heading Card&quot;</strong> above to create document checklist cards.
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {form.documentGroups.map((group, idx) => (
                      <div
                        key={idx}
                        style={{
                          backgroundColor: '#ffffff',
                          border: '1px solid #cbd5e1',
                          borderRadius: '12px',
                          padding: '18px 20px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '14px',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f1f5f9', paddingBottom: '10px' }}>
                          <span style={{ fontSize: '13.5px', fontWeight: 'normal', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span>🗂️</span>
                            <span>Document Card #{idx + 1}</span>
                          </span>
                          <button
                            type="button"
                            onClick={() => handleRemoveDocGroup(idx)}
                            style={{
                              backgroundColor: '#fff1f2',
                              border: '1px solid #fecdd3',
                              color: '#e11d48',
                              padding: '4px 10px',
                              borderRadius: '6px',
                              fontSize: '12px',
                              fontWeight: 'normal',
                              cursor: 'pointer',
                            }}
                          >
                            ✕ Remove Card
                          </button>
                        </div>

                      {/* Heading & Subtitle Row */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.8fr', gap: '14px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 'normal', color: '#334155', marginBottom: '4px' }}>
                            Card Heading / Title *
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Salaried Applicants or KYC Documents"
                            value={group.title}
                            onChange={(e) => handleDocGroupChange(idx, 'title', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '9px 12px',
                              borderRadius: '8px',
                              border: '1px solid #cbd5e1',
                              fontSize: '13.5px',
                              fontWeight: 'normal',
                              color: '#0f172a',
                            }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 'normal', color: '#334155', marginBottom: '4px' }}>
                            Card Subtitle / Description (Optional)
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Standard documentation for employed professionals"
                            value={group.subtitle}
                            onChange={(e) => handleDocGroupChange(idx, 'subtitle', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '9px 12px',
                              borderRadius: '8px',
                              border: '1px solid #cbd5e1',
                              fontSize: '13.5px',
                              color: '#475569',
                            }}
                          />
                        </div>
                      </div>

                      {/* Documents List Textarea */}
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <label style={{ fontSize: '12.5px', fontWeight: 'normal', color: '#334155', margin: 0 }}>
                            Documents Under This Heading (1 document per line)
                          </label>
                          <span style={{ fontSize: '11.5px', color: '#64748b' }}>
                            1 document per line
                          </span>
                        </div>
                        <textarea
                          rows={4}
                          placeholder={"PAN Card\nIdentity Proof\nAddress Proof\nBank Statement (Last 6 months)\nPassport photograph"}
                          value={group.docsText}
                          onChange={(e) => handleDocGroupChange(idx, 'docsText', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '10px 12px',
                            borderRadius: '8px',
                            border: '1px solid #cbd5e1',
                            fontSize: '13.5px',
                            color: '#0f172a',
                            lineHeight: '1.6',
                            fontFamily: 'inherit',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                )}

                {/* Advisory / Disclaimer Note for Documents */}
                <div style={{ backgroundColor: '#ffffff', padding: '14px 16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 'normal', color: '#475569', marginBottom: '4px' }}>
                    Document Advisory Note (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Note: Indicative list only; final requirements vary by profile and provider/authority."
                    value={form.advisoryNote}
                    onChange={(e) => setForm({ ...form, advisoryNote: e.target.value })}
                    style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13.5px', color: '#0f172a' }}
                  />
                </div>
              </div>

              {/* Eligibility Criteria & Fees / Charges */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <div>
                  <label style={{ fontSize: '14px', fontWeight: 'normal', color: '#0f172a', margin: 0, display: 'block' }}>
                    Eligibility Criteria &amp; Fees / Charges
                  </label>
                  <span style={{ fontSize: '12.5px', color: '#64748b' }}>
                    Provide guidance on who is eligible and fee/charge considerations for this service.
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 'normal', color: '#0f172a', marginBottom: '6px' }}>
                      Eligibility Criteria
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Eligibility depends on the lender, applicant profile, income and repayment capacity, credit history, existing obligations and loan purpose. The lender confirms the final criteria."
                      value={form.eligibilityDesc}
                      onChange={(e) => setForm({ ...form, eligibilityDesc: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '13.5px',
                        color: '#334155',
                        lineHeight: '1.5',
                      }}
                    />
                  </div>

                  <div style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 'normal', color: '#0f172a', marginBottom: '6px' }}>
                      Fees &amp; Charges
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Interest rates, processing fees, loan terms and other charges vary by lender and applicant. Review the lender’s written terms before proceeding"
                      value={form.feesDesc}
                      onChange={(e) => setForm({ ...form, feesDesc: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '13.5px',
                        color: '#334155',
                        lineHeight: '1.5',
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* FAQs Section */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                  <div>
                    <label style={{ fontSize: '14px', fontWeight: 'normal', color: '#0f172a', margin: 0, display: 'block' }}>
                      Frequently Asked Questions (FAQ)
                    </label>
                    <span style={{ fontSize: '12.5px', color: '#64748b' }}>
                      Add helpful questions &amp; answers for this service page
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddFaq}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '8px',
                      backgroundColor: '#0f172a',
                      color: '#ffffff',
                      border: 'none',
                      fontSize: '13px',
                      fontWeight: 'normal',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span>+</span>
                    <span>Add Question</span>
                  </button>
                </div>

                {(!form.faqs || form.faqs.length === 0) ? (
                  <div style={{ textAlign: 'center', padding: '24px 16px', backgroundColor: '#ffffff', borderRadius: '10px', border: '1px dashed #cbd5e1', color: '#64748b', fontSize: '13.5px' }}>
                    No FAQs added yet. Click <strong>&quot;+ Add Question&quot;</strong> above to add frequently asked questions for this service.
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {form.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        style={{
                          backgroundColor: '#ffffff',
                          border: '1px solid #cbd5e1',
                          borderRadius: '10px',
                          padding: '16px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '10px',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '13px', fontWeight: 'normal', color: '#0f172a' }}>
                            FAQ #{idx + 1}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleRemoveFaq(idx)}
                            style={{
                              backgroundColor: '#fff1f2',
                              border: '1px solid #fecdd3',
                              color: '#e11d48',
                              padding: '4px 10px',
                              borderRadius: '6px',
                              fontSize: '12px',
                              fontWeight: 'normal',
                              cursor: 'pointer',
                            }}
                          >
                            ✕ Remove
                          </button>
                        </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 'normal', color: '#334155', marginBottom: '4px' }}>
                          Question
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Who can apply for this service?"
                          value={faq.q}
                          onChange={(e) => handleFaqChange(idx, 'q', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '10px 12px',
                            borderRadius: '8px',
                            border: '1px solid #cbd5e1',
                            fontSize: '13.5px',
                            fontWeight: 'normal',
                            color: '#0f172a',
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 'normal', color: '#334155', marginBottom: '4px' }}>
                          Answer
                        </label>
                        <textarea
                          rows={2}
                          placeholder="e.g. Salaried individuals, business owners, or applicants meeting the eligibility criteria."
                          value={faq.a}
                          onChange={(e) => handleFaqChange(idx, 'a', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '10px 12px',
                            borderRadius: '8px',
                            border: '1px solid #cbd5e1',
                            fontSize: '13.5px',
                            color: '#334155',
                            lineHeight: '1.5',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                )}
              </div>
              </div>

              {/* Form Action Buttons - Fixed at Bottom */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '12px',
                  padding: '16px 28px',
                  borderTop: '1px solid #e2e8f0',
                  backgroundColor: '#ffffff',
                  flexShrink: 0,
                  borderRadius: '0 0 20px 20px',
                }}
              >
                <button
                  type="button"
                  onClick={closeModal}
                  style={{
                    padding: '12px 22px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    backgroundColor: '#ffffff',
                    color: '#475569',
                    fontSize: '14.5px',
                    fontWeight: 'normal',
                    cursor: 'pointer',
                  }}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  style={{
                    padding: '12px 28px',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: '#0f172a',
                    color: '#ffffff',
                    fontSize: '14.5px',
                    fontWeight: 'normal',
                    cursor: saving ? 'not-allowed' : 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    opacity: saving ? 0.7 : 1,
                  }}
                >
                  <span>{saving ? 'Saving...' : editingService ? '💾 Update Service' : '🚀 Publish Service Page'}</span>
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* Custom Delete Confirmation Modal - Matches User's 2nd Design */}
      {deleteModal.isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.45)',
            backdropFilter: 'blur(4px)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={closeDeleteModal}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              width: '100%',
              maxWidth: '460px',
              padding: '26px 30px',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.16)',
              border: '1px solid #f1f5f9',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header: Title on left, close icon on right */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '20px',
              }}
            >
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: '500',
                  color: '#1e293b',
                  margin: 0,
                }}
              >
                Delete Service
              </h3>
              <button
                type="button"
                onClick={closeDeleteModal}
                style={{
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  color: '#64748b',
                  cursor: 'pointer',
                  padding: 0,
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  appearance: 'none',
                  WebkitAppearance: 'none',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#0f172a';
                  e.currentTarget.style.backgroundColor = '#f1f5f9';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#64748b';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
                title="Close"
                aria-label="Close"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Body Description */}
            <p
              style={{
                fontSize: '15px',
                color: '#475569',
                lineHeight: '1.5',
                margin: '0 0 28px 0',
              }}
            >
              Are you sure you want to delete {deleteModal.title ? `"${deleteModal.title}"` : 'this service'}?
            </p>

            {/* Footer Buttons: Sky-Blue Cancel and Coral-Red Delete */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <button
                type="button"
                onClick={closeDeleteModal}
                style={{
                  backgroundColor: '#38bdf8',
                  color: '#ffffff',
                  border: 'none',
                  padding: '9px 24px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(56, 189, 248, 0.3)',
                  transition: 'background-color 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0ea5e9')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#38bdf8')}
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={executeDelete}
                disabled={deleting}
                style={{
                  backgroundColor: '#ff7051',
                  color: '#ffffff',
                  border: 'none',
                  padding: '9px 24px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: deleting ? 'not-allowed' : 'pointer',
                  boxShadow: '0 2px 8px rgba(255, 112, 81, 0.3)',
                  opacity: deleting ? 0.7 : 1,
                  transition: 'background-color 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  if (!deleting) e.currentTarget.style.backgroundColor = '#ea580c';
                }}
                onMouseLeave={(e) => {
                  if (!deleting) e.currentTarget.style.backgroundColor = '#ff7051';
                }}
              >
                {deleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
