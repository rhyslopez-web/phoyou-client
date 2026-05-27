'use client'

export const dynamic = 'force-dynamic'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'
import { Plus, Pencil, Trash2, X, LogOut, ImageOff } from 'lucide-react'

// ── Types ────────────────────────────────────────────────────

type Category = {
  id: string
  name: string
  sort_order: number
}

type MenuItem = {
  id: string
  category_id: string | null
  name: string
  description: string | null
  price: number
  currency: string
  image_url: string | null
  available: boolean
  sort_order: number
  categories: { name: string } | null
}

type FormState = {
  name: string
  description: string
  price: string
  category_id: string
  image_url: string
  available: boolean
}

const BLANK_FORM: FormState = {
  name: '',
  description: '',
  price: '',
  category_id: '',
  image_url: '',
  available: true,
}

// ── Sub-components ───────────────────────────────────────────

function Spinner({ small }: { small?: boolean }) {
  const sz = small ? 'w-4 h-4 border-2' : 'w-8 h-8 border-2'
  return (
    <div className={`${sz} border-primary border-t-transparent rounded-full animate-spin`} />
  )
}

function Badge({ available }: { available: boolean }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
      available
        ? 'bg-green-500/15 text-green-400'
        : 'bg-white/8 text-text/35'
    }`}>
      {available ? 'Available' : 'Hidden'}
    </span>
  )
}

// ── Item Form Modal ──────────────────────────────────────────

function ItemModal({
  open,
  editing,
  form,
  categories,
  saving,
  error,
  onClose,
  onChange,
  onSave,
}: {
  open: boolean
  editing: MenuItem | null
  form: FormState
  categories: Category[]
  saving: boolean
  error: string
  onClose: () => void
  onChange: (patch: Partial<FormState>) => void
  onSave: (e: React.FormEvent) => void
}) {
  if (!open) return null

  const inputCls = `w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text text-sm
    placeholder:text-text/25 focus:outline-none focus:border-primary/60 transition-colors`

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative bg-[#2a2627] border border-white/15 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <h2 className="text-text font-bold text-lg">
            {editing ? 'Edit Item' : 'Add New Item'}
          </h2>
          <button onClick={onClose} className="text-text/40 hover:text-text transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={onSave} className="px-6 py-6 flex flex-col gap-5">

          {error && (
            <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
              {error}
            </p>
          )}

          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-text/50 text-xs uppercase tracking-widest">Name *</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={e => onChange({ name: e.target.value })}
              className={inputCls}
              placeholder="House Special Pho"
            />
          </div>

          {/* Category */}
          <div className="flex flex-col gap-1.5">
            <label className="text-text/50 text-xs uppercase tracking-widest">Category</label>
            <select
              value={form.category_id}
              onChange={e => onChange({ category_id: e.target.value })}
              className={`${inputCls} bg-[#2a2627]`}
            >
              <option value="">— No category —</option>
              {categories.map(c => (
                <option key={c.id} value={c.id} className="bg-[#2a2627]">{c.name}</option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1.5">
            <label className="text-text/50 text-xs uppercase tracking-widest">Description</label>
            <textarea
              rows={3}
              value={form.description}
              onChange={e => onChange({ description: e.target.value })}
              className={`${inputCls} resize-none`}
              placeholder="Short description shown to customers…"
            />
          </div>

          {/* Price */}
          <div className="flex flex-col gap-1.5">
            <label className="text-text/50 text-xs uppercase tracking-widest">Price (CAD) *</label>
            <input
              type="number"
              step="0.01"
              min="0"
              required
              value={form.price}
              onChange={e => onChange({ price: e.target.value })}
              className={inputCls}
              placeholder="16.15"
            />
          </div>

          {/* Image URL */}
          <div className="flex flex-col gap-1.5">
            <label className="text-text/50 text-xs uppercase tracking-widest">Image URL</label>
            <input
              type="url"
              value={form.image_url}
              onChange={e => onChange({ image_url: e.target.value })}
              className={inputCls}
              placeholder="https://…"
            />
            {/* Preview */}
            {form.image_url && (
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-white/5 mt-1">
                <Image
                  src={form.image_url}
                  alt="Preview"
                  fill
                  className="object-cover"
                  onError={() => {/* silently ignore broken preview */}}
                />
              </div>
            )}
          </div>

          {/* Available toggle */}
          <label className="flex items-center gap-3 cursor-pointer select-none">
            <div
              onClick={() => onChange({ available: !form.available })}
              className={`relative w-10 h-6 rounded-full transition-colors duration-200 ${
                form.available ? 'bg-primary' : 'bg-white/15'
              }`}
            >
              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                form.available ? 'translate-x-5' : 'translate-x-1'
              }`} />
            </div>
            <span className="text-text/60 text-sm">
              {form.available ? 'Visible to customers' : 'Hidden from menu'}
            </span>
          </label>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 rounded-xl border border-white/15 text-text/50 text-sm hover:bg-white/5 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="flex-1 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-shade transition-colors disabled:opacity-50"
            >
              {saving ? (
                <span className="flex items-center justify-center gap-2">
                  <Spinner small /> Saving…
                </span>
              ) : editing ? 'Save Changes' : 'Add Item'}
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

// ── Items Table ──────────────────────────────────────────────

function ItemsTable({
  items,
  deleteTarget,
  onEdit,
  onDeleteRequest,
  onDeleteConfirm,
  onDeleteCancel,
}: {
  items: MenuItem[]
  deleteTarget: string | null
  onEdit: (item: MenuItem) => void
  onDeleteRequest: (id: string) => void
  onDeleteConfirm: (id: string) => void
  onDeleteCancel: () => void
}) {
  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-white/[0.03]">
            <th className="text-left px-4 py-3 text-text/35 font-medium w-14">Img</th>
            <th className="text-left px-4 py-3 text-text/35 font-medium">Name</th>
            <th className="text-left px-4 py-3 text-text/35 font-medium hidden md:table-cell">Description</th>
            <th className="text-left px-4 py-3 text-text/35 font-medium">Price</th>
            <th className="text-left px-4 py-3 text-text/35 font-medium hidden sm:table-cell">Status</th>
            <th className="text-right px-4 py-3 text-text/35 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr
              key={item.id}
              className={`border-b border-white/[0.06] last:border-0 hover:bg-white/[0.03] transition-colors ${
                i % 2 === 1 ? 'bg-white/[0.02]' : ''
              }`}
            >
              {/* Thumbnail */}
              <td className="px-4 py-3">
                {item.image_url ? (
                  <div className="relative w-11 h-11 rounded-lg overflow-hidden bg-white/5 flex-shrink-0">
                    <Image src={item.image_url} alt={item.name} fill className="object-cover" />
                  </div>
                ) : (
                  <div className="w-11 h-11 rounded-lg bg-white/5 flex items-center justify-center text-text/20">
                    <ImageOff size={14} />
                  </div>
                )}
              </td>

              {/* Name */}
              <td className="px-4 py-3 text-text font-medium max-w-[180px]">
                <span className="line-clamp-2">{item.name}</span>
              </td>

              {/* Description */}
              <td className="px-4 py-3 text-text/40 hidden md:table-cell max-w-[260px]">
                <span className="line-clamp-2">{item.description || '—'}</span>
              </td>

              {/* Price */}
              <td className="px-4 py-3 text-primary font-semibold whitespace-nowrap">
                ${Number(item.price).toFixed(2)}
              </td>

              {/* Status */}
              <td className="px-4 py-3 hidden sm:table-cell">
                <Badge available={item.available} />
              </td>

              {/* Actions */}
              <td className="px-4 py-3">
                <div className="flex items-center justify-end gap-1">
                  <button
                    onClick={() => onEdit(item)}
                    title="Edit"
                    className="p-2 rounded-lg text-text/40 hover:text-text hover:bg-white/10 transition-colors"
                  >
                    <Pencil size={14} />
                  </button>

                  {deleteTarget === item.id ? (
                    <div className="flex items-center gap-1 ml-1">
                      <button
                        onClick={() => onDeleteConfirm(item.id)}
                        className="px-2.5 py-1 rounded-lg text-xs bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors font-medium"
                      >
                        Delete
                      </button>
                      <button
                        onClick={onDeleteCancel}
                        className="px-2.5 py-1 rounded-lg text-xs bg-white/8 text-text/40 hover:bg-white/15 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => onDeleteRequest(item.id)}
                      title="Delete"
                      className="p-2 rounded-lg text-text/40 hover:text-red-400 hover:bg-red-400/10 transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ── Main Page ────────────────────────────────────────────────

export default function AdminMenuPage() {
  const router = useRouter()

  const [items, setItems] = useState<MenuItem[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  // Modal state
  const [modalOpen, setModalOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null)
  const [form, setForm] = useState<FormState>(BLANK_FORM)
  const [saving, setSaving] = useState(false)
  const [formError, setFormError] = useState('')

  // Delete state
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null)

  // ── Auth guard ─────────────────────────────────────────────
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) router.replace('/admin/login')
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_OUT') router.replace('/admin/login')
    })

    return () => subscription.unsubscribe()
  }, [router])

  // ── Data fetching ──────────────────────────────────────────
  const fetchAll = useCallback(async () => {
    setLoading(true)
    const [{ data: itemData }, { data: catData }] = await Promise.all([
      supabase
        .from('menu_items')
        .select('*, categories(name)')
        .order('sort_order', { ascending: true }),
      supabase
        .from('categories')
        .select('*')
        .order('sort_order', { ascending: true }),
    ])
    if (itemData) setItems(itemData as MenuItem[])
    if (catData) setCategories(catData)
    setLoading(false)
  }, [])

  useEffect(() => { fetchAll() }, [fetchAll])

  // ── Modal helpers ──────────────────────────────────────────
  const openAdd = () => {
    setEditingItem(null)
    setForm(BLANK_FORM)
    setFormError('')
    setModalOpen(true)
  }

  const openEdit = (item: MenuItem) => {
    setEditingItem(item)
    setForm({
      name: item.name,
      description: item.description ?? '',
      price: String(item.price),
      category_id: item.category_id ?? '',
      image_url: item.image_url ?? '',
      available: item.available,
    })
    setFormError('')
    setModalOpen(true)
  }

  const patchForm = (patch: Partial<FormState>) =>
    setForm(prev => ({ ...prev, ...patch }))

  // ── Save ───────────────────────────────────────────────────
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.name.trim()) return setFormError('Name is required.')
    if (!form.price || isNaN(Number(form.price)) || Number(form.price) < 0)
      return setFormError('A valid price is required.')

    setSaving(true)
    setFormError('')

    const payload = {
      name: form.name.trim(),
      description: form.description.trim() || null,
      price: Number(Number(form.price).toFixed(2)),
      category_id: form.category_id || null,
      image_url: form.image_url.trim() || null,
      available: form.available,
    }

    if (editingItem) {
      const { error } = await supabase
        .from('menu_items')
        .update(payload)
        .eq('id', editingItem.id)
      if (error) { setFormError(error.message); setSaving(false); return }
    } else {
      const { error } = await supabase
        .from('menu_items')
        .insert(payload)
      if (error) { setFormError(error.message); setSaving(false); return }
    }

    setSaving(false)
    setModalOpen(false)
    fetchAll()
  }

  // ── Delete ─────────────────────────────────────────────────
  const handleDelete = async (id: string) => {
    await supabase.from('menu_items').delete().eq('id', id)
    setDeleteTarget(null)
    fetchAll()
  }

  // ── Logout ─────────────────────────────────────────────────
  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.replace('/admin/login')
  }

  // ── Group items by category ────────────────────────────────
  const grouped = categories
    .map(cat => ({
      cat,
      items: items.filter(i => i.category_id === cat.id),
    }))
    .filter(g => g.items.length > 0)

  const uncategorized = items.filter(i => !i.category_id)

  // ── Render ─────────────────────────────────────────────────
  return (
    <div className="pt-[80px] lg:pt-[120px]">
      {/* ── Admin top bar ───────────────────────────────── */}
      <div className="border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-10 py-3 flex items-center justify-between">
          <div>
            <p className="text-text/30 text-xs uppercase tracking-widest">Admin</p>
            <h1 className="text-text font-bold leading-tight">Menu Manager</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={openAdd}
              className="flex items-center gap-1.5 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary-shade transition-colors"
            >
              <Plus size={15} />
              Add Item
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 bg-white/8 text-text/50 px-4 py-2 rounded-full text-sm hover:bg-white/15 hover:text-text transition-colors"
            >
              <LogOut size={15} />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* ── Main content ────────────────────────────────── */}
      <div className="pt-10 pb-24 px-4 lg:px-10 max-w-[1400px] mx-auto">

        {loading ? (
          <div className="flex items-center justify-center py-32">
            <Spinner />
          </div>
        ) : (
          <div className="flex flex-col gap-12">

            {/* Stat strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Total Items', value: items.length },
                { label: 'Available', value: items.filter(i => i.available).length },
                { label: 'Hidden', value: items.filter(i => !i.available).length },
                { label: 'Categories', value: categories.length },
              ].map(stat => (
                <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
                  <p className="text-text/35 text-xs uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-text text-2xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Category groups */}
            {grouped.map(({ cat, items: catItems }) => (
              <div key={cat.id}>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-text text-lg font-semibold">{cat.name}</h2>
                  <span className="text-text/30 text-sm">{catItems.length} item{catItems.length !== 1 ? 's' : ''}</span>
                </div>
                <ItemsTable
                  items={catItems}
                  deleteTarget={deleteTarget}
                  onEdit={openEdit}
                  onDeleteRequest={setDeleteTarget}
                  onDeleteConfirm={handleDelete}
                  onDeleteCancel={() => setDeleteTarget(null)}
                />
              </div>
            ))}

            {/* Uncategorized */}
            {uncategorized.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-text text-lg font-semibold">Uncategorized</h2>
                  <span className="text-text/30 text-sm">{uncategorized.length} item{uncategorized.length !== 1 ? 's' : ''}</span>
                </div>
                <ItemsTable
                  items={uncategorized}
                  deleteTarget={deleteTarget}
                  onEdit={openEdit}
                  onDeleteRequest={setDeleteTarget}
                  onDeleteConfirm={handleDelete}
                  onDeleteCancel={() => setDeleteTarget(null)}
                />
              </div>
            )}

            {items.length === 0 && (
              <div className="text-center py-32 text-text/30">
                <p className="text-lg">No menu items yet.</p>
                <p className="text-sm mt-1">Click <span className="text-primary">Add Item</span> to get started.</p>
              </div>
            )}

          </div>
        )}
      </div>

      {/* ── Add / Edit modal ────────────────────────────── */}
      <ItemModal
        open={modalOpen}
        editing={editingItem}
        form={form}
        categories={categories}
        saving={saving}
        error={formError}
        onClose={() => setModalOpen(false)}
        onChange={patchForm}
        onSave={handleSave}
      />
    </div>
  )
}
