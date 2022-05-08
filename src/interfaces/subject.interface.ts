import { Document } from "mongoose"

import { ISchool } from "./school.interface"
import { ISubjectMaster } from "./subjectMaster.interface"

export interface ISubject extends Document {
  subject: ISubjectMaster['_id']
  school: ISchool['_id']
}