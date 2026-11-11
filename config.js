// =====================================================================
// LENTERA ADMIN — config.js
// Isi dua nilai ini dari Supabase: Project Settings > API
//   - Project URL            (contoh: https://abcdxyz.supabase.co)
//   - anon public key        (kunci "anon" / "publishable", BUKAN service_role!)
// Kunci anon memang aman ditaruh di sini: yang menjaga data adalah
// login admin + aturan Row Level Security di database.
// JANGAN PERNAH memasukkan kunci "service_role" atau kunci Bunny di file ini.
// =====================================================================
window.LENTERA_CONFIG = {
  SUPABASE_URL: "ISI_PROJECT_URL",
  SUPABASE_ANON_KEY: "ISI_ANON_KEY",
};
