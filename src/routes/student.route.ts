import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import StudentController from '@/controllers/student.controller';

class StudentRoute implements Routes {
  public path = '/student/';
  public router = Router();
  studentController: StudentController

  constructor() {
    this.studentController = new StudentController;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, this.studentController.index);
  }
}

export default StudentRoute;