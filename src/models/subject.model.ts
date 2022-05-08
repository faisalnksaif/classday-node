import { model, Schema, Document, PaginateModel } from 'mongoose';
import paginate from 'mongoose-paginate-v2';

import { ISubjectMaster } from '@/interfaces/subjectMaster.interface';

export const SubjectSchema: Schema = new Schema({
  subject: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'SubjectMaster'
  },
  school: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'School'
  },
}, { timestamps: true });

SubjectSchema.plugin(paginate);
const subjectModel = model<ISubjectMaster, PaginateModel<ISubjectMaster> & Document>('Subject', SubjectSchema);

export default subjectModel;
