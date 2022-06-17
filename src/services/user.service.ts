import _ from 'lodash'
import { toNumber } from 'lodash'
import { UpdateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { User } from '@interfaces/users.interface';
import userModel from '@models/users.model';
import { isEmpty } from '@utils/util';

class UserService {
  public users = userModel;

  public async findAllUser(page: string, limit: string): Promise<{
    users: User[],
    total: number,
    page: string
  }> {
    const users: User[] = await this.users.find().sort({ createdAt: -1 })
      .limit(toNumber(limit))
      .skip((toNumber(page) - 1) * toNumber(limit));

    const total = await this.users.find().countDocuments()

    return {
      users,
      total,
      page,
    };
  }

  public async findUserByFirebaseId(firebaseUid: string): Promise<User> {
    const user = await this.users.findOne({ firebaseUid })
    if (!user) throw new Error('User not found with firebaseUid')
    return user;
  }

  public async findUserById(userId: string): Promise<User> {
    if (isEmpty(userId)) throw new HttpException(400, "You're not userId");

    const findUser: User = await this.users.findOne({ _id: userId });
    if (!findUser) throw new HttpException(409, "You're not user");

    return findUser;
  }

  public async updateUser(userData: UpdateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");
    const userId = (await new UserService().findUserByFirebaseId(userData.firebaseUid)).id
    const updateUserById: User = await this.users.findByIdAndUpdate(userId, userData, { new: true });
    if (!updateUserById) throw new HttpException(409, "You're not user");

    return updateUserById;
  }


  public async deleteUser(userId: string): Promise<User> {
    const deleteUserById: User = await this.users.findByIdAndDelete(userId);
    if (!deleteUserById) throw new HttpException(409, "You're not user");

    return deleteUserById;
  }

  public getUsersByMobileNumber() {
    return [
      {
        _id: '1',
        name: 'Faisal Saif',
        role: 'STUDENT',
      },
      {
        _id: '2',
        name: 'Ashik Sharaf',
        role: 'PARENT',
      },
      {
        _id: '3',
        name: 'Shabeer Ali',
        role: 'TEACHER',
      },
    ]
  }
}

export default UserService;
