import { Document } from 'mongoose';

export interface Teacher extends Document {
    name: String
    age?: Number
    subject: String
    isClassTeacher?: Boolean
}