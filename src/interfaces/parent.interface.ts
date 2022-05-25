import { Document } from "mongoose"

export interface IParent extends Document {
  name: string
  mobileNumber: string
  occupation?: string
  income?: number
  rationCard?: string
  address: IAddress
}

export interface IAddress {
  houseName?: string
  place?: string
  state: number
  district?: string
  taluk?: string
  panchayath?: string
  localBody?: number
  postOffice?: string
  pinCode?: string
  occupation?: string
  email?: string
}