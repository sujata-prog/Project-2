import {createClient} from '@supabase/supabase-js';
const supabaseUrl = 'https://cwnlszfjpnzishynxhzr.supabase.co';
const supabaseAnonKey = 'sb_publishable_wyklGULjVN25aLdFlk5ehg_TvGe5Il2';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
