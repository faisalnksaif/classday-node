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
    unique:true,
    maxLength: 10,
    minLength: 10
  },
  occupation:{
    type: Schema.Types.String,
  },
  income:{
    type: Schema.Types.Number,
  },
  rationCard:{
    type: Schema.Types.String,
    required: true,
  },
  address:{
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Address'
  }
}, { timestamps: true });


ParentSchema.plugin(paginate);
const parentModel = model<IParent, PaginateModel<IParent> & Document>('Parent', ParentSchema);

export default parentModel;