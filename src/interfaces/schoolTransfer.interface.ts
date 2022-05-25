import { Document } from "mongoose";

export interface ISchoolTransfer extends Document {
  number: string;
  date?: string
  admissionDate?: string;
  leavingDate?: string;
  prevSchool?: string
}
