import { SECTION } from "@/models/classMaster.model"
import { Document } from "mongoose"

export interface IClassMaster extends Document {
  name: string
  order: number
  section: SECTION
}

export type IBaseClassMaster = Pick<IClassMaster, "name" | "order" | "section">