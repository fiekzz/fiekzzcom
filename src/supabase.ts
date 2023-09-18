import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.SECRET_SUPABASE_URL as string;
const supabaseKey = import.meta.env.SECRET_SUPABASE_KEY as string;

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
});

export default supabase;
