import { Router } from 'express';

import { Routes } from '@interfaces/routes.interface';
import firebaseAuthMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@/middlewares/validation.middleware';
import ClassMasterController from '@/controllers/classMaster.controller';
import { CreateClassMasterDto } from '@/dtos/classMaster.dto';

class ClassMasterRoute implements Routes {
  public path = '/classMaster';
  public router = Router();
  public classMasterController = new ClassMasterController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, firebaseAuthMiddleware, this.classMasterController.getAll);
    this.router.post(`${this.path}`, firebaseAuthMiddleware, validationMiddleware(CreateClassMasterDto, 'body', false), this.classMasterController.create);
  }
}

export default ClassMasterRoute;
