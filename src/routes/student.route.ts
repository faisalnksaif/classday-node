import { Router } from 'express';

import { Routes } from '@interfaces/routes.interface';
import firebaseAuthMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@/middlewares/validation.middleware';
import StudentController from '@/controllers/student.controller';
import { CreateStudentPersonalDetailsDto, GetStudentsDto } from '@/dtos/student.dto';

class StudentRoute implements Routes {
  public path = '/students';
  public router = Router();
  public studentController = new StudentController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/create`, firebaseAuthMiddleware, validationMiddleware(CreateStudentPersonalDetailsDto, 'body', false), this.studentController.create);
  }
}

export default StudentRoute;
