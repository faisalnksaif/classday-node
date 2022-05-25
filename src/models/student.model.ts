import paginate from 'mongoose-paginate-v2';
import { Schema, model, Document, PaginateModel } from "mongoose";

import { IStudent } from "@/interfaces/student.interface";

export enum GENDER {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER"
}

const StudentSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  gender: {
    type: Schema.Types.String,
    enum: {
      values: [GENDER.MALE, GENDER.FEMALE, GENDER.OTHER],
      message: 'Please select a valid gender'
    },
  },
  dob: {
    type: Schema.Types.Date,
  },
  nationality: {
    type: Schema.Types.String,
  },
  school: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'School'
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: 'Parent'
  },
  dateOfAdmission: {
    type: Schema.Types.Date,
  },
  bloodGroup: {
    type: Schema.Types.String,
  },
  height: {
    type: Schema.Types.Number,
  },
  weight: {
    type: Schema.Types.Number,
  },
  mobileNumber: {
    type: Schema.Types.String,
    maxLength: 10,
    minLength: 10
  },
  guardian: {
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
  email: {
    type: Schema.Types.String,
  },
  schoolTransfer: {
    type: Schema.Types.ObjectId,
    ref: 'SchoolTransfer'
  },
}, { timestamps: true });


StudentSchema.plugin(paginate);
const studentModel = model<IStudent, PaginateModel<IStudent> & Document>('Student', StudentSchema);

export default studentModel;