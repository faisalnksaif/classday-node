import { Document } from "mongoose"
import { ISchool } from "./school.interface"

export interface IParent extends Document {
  name: string
  mobileNumber: string
  school: ISchool['_id']
}