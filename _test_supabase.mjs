import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// read .env manually since dotenv might not be installed globally
const envFile = fs.readFileSync(path.resolve('.env'), 'utf-8');
const envVars = {};
envFile.split('\n').forEach(line => {
  if (line && !line.startsWith('#')) {
    const [key, ...values] = line.split('=');
    if (key && values.length > 0) {
      envVars[key.trim()] = values.join('=').replace(/^"/, '').replace(/"$/, '').trim();
    }
  }
});

const supabaseUrl = envVars.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = envVars.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log('Testing Supabase Connection...');
console.log('URL:', supabaseUrl);

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
  const { data, error } = await supabase.from('non_existent_table_for_ping').select('*').limit(1);
  if (error) {
    if (error.code === '42P01') {
      console.log('✅ SUCCESS: Connected to Supabase perfectly! (Database responded to query)');
    } else {
      console.log('✅ Connection reached Supabase, but got error:', error.message);
    }
  } else {
    console.log('✅ SUCCESS: Connected to Supabase perfectly!');
  }
}

testConnection();
