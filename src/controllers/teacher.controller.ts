import { ITeacher } from '@/interfaces/teacher.interface';
import { TeacherService } from '@/services/teacher.service';
import { NextFunction, Request, Response } from 'express';

class TeacherController {
    teacherService: TeacherService = new TeacherService

    constructor() {
        this.teacherService
    }

    public createTeacher = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const body = req.body;
            await this.teacherService.createTeacher(body.name, body.age, body.subject, body.isClassTeacher);
            res.sendStatus(200);
        } catch (error) {
            next(error);
        }
    };

    public getAllTeachers = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const allTeachers = await this.teacherService.findAllTeachers();
            res.status(200).json({ data: allTeachers, message: 'All Teachers' });
        } catch (error) {
            next(error);
        }
    };

    public getAllClassTeachers = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const allClassTeachers = await this.teacherService.findAllClassTeachers();
            res.status(200).json({ data: allClassTeachers, message: 'All class teachers' });
        } catch (error) {
            next(error);
        }
    };
}

export default TeacherController;