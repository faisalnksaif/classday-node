import { NextFunction, query, Request, Response } from 'express';
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

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const queryParams: any = req.query
      const students = await this.studentService.getAll({
        division: queryParams.division,
        grade: queryParams.grade
      });

      res.status(200).json({ students });
    } catch (error) {
      next(error);
    }
  };
}

export default StudentController;
