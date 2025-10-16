import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://xxyucwbjpxfckeeaxfuz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4eXVjd2JqcHhmY2tlZWF4ZnV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1NDcyOTEsImV4cCI6MjA3NjEyMzI5MX0.EV2tqYtoLOKatUv2hJQa_9ypziafvGiXIabBwi0YEqM'

export const supabase = createClient(supabaseUrl, supabaseKey)
