import { NextFunction, Request, Response } from 'express';
import { Schema, startSession } from 'mongoose';

import StudentService from '@/services/student.service';
import StudentParentRelationService from '@/services/studentParentRelation.service';
import SchoolTransferService from '@/services/schoolTransfer.service';
import { CreateStudentAdmissionDto } from '@/dtos/studentAdmission.dto';
import ParentService from '@/services/parent.service';

class StudentAdmissionController {
  public studentService: StudentService
  public studentParentRelationService: StudentParentRelationService
  public parentService: ParentService
  public schoolTransfer: SchoolTransferService

  constructor() {
    this.studentService = new StudentService()
    this.studentParentRelationService = new StudentParentRelationService()
    this.parentService = new ParentService()
    this.schoolTransfer = new SchoolTransferService()
  }

  public create = async (req: Request, res: Response, next: NextFunction) => {
    const session = await startSession()
    session.startTransaction();
    try {
      const body: CreateStudentAdmissionDto = req.body

      let parentId: Schema.Types.ObjectId
      let schoolTransferId: Schema.Types.ObjectId

      if (body.parent) {
        if (body.parent.id) {
          parentId = body.parent.id
        } else {
          const parent = await this.parentService.create(body.parent, body.address)
          parentId = parent._id
        }
      }

      if (body.schoolTransfer) {
        const schoolTransfer = await this.schoolTransfer.create(body.schoolTransfer, session)
        schoolTransferId = schoolTransfer._id
      }

      const student = await this.studentService.create({
        studentDetails: {
          ...body.student,
          ...body.admissionDetails,
        },
        parent: parentId,
        schoolTransfer: schoolTransferId,
      })

      await session.commitTransaction()

      res.status(200).json({ student });
    } catch (error) {
      await session.abortTransaction()
      next(error);
    }
  };
}

export default StudentAdmissionController;
