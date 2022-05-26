import { Router } from 'express';

import { Routes } from '@interfaces/routes.interface';
import firebaseAuthMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@/middlewares/validation.middleware';
import { CreateStudentAdmissionDto } from '@/dtos/studentAdmission.dto';
import StudentAdmissionController from '@/controllers/studentAdmission.controller';

class StudentAdmissionRoute implements Routes {
  public path = '/student-admission';
  public router = Router();
  public studentAdmissionController = new StudentAdmissionController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/enums`, this.studentAdmissionController.getEnums);
    this.router.post(`${this.path}`, firebaseAuthMiddleware, validationMiddleware(CreateStudentAdmissionDto, 'body', false), this.studentAdmissionController.create);
  }
}

export default StudentAdmissionRoute;
