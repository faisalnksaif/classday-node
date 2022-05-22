import { IClass } from "@/interfaces/class.interface";
import { Schema, model, Document } from "mongoose";
import { SECTION } from "./classMaster.model";

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
  section: {
    type: Schema.Types.String,
    enum: [SECTION.KINDER_GARTEN, SECTION.PRIMARY, SECTION.UPPER_PRIMARY, SECTION.SECONDARY, SECTION.HIGHER_SECONDARY,]
  }
}, { timestamps: true });


const classModel = model<IClass & Document>('Class', ClassSchema);

export default classModel;