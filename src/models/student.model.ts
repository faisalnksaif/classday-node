import paginate from 'mongoose-paginate-v2';
import { Schema, model, Document, PaginateModel } from "mongoose";

import { IStudent } from "@/interfaces/student.interface";
export enum GENDER {
  MALE = "M",
  FEMALE = "F",
  OTHER = "O"
}

const StudentSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  gender: {
    type: Schema.Types.String,
    required: true,
  },
  dob: {
    type: Schema.Types.String,
    required: true,
  },
  age: {
    type: Schema.Types.String,
    required: true,
  },
  nationality: {
    type: Schema.Types.String,
    required: true,
  },
  school: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'School'
  },
  parent: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Parent'
  },
  address: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Parent'
  },
  dateOfAdmission: {
    type: Schema.Types.String,
    required: true,
  },
  bloodGroup: {
    type: Schema.Types.String,
  },

  height: {
    type: Schema.Types.String,
  },
  weight: {
    type: Schema.Types.String,
  },
  mobileNumber: {
    type: Schema.Types.String,
    maxLength: 10,
    minLength: 10
  },
  gurdian: {
    type: Schema.Types.String,
  },
  relationWithGuardian: {
    type: Schema.Types.String,
  },
  placeOfBirth: {
    type: Schema.Types.String,
  },
  religion: {
    type: Schema.Types.String,
  },
  cast: {
    type: Schema.Types.String,
  },
  category: {
    type: Schema.Types.String,
  },
}, { timestamps: true });


StudentSchema.plugin(paginate);
const studentModel = model<IStudent, PaginateModel<IStudent> & Document>('Student', StudentSchema);

export default studentModel;