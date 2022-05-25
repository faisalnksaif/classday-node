import paginate from 'mongoose-paginate-v2';

import { IParent } from "@/interfaces/parent.interface";
import { Schema, model, Document, PaginateModel } from "mongoose";

const ParentSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  mobileNumber: {
    type: Schema.Types.String,
    required: true,
    unique: true,
    maxLength: 10,
    minLength: 10
  },
  occupation: {
    type: Schema.Types.String,
  },
  income: {
    type: Schema.Types.Number,
  },
  rationCard: {
    type: Schema.Types.String,
  },
  address: {
    houseName: {
      type: Schema.Types.String,
    },
    place: {
      type: Schema.Types.String,
    },
    state: {
      type: Schema.Types.String,
    },
    district: {
      type: Schema.Types.String,
    },
    taluk: {
      type: Schema.Types.String,
    },
    panchayath: {
      type: Schema.Types.String,
    },
    localBody: {
      type: Schema.Types.String,
    },
    postOffice: {
      type: Schema.Types.String,
    },
    pinCode: {
      type: Schema.Types.String,
    },
    email: {
      type: Schema.Types.String,
    }
  },
}, { timestamps: true });


ParentSchema.plugin(paginate);
const parentModel = model<IParent, PaginateModel<IParent> & Document>('Parent', ParentSchema);

export default parentModel;