/** @type {import('drizzle-kit').Config} */
export default {
  schema: './src/db/schema.ts',
  out: './drizzle/migrations',
  dialect: 'sqlite',
  dbCredentials: {
    url: './drizzle/local.db',
  },
  verbose: true,
  strict: true,
};

