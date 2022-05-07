import { mongoMigrateCli } from 'mongo-migrate-ts';
import 'dotenv/config';

import { Env } from '../configs/env';

mongoMigrateCli({
  uri: Env.MONGO_URL,
  database: 'classday',
  migrationsDir: __dirname,
  migrationsCollection: 'migrations_collection',
  options: {
    useUnifiedTopology: true,
  },
});
