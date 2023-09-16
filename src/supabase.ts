import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.SUPABASE_API_URL as string;
// const supabaseKey = process.env.SUPABASE_API_KEY as string;
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJibmt0cm5tbmhvc2lwc2pqeGt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ2OTg0MjYsImV4cCI6MjAxMDI3NDQyNn0.teTpAC7IA9f-xTqtz5gXBRYzdKoqjPiR9tkfjvvYfj0";

const supabaseUrl = "https://bbnktrnmnhosipsjjxkx.supabase.co";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
