import { IParent } from "@/interfaces/parent.interface";
import { Schema, model, Document } from "mongoose";

const ParentSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  mobileNumber: {
    required: true,
    type: Schema.Types.String,
    maxLength: 10,
    minLength: 10
  },
  school: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'School'
  },
}, { timestamps: true });


const parentModel = model<IParent & Document>('Parent', ParentSchema);

export default parentModel;