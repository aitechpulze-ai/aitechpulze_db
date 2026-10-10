import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function main() {
  const { data, error } = await supabase.from("User").select("*").eq("email", "info@aitechpulze.com").maybeSingle();
  console.log("Data:", data);
  console.log("Error:", error);
}
main();
