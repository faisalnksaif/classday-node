import paginate from 'mongoose-paginate-v2';
import { Schema, model, Document, PaginateModel } from "mongoose";

import { IDistrictMaster } from '@/interfaces/districtMaster.interface';

const DistrictMasterSchema = new Schema({
  district: {
    type: Schema.Types.String,
    required: true,
  },
  state: {
    required: true,
    type: Schema.Types.String,
  },
  country: {
    type: Schema.Types.String,
    required: true,
  },
}, { timestamps: true });


DistrictMasterSchema.plugin(paginate);
const districtMasterModel = model<IDistrictMaster, PaginateModel<IDistrictMaster> & Document>('DistrictMaster', DistrictMasterSchema);

export default districtMasterModel;