import { Router } from 'express';

import { Routes } from '@interfaces/routes.interface';
import firebaseAuthMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@/middlewares/validation.middleware';
import StudentController from '@/controllers/student.controller';
import { CreateStudentDto } from '@/dtos/student.dto';

class StudentRoute implements Routes {
  public path = '/student';
  public router = Router();
  public studentController = new StudentController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, firebaseAuthMiddleware, validationMiddleware(CreateStudentDto, 'body', false), this.studentController.create);
  }
}

export default StudentRoute;
