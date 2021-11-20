import { model, Schema, Document } from 'mongoose';
import { User } from '@interfaces/users.interface';

// email id, password signup // 123123123asdasd
// mobile number signup

// user collection -> user(mobile number, email id), name(optional), role

const userSchema: Schema = new Schema({
  username: {
    type: String,
    maxLength: [30, 'Your name cannot exceed 30 characters']
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
    minlength: [6, 'Your password must be longer than 6 characters'],
    select: false
  },
  mobileNumber: {
    type: String,
    minlength: 10,
    maxlength: 10
  },
  role: {
    type: String,
    default: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const userModel = model<User & Document>('User', userSchema);

export default userModel;
