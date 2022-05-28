import { Router } from 'express';

import { Routes } from '@interfaces/routes.interface';
import firebaseAuthMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@/middlewares/validation.middleware';
import { CreateStudentAdmissionDto, GetStudentAdmission, UpdateStudentAdmissionDto } from '@/dtos/studentAdmission.dto';
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
    this.router.get(`${this.path}/all`, firebaseAuthMiddleware, validationMiddleware(GetStudentAdmission, 'query', false), this.studentAdmissionController.getAll);
    this.router.post(`${this.path}`, firebaseAuthMiddleware, validationMiddleware(CreateStudentAdmissionDto, 'body', false), this.studentAdmissionController.create);
    this.router.put(`${this.path}/:id`, firebaseAuthMiddleware, validationMiddleware(UpdateStudentAdmissionDto, 'body', false), this.studentAdmissionController.update);
  }
}

export default StudentAdmissionRoute;
