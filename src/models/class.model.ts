import { IClass } from "@/interfaces/class.interface";
import { Schema, model, Document } from "mongoose";

const ClassSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  division: {
    type: Schema.Types.String,
    required: true,
  },
  school: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'School'
  },
}, { timestamps: true });


const classModel = model<IClass & Document>('Class', ClassSchema);

export default classModel;