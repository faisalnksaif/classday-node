import { Schema, model, Document, PaginateModel } from "mongoose";
import paginate from 'mongoose-paginate-v2';

import { ISchoolTransfer } from '@/interfaces/schoolTransfer.interface';

const SchoolTransferSchema = new Schema({
  number: {
    type: Schema.Types.String,
  },
  date: {
    type: Schema.Types.Date,
  },
  admissionDate: {
    type: Schema.Types.Date,
  },
  leavingDate: {
    type: Schema.Types.Date,
  },
  prevSchool: {
    type: Schema.Types.String,
  }
}, { timestamps: true });


SchoolTransferSchema.plugin(paginate);
const schoolTransferModel = model<ISchoolTransfer, PaginateModel<ISchoolTransfer> & Document>('SchoolTransfer', SchoolTransferSchema);

export default schoolTransferModel;