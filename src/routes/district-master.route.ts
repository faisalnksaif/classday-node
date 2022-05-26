import { Router } from 'express';

import { Routes } from '@interfaces/routes.interface';
import firebaseAuthMiddleware from '@middlewares/auth.middleware';
import DistrictMasterController from '@/controllers/districtMaster.controller';

class DistrictMasterRoute implements Routes {
  public path = '/district-master';
  public router = Router();
  public districtMasterController = new DistrictMasterController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/states`, this.districtMasterController.getStates);
    this.router.get(`${this.path}/districts/state/:state`, this.districtMasterController.getDistrictsByState);
  }
}

export default DistrictMasterRoute;
