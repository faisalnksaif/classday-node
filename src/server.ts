process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '@/app';
import AuthRoute from '@routes/auth.route';

import validateEnv from '@utils/validateEnv';
import SchoolRoute from './routes/school.route';
import StudentRoute from './routes/student.route';
import ParentRoute from './routes/parent.route';
import StudentAdmissionRoute from './routes/studentAdmission.route';
import ClassRoute from './routes/class.route';
import ClassMasterRoute from './routes/classMaster.route';
import DistrictMasterRoute from './routes/districtMaster.route';
import UserRoute from './routes/user.route';

validateEnv();

const app = new App([
  new AuthRoute(),
  new SchoolRoute(),
  new StudentRoute(),
  new ParentRoute(),
  new StudentAdmissionRoute(),
  new ClassRoute(),
  new ClassMasterRoute(),
  new DistrictMasterRoute(),
  new UserRoute(),
]);

app.listen();
