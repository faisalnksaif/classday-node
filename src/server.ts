process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '@/app';
import AuthRoute from '@routes/auth.route';

import validateEnv from '@utils/validateEnv';
import SchoolRoute from './routes/school.route';

validateEnv();

const app = new App([
  new AuthRoute(),
  new SchoolRoute(),
]);

app.listen();
