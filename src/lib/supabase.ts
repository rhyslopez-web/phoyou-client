import { createClient } from '@supabase/supabase-js'

// Fallback to placeholder strings so createClient never throws at build time.
// Real values must be set as environment variables in Vercel project settings:
//   NEXT_PUBLIC_SUPABASE_URL
//   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://placeholder.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? 'placeholder-anon-key'

export const supabase = createClient(supabaseUrl, supabaseKey)
