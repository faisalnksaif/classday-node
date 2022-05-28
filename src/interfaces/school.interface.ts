import { Document } from "mongoose"

interface IAcademicYear {
  name: string
  isActive: boolean
}

export interface ISchool extends Document {
  name: string
  address: string
  academicYears: IAcademicYear[]
}