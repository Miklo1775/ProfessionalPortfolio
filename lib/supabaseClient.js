import { createClient } from "@supabase/supabase-js";

const supaUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supaAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supaUrl, supaAnonKey);

export default supabase;
