import { Document } from "mongoose"
import { ISchool } from "./school.interface"

export interface IClass extends Document {
  name: string
  division: string
  school: ISchool['_id']
}

export type IBaseClass = Pick<IClass, "name" | "division" | "school">