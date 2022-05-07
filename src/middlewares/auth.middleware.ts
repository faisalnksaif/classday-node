import { NextFunction, Response } from 'express';
import { auth } from 'firebase-admin'

import { HttpException } from '@exceptions/HttpException';
import { IRequestWithUser } from '@interfaces/auth.interface';

const firebaseAuthMiddleware = async (req: IRequestWithUser, res: Response, next: NextFunction) => {
  try {
    const Authorization: string = req.cookies['Authorization'] || req.header('Authorization').split('Bearer ')[1] || null;

    if (Authorization) {
      const { uid, email, phone_number } = await auth().verifyIdToken(Authorization)
      req.body.firebaseUid = uid;
      req.body.phoneNumber = phone_number

      next();
    } else {
      next(new HttpException(404, 'Authentication token missing'));
    }
  } catch (error) {
    console.log(error);
    next(new HttpException(401, 'Wrong authentication token'));
  }
};

export default firebaseAuthMiddleware;