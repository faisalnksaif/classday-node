import { ISchool } from "@/interfaces/school.interface";
import { Schema, model, Document } from "mongoose";

const SchoolSchema = new Schema({
  name: String,
  address: String,
}, { timestamps: true });


const schoolModel = model<ISchool & Document>('School', SchoolSchema);

export default schoolModel;