import { IClassMaster } from "@/interfaces/classMaster.interface";
import { Schema, model, Document } from "mongoose";

const ClassMasterSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  order: {
    type: Schema.Types.Number,
    required: true,
    unique: true,
  }
}, { timestamps: true });


const classMasterModel = model<IClassMaster & Document>('ClassMaster', ClassMasterSchema);

export default classMasterModel;