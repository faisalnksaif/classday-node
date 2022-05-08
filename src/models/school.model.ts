import { ISchool } from "@/interfaces/school.interface";
import { Schema, model, Document } from "mongoose";

const SchoolSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  address: {
    type: Schema.Types.String,
    required: true,
  },
}, { timestamps: true });


const schoolModel = model<ISchool & Document>('School', SchoolSchema);

export default schoolModel;