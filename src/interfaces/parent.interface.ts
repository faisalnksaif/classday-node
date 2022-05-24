import { Document, ObjectId } from "mongoose"
import { IAddress } from "./address.interface"

export interface IParent extends Document {
  name: string
  mobileNumber: string
  occupation?: string
  income?: number
  rationCard?: string
  address: IAddress['_id']

}