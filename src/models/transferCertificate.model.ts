import paginate from 'mongoose-paginate-v2';
import { Schema, model, Document, PaginateModel } from "mongoose";

import { IStudent } from "@/interfaces/student.interface";
import { Itc } from '@/interfaces/tc.interface';

const TCSchema = new Schema({

  number: {
    type: Schema.Types.String,
    required: true
  },
  date: {
    type: Schema.Types.String,
  },
  admissionDate: {
    type: Schema.Types.String,
  },
  leavingDate: {
    type: Schema.Types.String,
    required: "tue"
  },
  prevSchool: {
    type: Schema.Types.String,
    required: true
  }
}, { timestamps: true });


TCSchema.plugin(paginate);
const TCModel = model<Itc, PaginateModel<Itc> & Document>('TransferCertificate', TCSchema);

export default TCModel;