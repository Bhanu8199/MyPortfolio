import { neon } from '@neondatabase/serverless';

const connectionString =
  process.env.NEON_DATABASE_URL ??
  // local Vite dev may have only VITE_ prefix
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (import.meta as unknown as { env?: { VITE_NEON_DATABASE_URL?: string } }).env
    ?.VITE_NEON_DATABASE_URL;


if (!connectionString) {
  throw new Error('NEON_DATABASE_URL environment variable is not set');
}


const sql = neon(connectionString);

export default sql;


