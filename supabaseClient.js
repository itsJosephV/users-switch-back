import { config } from "dotenv";
import { createClient } from "@supabase/supabase-js";
config();

const supabaseUrl = "https://zanimaepuqliwpmelsul.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
