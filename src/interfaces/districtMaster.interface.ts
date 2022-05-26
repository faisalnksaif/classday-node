import { Document } from "mongoose"

export interface IDistrictMaster extends Document {
  district: string
  state: string
  country: string
}