import paginate from 'mongoose-paginate-v2';

import { IParent } from "@/interfaces/parent.interface";
import { Schema, model, Document, PaginateModel } from "mongoose";

export enum RATION_CARD_TYPE {
  APL = 'APL',
  BPL = 'BPL',
}

export enum LOCAL_GOVT_DIRECTORY {
  GRAMA_PANCHAYATH = 'GRAMA_PANCHAYATH',
  MUNICIPALITY = 'MUNICIPALITY',
  CORPORATION = 'CORPORATION',
}

const ParentSchema = new Schema({
  fatherName: {
    type: Schema.Types.String,
    required: true,
  },
  motherName: {
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
  guardian: {
    type: Schema.Types.String,
  },
  occupationOfGuardian: {
    type: Schema.Types.String,
  },
  relationWithGuardian: {
    type: Schema.Types.String,
  },
  annualIncome: {
    type: Schema.Types.String,
  },
  rationCardType: {
    type: Schema.Types.String,
    enum: {
      values: [
        RATION_CARD_TYPE.APL,
        RATION_CARD_TYPE.BPL,
        null,
      ]
    }
  },
  localGovtDirectory: {
    type: Schema.Types.String,
    enum: {
      values: [
        LOCAL_GOVT_DIRECTORY.GRAMA_PANCHAYATH,
        LOCAL_GOVT_DIRECTORY.MUNICIPALITY,
        LOCAL_GOVT_DIRECTORY.CORPORATION,
      ]
    }
  },
  districtPanchayath: {
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