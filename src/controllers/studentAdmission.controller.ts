import { NextFunction, Request, Response } from 'express';
import { Schema, startSession } from 'mongoose';
import { $enum } from 'ts-enum-util'

import StudentService from '@/services/student.service';
import StudentParentRelationService from '@/services/studentParentRelation.service';
import SchoolTransferService from '@/services/schoolTransfer.service';
import { CreateStudentAdmissionDto } from '@/dtos/studentAdmission.dto';
import ParentService from '@/services/parent.service';
import { LOCAL_GOVT_DIRECTORY, RATION_CARD_TYPE } from '@/models/parent.model';
import { RELIGION, RELIGION_CATEGORY } from '@/models/student.model';

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

      if (body.parentDetails) {
        if (body.parentDetails.id) {
          parentId = body.parentDetails.id
        } else {
          const parent = await this.parentService.create(body.parentDetails, body.address, session)
          parentId = parent._id
        }
      }

      if (body.schoolTransferDetails) {
        const schoolTransfer = await this.schoolTransfer.create(body.schoolTransferDetails, session)
        schoolTransferId = schoolTransfer._id
      }

      const student = await this.studentService.create({
        studentDetails: {
          ...body.personalDetails,
          ...body.admissionDetails,
        },
        parent: parentId,
        schoolTransfer: schoolTransferId,
        session,
      })

      await session.commitTransaction()

      res.status(200).json({ student });
    } catch (error) {
      await session.abortTransaction()
      next(error);
    }
  };

  public getEnums = async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
      rationCardTypes: $enum(RATION_CARD_TYPE).getValues(),
      localGovtDirectories: $enum(LOCAL_GOVT_DIRECTORY).getValues(),
      religion: $enum(RELIGION).getValues(),
      religionCategories: $enum(RELIGION_CATEGORY).getValues()
    });
  }
}

export default StudentAdmissionController;
