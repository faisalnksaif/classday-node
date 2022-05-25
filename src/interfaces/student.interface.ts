import { GENDER } from "@/models/student.model"
import { Document, PopulatedDoc } from "mongoose"
import { IParent } from "./parent.interface"

import { ISchool } from "./school.interface"
import { ISchoolTransfer } from "./schoolTransfer.interface"

export interface IStudent extends Document {
  name: string
  gender?: GENDER
  dob?: string
  age?: string
  nationality?: string
  school: PopulatedDoc<ISchool & Document>
  parent?: PopulatedDoc<IParent & Document>
  schoolTransfer?: PopulatedDoc<ISchoolTransfer & Document>
  dateOfAdmission?: string
  bloodGroup?: string
  height?: string
  weight?: string
  guardian?: string
  relationWithGuardian?: string
  placeOfBirth?: string
  religion?: string
  cast?: string
  category?: string
  mobileNumber?: string
  email?: string
}
