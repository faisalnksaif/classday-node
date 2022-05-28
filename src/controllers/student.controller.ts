import { NextFunction, Request, Response } from 'express';
import StudentService from '@/services/student.service';
import asyncHandler from '@/utils/asynchandler';

class StudentController {
  public studentService = new StudentService();

  public create = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
      const student = await this.studentService.create(req.body);
      res.status(200).json(student);
  });
}

export default StudentController;
