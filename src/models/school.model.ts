import paginate from 'mongoose-paginate-v2';
import { Schema, model, Document, PaginateModel } from "mongoose";

import { ISchool } from "@/interfaces/school.interface";

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
  academicYears: {
    type: Schema.Types.Array,
    name: {
      type: Schema.Types.String,
    },
    isActive: {
      type: Schema.Types.Boolean,
    }
  },
}, { timestamps: true });


SchoolSchema.plugin(paginate);
const schoolModel = model<ISchool, PaginateModel<ISchool> & Document>('School', SchoolSchema);

export default schoolModel;