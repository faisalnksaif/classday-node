import { Document } from 'mongoose';

export interface IStudent extends Document {
    name: String
    age?: number
}