import { NextFunction, query, Request, Response } from 'express';
import StudentService from '@/services/student.service';
import asyncHandler from '@/utils/asynchandler';

class StudentController {
  public studentService = new StudentService();

  public create = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
      const student = await this.studentService.create(req.body);
      res.status(200).json(student);
  });

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
