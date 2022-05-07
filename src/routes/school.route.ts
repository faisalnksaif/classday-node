import { Router } from 'express';

import { Routes } from '@interfaces/routes.interface';
import firebaseAuthMiddleware from '@middlewares/auth.middleware';
import SchoolController from '@/controllers/school.controller';
import validationMiddleware from '@/middlewares/validation.middleware';
import { CreateSchoolDto } from '@/dtos/school.dto';

class SchoolRoute implements Routes {
  public path = '/school';
  public router = Router();
  public schoolController = new SchoolController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, firebaseAuthMiddleware, validationMiddleware(CreateSchoolDto, 'body', false), this.schoolController.create);
  }
}

export default SchoolRoute;
