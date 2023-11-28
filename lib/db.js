import { Pool } from "pg";

let pool;

if (!pool) {
  pool = new Pool({
    user: process.env.NEXT_PUBLIC_PGSQL_USER,
    password: process.env.NEXT_PUBLIC_PGSQL_PASSWORD,
    host: process.env.NEXT_PUBLIC_PGSQL_HOST,
    port: process.env.NEXT_PUBLIC_PGSQl_PORT,
    database: process.env.NEXT_PBULICPGSQL_DATABASE,
  });
}

export default pool;
