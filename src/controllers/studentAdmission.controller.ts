import { NextFunction, Request, Response } from 'express';
import StudentService from '@/services/student.service';
import StudentParentRelationService from '@/services/studentParentRelation.service';
import { CreateStudentAdmissionDto } from '@/dtos/studentAdmission.dto';

class StudentAdmissionController {
  public studentService = new StudentService();
  public studentParentRelationService = new StudentParentRelationService();

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body: CreateStudentAdmissionDto = req.body
      const student = await this.studentService.create(req.body);
      const relation = await this.studentParentRelationService.create({
        ...body,
        student: student.id,
      })

      res.status(200).json({ student, relation });
    } catch (error) {
      next(error);
    }
  };
}

export default StudentAdmissionController;
