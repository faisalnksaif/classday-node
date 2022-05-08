import { IStudent } from "@/interfaces/student.interface";
import { Schema, model, Document } from "mongoose";

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


const studentModel = model<IStudent & Document>('Student', StudentSchema);

export default studentModel;