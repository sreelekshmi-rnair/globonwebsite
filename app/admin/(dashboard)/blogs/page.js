'use client';

import { useState, useEffect } from 'react';

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [form, setForm] = useState({
    title: '',
    slug: '',
    category: 'Business',
    author: 'Globon Team',
    excerpt: '',
    content: '',
    image: '/assets/images/blog/blog-01.jpg',
    date: '',
    published: true,
  });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/blogs?all=true');
      if (res.ok) {
        const data = await res.json();
        setBlogs(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Automatically dismiss message after 4 seconds
  useEffect(() => {
    if (!message.text) return;
    const timer = setTimeout(() => {
      setMessage({ text: '', type: '' });
    }, 4000);
    return () => clearTimeout(timer);
  }, [message.text]);

  const openCreateModal = () => {
    setEditingBlog(null);
    setForm({
      title: '',
      slug: '',
      category: 'Business',
      author: 'Globon Team',
      excerpt: '',
      content: '',
      image: '/assets/images/blog/blog-01.jpg',
      date: '',
      published: true,
    });
    setIsModalOpen(true);
  };

  const openEditModal = (blog) => {
    setEditingBlog(blog);
    setForm({
      title: blog.title,
      slug: blog.slug,
      category: blog.category || 'Business',
      author: blog.author || 'Globon Team',
      excerpt: blog.excerpt || '',
      content: blog.content || '',
      image: blog.image || '/assets/images/blog/blog-01.jpg',
      date: blog.date || '',
      published: blog.published !== undefined ? blog.published : true,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingBlog(null);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage({ text: '', type: '' });

    try {
      const url = editingBlog ? `/api/blogs/${editingBlog.id}` : '/api/blogs';
      const method = editingBlog ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to save blog post');

      setMessage({ text: `Blog post successfully ${editingBlog ? 'updated' : 'published'}!`, type: 'success' });
      closeModal();
      fetchBlogs();
    } catch (err) {
      setMessage({ text: err.message, type: 'error' });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id, title) => {
    if (!confirm(`Are you sure you want to delete the blog post "${title}"?`)) return;

    try {
      const res = await fetch(`/api/blogs/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setMessage({ text: 'Blog post deleted successfully', type: 'success' });
        fetchBlogs();
      } else {
        throw new Error('Failed to delete blog post');
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
        <div className="admin-page-header" style={{ marginBottom: 0 }}>
          <h1 className="admin-page-title">
            Blog Articles &amp; News
          </h1>
          <p className="admin-page-desc">
            Publish educational articles, financial guides, and corporate updates.
          </p>
        </div>
        <button onClick={openCreateModal} className="admin-btn admin-btn-primary">
          + Write New Blog Post
        </button>
      </div>

      {message.text && (
        <div
          style={{
            padding: '12px 18px',
            borderRadius: '8px',
            marginBottom: '20px',
            backgroundColor: message.type === 'success' ? '#dcfce7' : '#fee2e2',
            color: message.type === 'success' ? '#15803d' : '#b91c1c',
            fontWeight: '500',
          }}
        >
          {message.text}
        </div>
      )}

      <div className="admin-card">
        {loading ? (
          <div style={{ padding: '30px', textAlign: 'center', color: '#64748b' }}>Loading articles...</div>
        ) : blogs.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center', color: '#94a3b8' }}>
            No blog articles found. Click &quot;Write New Blog Post&quot; to publish your first article.
          </div>
        ) : (
          <div className="admin-table-container">
            <table className="admin-table" style={{ width: '100%', minWidth: '1000px' }}>
              <thead>
                <tr>
                  <th style={{ minWidth: '240px' }}>Title &amp; Slug</th>
                  <th style={{ minWidth: '140px' }}>Category</th>
                  <th style={{ minWidth: '140px' }}>Author</th>
                  <th style={{ width: '100px' }}>Status</th>
                  <th style={{ width: '120px' }}>Date</th>
                  <th style={{ width: '110px' }}>Live Link</th>
                  <th style={{ textAlign: 'right', minWidth: '140px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog.id}>
                    <td>
                      <div style={{ fontWeight: '500', color: '#0f172a', fontSize: '15px' }}>
                        {blog.title}
                      </div>
                      <div style={{ fontSize: '12px', color: '#0284c7' }}>
                        /blog/{blog.slug}
                      </div>
                    </td>
                    <td>
                      <span className="admin-badge badge-contacted">{blog.category}</span>
                    </td>
                    <td style={{ fontSize: '13px', color: '#475569' }}>
                      {blog.author}
                    </td>
                    <td>
                      {blog.published ? (
                        <span className="admin-badge badge-approved">Published</span>
                      ) : (
                        <span className="admin-badge badge-closed">Draft</span>
                      )}
                    </td>
                    <td style={{ fontSize: '13px', color: '#64748b' }}>
                      {blog.date || '—'}
                    </td>
                    <td>
                      <a
                        href={`/blog/${blog.slug}`}
                        target="_blank"
                        rel="noreferrer"
                        className="admin-btn admin-btn-outline admin-btn-sm"
                      >
                        View Post ↗
                      </a>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <button
                        onClick={() => openEditModal(blog)}
                        className="admin-btn admin-btn-outline admin-btn-sm"
                        style={{ marginRight: '8px' }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(blog.id, blog.title)}
                        className="admin-btn admin-btn-danger admin-btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal Dialog */}
      {isModalOpen && (
        <div className="admin-modal-backdrop">
          <div className="admin-modal-dialog" style={{ maxWidth: '750px' }}>
            <div className="admin-modal-header">
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'normal' }}>
                {editingBlog ? `Edit Post: ${editingBlog.title}` : 'Write New Blog Post'}
              </h3>
              <button
                onClick={closeModal}
                style={{ background: 'none', border: 'none', fontSize: '22px', cursor: 'pointer', color: '#64748b' }}
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleSave}>
              <div className="admin-modal-body">
                <div className="form-group">
                  <label className="form-label">Post Title *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    placeholder="e.g. How to Choose the Right Business Loan in 2026"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">URL Slug (leave blank to auto-generate)</label>
                    <input
                      type="text"
                      className="form-control"
                      value={form.slug}
                      onChange={(e) => setForm({ ...form, slug: e.target.value })}
                      placeholder="e.g. choose-right-business-loan"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Category</label>
                    <input
                      type="text"
                      className="form-control"
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                      placeholder="e.g. Finance / Real Estate / Advice"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Author Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={form.author}
                      onChange={(e) => setForm({ ...form, author: e.target.value })}
                      placeholder="Globon Team"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Article Date (Only displayed if given here)</label>
                    <input
                      type="text"
                      className="form-control"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      placeholder="e.g. 10 Oct 2026 or leave blank for no date"
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: '600' }}>
                    <input
                      type="checkbox"
                      checked={form.published}
                      onChange={(e) => setForm({ ...form, published: e.target.checked })}
                    />
                    Publish immediately
                  </label>
                </div>

                <div className="form-group">
                  <label className="form-label">Short Excerpt (summary shown on blog cards) *</label>
                  <textarea
                    className="form-control"
                    rows="2"
                    value={form.excerpt}
                    onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                    placeholder="Brief 1-2 sentence overview of the article..."
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Full Article Content (HTML / Text) *</label>
                  <textarea
                    className="form-control"
                    rows="8"
                    value={form.content}
                    onChange={(e) => setForm({ ...form, content: e.target.value })}
                    placeholder="Write article paragraphs, headings (<h3>...</h3>), bullet points (<ul><li>...</li></ul>)..."
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Featured Image Path</label>
                  <input
                    type="text"
                    className="form-control"
                    value={form.image}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                    placeholder="/assets/images/blog/blog-01.jpg"
                  />
                </div>
              </div>

              <div className="admin-modal-footer">
                <button type="button" onClick={closeModal} className="admin-btn admin-btn-outline">
                  Cancel
                </button>
                <button type="submit" className="admin-btn admin-btn-primary" disabled={saving}>
                  {saving ? 'Saving...' : editingBlog ? 'Update Post' : 'Publish Article'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
