import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://yihspabqegfyzrvxondj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpaHNwYWJxZWdmeXpydnhvbmRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1MjE5ODksImV4cCI6MjA3NjA5Nzk4OX0.SvhSoaV5J-dcsp4_pmt4LMJSeYyvdJ0XMc88Wo57yQ8'

export const supabase = createClient(supabaseUrl, supabaseKey)
