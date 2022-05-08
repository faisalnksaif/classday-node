import { Document } from "mongoose"

import { IParent } from "./parent.interface"
import { IStudent } from "./student.interface"

export interface IStudentParentRelation extends Document {
  student: IStudent['_id']
  parent: IParent['_id']
}