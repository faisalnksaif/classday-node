import { IClassMaster } from "@/interfaces/classMaster.interface";
import { Schema, model, Document } from "mongoose";

export enum SECTION {
  KINDER_GARTEN = 'KINDER_GARTEN',
  PRIMARY = 'PRIMARY',
  UPPER_PRIMARY = 'UPPER_PRIMARY',
  SECONDARY = 'SECONDARY',
  HIGHER_SECONDARY = 'HIGHER_SECONDARY',
}

const ClassMasterSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  order: {
    type: Schema.Types.Number,
    required: true,
    unique: true,
  },
  section: {
    type: Schema.Types.String,
    enum: [SECTION.KINDER_GARTEN, SECTION.PRIMARY, SECTION.UPPER_PRIMARY, SECTION.SECONDARY, SECTION.HIGHER_SECONDARY,]
  }
}, { timestamps: true });


const classMasterModel = model<IClassMaster & Document>('ClassMaster', ClassMasterSchema);

export default classMasterModel;