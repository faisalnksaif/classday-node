import { NextFunction, Request, Response } from 'express';
import StudentService from '@/services/student.service';

class StudentController {
  public studentService = new StudentService();

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const student = await this.studentService.create(req.body);

      res.status(200).json(student);
    } catch (error) {
      next(error);
    }
  };
}

export default StudentController;
