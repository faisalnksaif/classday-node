import paginate from 'mongoose-paginate-v2';
import { model, Schema, Document, PaginateModel } from 'mongoose';

import { ISubjectMaster } from '@/interfaces/subjectMaster.interface';

export const SubjectMasterSchema: Schema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
}, { timestamps: true });

SubjectMasterSchema.plugin(paginate);
const subjectMasterModel = model<ISubjectMaster, PaginateModel<ISubjectMaster> & Document>('SubjectMaster', SubjectMasterSchema);

export default subjectMasterModel;
