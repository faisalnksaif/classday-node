import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@interfaces/users.interface';
import UserService from '@services/user.service';

class UserController {
  public userService = new UserService();

  public getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page: string = req.query.page as string;
      const limit: string = (req.query.limit || '10') as string;
      const findAllUsersData = await this.userService.findAllUser(page, limit);

      res.status(200).json(findAllUsersData);
    } catch (error) {
      next(error);
    }
  };

  public getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: string = req.params.id;
      const findOneUserData: User = await this.userService.findUserById(userId);

      res.status(200).json({ data: findOneUserData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public getUserByFirebaseId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: string = req.body.firebaseUid;
      const findOneUserData: User = await this.userService.findUserByFirebaseId(userId);

      res.status(200).json(findOneUserData);
    } catch (error) {
      console.log('error', error)
      next(error);
    }
  };

  public updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, firebaseUid } = req.body as CreateUserDto;
      const updateUserData: User = await this.userService.updateUser({
        firebaseUid, name, email
      });

      res.status(200).json(updateUserData);
    } catch (error) {
      next(error);
    }
  };

  public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: string = req.params.id;
      const deleteUserData: User = await this.userService.deleteUser(userId);

      res.status(200).json({ data: deleteUserData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };

  public getUsersByMobileNumber = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = this.userService.getUsersByMobileNumber();

      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;
