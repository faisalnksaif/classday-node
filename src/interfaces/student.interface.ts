import { GENDER } from "@/models/student.model"
import { Document } from "mongoose"
import { IAddress } from "./address.interface"

import { ISchool } from "./school.interface"

export interface IStudent extends Document {
  name: string
  gender: GENDER
  dob: string
  age: string
  nationality: string
  school: ISchool['_id']
  address: IAddress['_id']
  dateOfAdmission: string
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
}
