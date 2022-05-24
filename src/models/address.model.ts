import paginate from 'mongoose-paginate-v2';
import { Schema, model, Document, PaginateModel } from "mongoose";

import { IStudent } from "@/interfaces/student.interface";
import { IAddress } from '@/interfaces/address.interface';

const AddressSchema = new Schema({
  houseName: {
    type: Schema.Types.String,
  },
  place: {
    type: Schema.Types.String,
  },
  state: {
    type: Schema.Types.String,
    required: true,
  },
  district: {
    type: Schema.Types.String,
    required: true,
  },
  taluk: {
    type: Schema.Types.String,
  },
  panchayath: {
    type: Schema.Types.String,
    required: true,
  },
  localBody: {
    type: Schema.Types.String,
    required: true,
  },
  postOffice: {
    type: Schema.Types.String,
  },
  pinCode: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
  }
}, { timestamps: true });


AddressSchema.plugin(paginate);
const addressModel = model<IAddress, PaginateModel<IAddress> & Document>('Address', AddressSchema);

export default addressModel;