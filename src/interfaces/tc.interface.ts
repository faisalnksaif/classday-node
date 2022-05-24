import { Document } from "mongoose";


export interface Itc extends Document {
    number: string;
    date: string
    admissionDate?: string;
    leavingDate: string;
    prevSchool: string
}
