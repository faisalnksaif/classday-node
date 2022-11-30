process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '@/app';

import validateEnv from '@utils/validateEnv';
import ClassMasterRoute from './routes/classMaster.route';
import DistrictMasterRoute from './routes/districtMaster.route';
import IndexRoute from './routes/index.route';
import StudentRoute from './routes/student.route';

validateEnv();

const app = new App([
  new ClassMasterRoute(),
  new DistrictMasterRoute(),
  new IndexRoute(),
  new StudentRoute(),
]);

app.listen();
