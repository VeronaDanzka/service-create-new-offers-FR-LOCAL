import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Optionnel : SSL si Railway/Supabase/etc.
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

export async function sql(strings, ...params) {
  const client = await pool.connect();
  try {
    const text = strings.reduce((acc, str, i) => acc + str + (i < params.length ? `$${i + 1}` : ''), '');
    const res = await client.query(text, params);
    return res.rows;
  } finally {
    client.release();
  }
};
