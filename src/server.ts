process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '@/app';
import AuthRoute from '@routes/auth.route';

import validateEnv from '@utils/validateEnv';
import SchoolRoute from './routes/school.route';
import StudentRoute from './routes/student.route';
import ParentRoute from './routes/parent.route';

validateEnv();

const app = new App([
  new AuthRoute(),
  new SchoolRoute(),
  new StudentRoute(),
  new ParentRoute(),
]);

app.listen();
