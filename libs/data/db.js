import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

// sql`SELECT * FROM table WHERE id=${id}`
// sql([`SELECT * FROM table WHERE id=$1`], id)
export const sql = async (strings, ...params) => {
  const client = await pool.connect();
  try {

    let text;

    // 🟦 MODE 1 : tagged template
    if (Array.isArray(strings) && strings.raw !== undefined) {
      text = strings.reduce(
        (acc, part, i) => acc + part + (i < params.length ? `$${i + 1}` : ''),
        ''
      );
    }

    // 🟩 MODE 2 : sql([query], ...params)
    else if (Array.isArray(strings) && strings.raw === undefined) {
      text = strings[0]; // On ne touche pas au SQL, il contient déjà $1, $2...
    }

    else {
      throw new Error("Invalid sql() call");
    }

    const result = await client.query(text, params);
    return result.rows;

  } finally {
    client.release();
  }
};
