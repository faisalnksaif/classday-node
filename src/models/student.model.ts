import paginate from 'mongoose-paginate-v2';
import { Schema, model, Document, PaginateModel } from "mongoose";

import { IStudent } from "@/interfaces/student.interface";

const StudentSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  mobileNumber: {
    type: Schema.Types.String,
    maxLength: 10,
    minLength: 10
  },
  school: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'School'
  },
}, { timestamps: true });


StudentSchema.plugin(paginate);
const studentModel = model<IStudent, PaginateModel<IStudent> & Document>('Student', StudentSchema);

export default studentModel;