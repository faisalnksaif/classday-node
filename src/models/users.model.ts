import { model, Schema, Document } from 'mongoose';
import { User } from '@interfaces/users.interface';

export enum ROLE {
  USER = 'user',
  ADMIN = 'admin',
  DEALER = 'dealer'
}

export const userSchema: Schema = new Schema({
  name: {
    type: String,
    maxLength: [30, 'Your name cannot exceed 30 characters'],
  },
  email: {
    type: String,
    required: false,
  },
  firebaseUid: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: ROLE.USER,
  },
  fcmToken: {
    type: String,
  }
},
  {
    timestamps: true
  });

const userModel = model<User & Document>('User', userSchema);

export default userModel;
