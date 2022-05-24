import { Document } from "mongoose"

export interface IAddress extends Document {
    houseName?: string
    place?: string
    state: number
    district: string
    taluk?: string
    panchayath: string
    localBody?: number
    postOffice?: string
    pinCode: string
    occupation?: string
    email?: string
}