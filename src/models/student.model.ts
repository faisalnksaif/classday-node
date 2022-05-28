import aggregatePaginate from 'mongoose-aggregate-paginate-v2';
import paginate from 'mongoose-paginate-v2';
import autoIncrement from 'mongoose-auto-increment'
import { Schema, model, Document, PaginateModel, createConnection } from "mongoose";
import { $enum } from 'ts-enum-util'

import { IStudent } from "@/interfaces/student.interface";
import { dbConnection } from '@/databases';

export enum GENDER {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER"
}

export enum RELIGION {
  HINDU = 'HINDU',
  CHRISTIAN = 'CHRISTIAN',
  MUSLIM = 'MUSLIM',
  ISLAM = 'ISLAM',
  JAIN = 'JAIN',
  SIKH = 'SIKH',
  BUDHIST = 'BUDHIST',
  BAHAI = 'BAHAI',
  SECULAR = 'SECULAR',
  JUDAISM = 'JUDAISM',
  NON_RELIGION = 'NON_RELIGION',
  NOT_APPLICABLE = 'NOT_APPLICABLE',
}

export enum RELIGION_CATEGORY {
  GENERAL = 'GENERAL',
  SC = 'SC',
  ST = 'ST',
  OBC = 'OBC',
  OEC = 'OEC',
}

const StudentSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  gender: {
    type: Schema.Types.String,
    enum: {
      values: [...$enum(GENDER).getValues(), null],
      message: 'Please select a valid gender'
    },
  },
  dob: {
    type: Schema.Types.Date,
  },
  nationality: {
    type: Schema.Types.String,
  },
  school: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'School'
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: 'Parent'
  },
  dateOfAdmission: {
    type: Schema.Types.Date,
  },
  bloodGroup: {
    type: Schema.Types.String,
  },
  height: {
    type: Schema.Types.Number,
  },
  weight: {
    type: Schema.Types.Number,
  },
  mobileNumber: {
    type: Schema.Types.String,
    maxLength: 10,
    minLength: 10
  },
  guardian: {
    type: Schema.Types.String,
  },
  relationWithGuardian: {
    type: Schema.Types.String,
  },
  placeOfBirth: {
    type: Schema.Types.String,
  },
  religion: {
    type: Schema.Types.String,
    enum: {
      values: [...$enum(RELIGION).getValues(), null]
    }
  },
  cast: {
    type: Schema.Types.String,
  },
  category: {
    type: Schema.Types.String,
    enum: {
      values: [...$enum(RELIGION_CATEGORY).getValues(), null]
    }
  },
  email: {
    type: Schema.Types.String,
  },
  schoolTransfer: {
    type: Schema.Types.ObjectId,
    ref: 'SchoolTransfer'
  },
  classes: {
    type: Schema.Types.Array,
    academicYear: {
      type: Schema.Types.String,
    },
    name: {
      type: Schema.Types.String,
    },
    division: {
      type: Schema.Types.String,
    },
    isActive: {
      type: Schema.Types.Boolean,
      default: true,
    },
  }
}, { timestamps: true });

autoIncrement.initialize(createConnection(dbConnection.url))
StudentSchema.plugin(autoIncrement.plugin, { model: 'Book', field: 'regNo' });

StudentSchema.plugin(paginate);
StudentSchema.plugin(aggregatePaginate);

const studentModel = model<IStudent, PaginateModel<IStudent> & Document>('Student', StudentSchema);

export default studentModel;