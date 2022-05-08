import paginate from 'mongoose-paginate-v2';
import { Schema, model, Document, PaginateModel } from "mongoose";

import { ITeacher } from "@/interfaces/teacher.interface";

const TeacherSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  mobileNumber: {
    required: true,
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


TeacherSchema.plugin(paginate);
const teacherModel = model<ITeacher, PaginateModel<ITeacher> & Document>('Teacher', TeacherSchema);

export default teacherModel;