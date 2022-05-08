import { Document } from "mongoose"
import { ISchool } from "./school.interface"

export interface IStudent extends Document {
  name: string
  mobileNumber?: string
  school: ISchool['_id']
}