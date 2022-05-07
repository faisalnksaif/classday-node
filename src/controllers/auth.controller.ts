import { NextFunction, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { IRequestWithUser } from '@interfaces/auth.interface';
import { User } from '@interfaces/users.interface';
import AuthService from '@services/auth.service';

class AuthController {
  public authService = new AuthService();

  public login = async (req: IRequestWithUser, res: Response, next: NextFunction) => {
    try {
      const { firebaseUid, phoneNumber, fcmToken } = req.body
      const userData: CreateUserDto = {
        firebaseUid,
        phoneNumber,
        fcmToken,
      }
      const signUpUserData: User = await this.authService.login(userData);

      res.status(200).json({ id: signUpUserData._id });
    } catch (error) {
      next(error);
    }
  };


  public getuserProfile = async (req: IRequestWithUser, res: Response, next: NextFunction) => {
    try {
      const user: User = req.body;

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
