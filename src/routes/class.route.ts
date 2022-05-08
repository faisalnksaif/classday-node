import { Router } from 'express';

import { Routes } from '@interfaces/routes.interface';
import firebaseAuthMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@/middlewares/validation.middleware';
import { CreateClassDto } from '@/dtos/class.dto';
import ClassController from '@/controllers/class.controller';

class ClassRoute implements Routes {
  public path = '/class';
  public router = Router();
  public classController = new ClassController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/school/:school`, firebaseAuthMiddleware, this.classController.getAllBySchool);
    this.router.get(`${this.path}/class/:class`, firebaseAuthMiddleware, this.classController.get);
    this.router.post(`${this.path}`, firebaseAuthMiddleware, validationMiddleware(CreateClassDto, 'body', false), this.classController.create);
  }
}

export default ClassRoute;
