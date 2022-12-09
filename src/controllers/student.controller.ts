import { StudentService } from '@/services/student.service';
import { NextFunction, Request, Response } from 'express';

class StudentController {
    studentService: StudentService = new StudentService

    constructor() {
        this.studentService
    }

    public index = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const body = req.body;
            await this.studentService.creat(body.name, body.age);
            res.sendStatus(200);
        } catch (error) {
            next(error);
        }
    };
}

export default StudentController;