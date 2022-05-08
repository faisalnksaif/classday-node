import { Router } from 'express';

import { Routes } from '@interfaces/routes.interface';
import firebaseAuthMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@/middlewares/validation.middleware';
import ParentController from '@/controllers/parent.controller';
import { CreateParentDto } from '@/dtos/parent.dto';

class ParentRoute implements Routes {
  public path = '/parent';
  public router = Router();
  public parentController = new ParentController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/school/:school`, firebaseAuthMiddleware, this.parentController.getAllBySchool);
    this.router.post(`${this.path}`, firebaseAuthMiddleware, validationMiddleware(CreateParentDto, 'body', false), this.parentController.create);
  }
}

export default ParentRoute;
