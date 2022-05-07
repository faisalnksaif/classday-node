import { Document } from "mongoose"

export interface ISchool extends Document {
  name: string
  address: string
}