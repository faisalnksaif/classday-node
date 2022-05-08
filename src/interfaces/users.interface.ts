import { Document } from "mongoose";

import { ROLE } from "@/models/users.model";

export interface User extends Document {
  firebaseUid: string;
  role: ROLE
  email?: string;
  username?: string;
  phoneNumber?: string
  fcmToken?: string
}
 