'use client'

export const dynamic = 'force-dynamic'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import Image from 'next/image'

export default function AdminLogin() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Already logged in → skip to dashboard
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) router.replace('/admin/menu')
    })
  }, [router])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.replace('/admin/menu')
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image src="/logo.png" alt="Pho You" width={80} height={80} className="object-contain" />
        </div>

        {/* Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h1 className="text-text text-2xl font-bold mb-1">Admin Login</h1>
          <p className="text-text/40 text-sm mb-8">Sign in to manage your menu.</p>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">

            <div className="flex flex-col gap-1.5">
              <label className="text-text/50 text-xs uppercase tracking-widest">Email</label>
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text text-sm placeholder:text-text/25 focus:outline-none focus:border-primary/60 transition-colors"
                placeholder="admin@phoyou.com"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-text/50 text-xs uppercase tracking-widest">Password</label>
              <input
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text text-sm placeholder:text-text/25 focus:outline-none focus:border-primary/60 transition-colors"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-shade transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Signing in…
                </span>
              ) : 'Sign in'}
            </button>

          </form>
        </div>

        <p className="text-center text-text/20 text-xs mt-6">
          Pho You Admin · Access restricted
        </p>

      </div>
    </div>
  )
}
