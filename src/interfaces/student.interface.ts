import { GENDER } from "@/models/student.model"
import { Document, PopulatedDoc } from "mongoose"
import { IParent } from "./parent.interface"

import { ISchool } from "./school.interface"
import { ISchoolTransfer } from "./schoolTransfer.interface"

export interface IStudentClass {
  name: string
  academicYear: string
  isActive: boolean
  division: string
}
export interface IStudentPersonalDetails {
  name: string
  regNo: string
  gender?: GENDER
  dob?: string
  age?: string
  nationality?: string
  school: PopulatedDoc<ISchool & Document>
  mobileNumber?: string
  email?: string
  height?: string
  weight?: string
  parent?: PopulatedDoc<IParent & Document>
  schoolTransfer?: PopulatedDoc<ISchoolTransfer & Document>
}

export interface IStudentAdmissionDetails {
  dateOfAdmission?: string
  religion?: string
  cast?: string
  category?: string
  placeOfBirth?: string
  bloodGroup?: string
  classes: IStudentClass[]
}


export type IStudent = Document & IStudentPersonalDetails & IStudentAdmissionDetails
