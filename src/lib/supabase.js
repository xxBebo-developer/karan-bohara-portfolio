import { createClient } from '@supabase/supabase-js'

// Get Supabase credentials from environment variables or use demo values
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://demo.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'demo-key'

// Create a single supabase client for interacting with your database
// This will work even with demo credentials for non-auth features
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    detectSessionInUrl: false
  }
})

// Check if we're using demo credentials
export const isDemo = supabaseUrl === 'https://demo.supabase.co'

// Note: In production, add these to .env file:
// VITE_SUPABASE_URL=your-supabase-url
// VITE_SUPABASE_ANON_KEY=your-supabase-anon-key