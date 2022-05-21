import { Document } from "mongoose"
import { ISchool } from "./school.interface"

export interface IClassMaster extends Document {
  name: string
  order: number
}