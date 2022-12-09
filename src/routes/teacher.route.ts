import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import TeacherController from '@/controllers/teacher.controller';

class TeacherRoutes implements Routes {
    public path = '/teacher';
    public router = Router();
    teacherController: TeacherController

    constructor() {
        this.teacherController = new TeacherController;
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(`${this.path}`, this.teacherController.createTeacher);
        this.router.get(`${this.path}`, this.teacherController.getAllTeachers);
        this.router.get(`${this.path}/class-teachers`, this.teacherController.getAllClassTeachers);
    }
}
export default TeacherRoutes;