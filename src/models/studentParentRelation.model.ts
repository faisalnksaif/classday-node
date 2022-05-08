import { Schema, model, Document } from "mongoose";
import { IStudentParentRelation } from "@/interfaces/studentParentRelation.interface";

const StudentParentRelationSchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Student'
  },
  parent: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Parent'
  },
}, { timestamps: true });


const parentModel = model<IStudentParentRelation & Document>('StudentParentRelation', StudentParentRelationSchema);

export default parentModel;