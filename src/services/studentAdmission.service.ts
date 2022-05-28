import { PaginateResult } from "mongoose";

import { GetStudentAdmission } from "@/dtos/studentAdmission.dto";
import studentModel from "@/models/student.model";
import { IStudentAdmission } from "@/interfaces/studentAdmission.interface";
import ClassService from "./class.service";

export default class StudentAdmissionService {
  public student = studentModel
  private classService = new ClassService()

  public async getStudentAdmissions(queryParams: GetStudentAdmission): Promise<PaginateResult<IStudentAdmission>> {
    const filter: any[] = []
    let sections = []
    if (queryParams.section) {
      sections = (await this.classService.getClassesBySection(queryParams.section)).map((s) => s.name)
    }

    if (queryParams.name) {
      filter.push(
        { $match: { 'name': { $regex: queryParams.name, $options: 'i' } }, },
      )
    }

    if (queryParams.section) {
      filter.push({
        $match: {
          "classes": {
            $elemMatch: {
              "isActive": true,
              "name": {
                $in: sections
              }
            }
          }
        }
      })
    }

    if (queryParams.grade) {
      filter.push({
        $match: {
          "classes": {
            $elemMatch: {
              "isActive": true,
              "name": {
                $eq: queryParams.grade
              }
            }
          }
        }
      })
    }

    if (queryParams.division) {
      filter.push({
        $match: {
          "classes": {
            $elemMatch: {
              "isActive": true,
              "division": {
                $eq: queryParams.division
              }
            }
          }
        }
      })
    }
    const aggregation = this.student.aggregate([
      ...filter,
      {
        $lookup: {
          from: 'parents',
          localField: 'parent',
          foreignField: '_id',
          as: 'parent'
        },
      },
      {
        $unwind: {
          path: '$parent',
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $lookup: {
          from: 'schooltransfers',
          localField: 'schoolTransfer',
          foreignField: '_id',
          as: 'schoolTransferDetails'
        },
      },
      {
        $unwind: {
          path: '$schoolTransferDetails',
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $project: {
          'personalDetails': {
            id: '$_id',
            regNo: '$regNo',
            name: '$name',
            school: '$school',
            gender: '$gender',
            dob: '$dob',
            nationality: '$nationality',
            bloodGroup: '$bloodGroup',
            height: '$height',
            weight: '$weight',
            guardian: '$guardian',
            mobileNumber: '$mobileNumber',
            email: '$email',
          },
          'admissionDetails': {
            dateOfAdmission: '$dateOfAdmission',
            placeOfBirth: '$placeOfBirth',
            religion: '$religion',
            cast: '$cast',
            category: '$category',
            classes: '$classes'
          },
          'parentDetails': {
            id: '$parent._id',
            fatherName: '$parent.fatherName',
            motherName: '$parent.motherName',
            mobileNumber: '$parent.mobileNumber',
            guardian: '$parent.guardian',
            occupationOfGuardian: '$parent.occupationOfGuardian',
            relationWithGuardian: '$parent.relationWithGuardian',
            annualIncome: '$parent.annualIncome',
            rationCardType: '$parent.rationCardType',
          },
          address: '$parent.address',
          schoolTransferDetails: '$schoolTransferDetails'
        }
      }
    ])

    return (this.student as any).aggregatePaginate(aggregation)
  }
}