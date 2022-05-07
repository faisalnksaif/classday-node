import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@interfaces/users.interface';
import userModel from '@models/users.model';

class AuthService {
  public users = userModel;

  public async login(userData: CreateUserDto): Promise<any> {
    const findUser: User = await this.users.findOne({ firebaseUid: userData.firebaseUid })
    if (!findUser) {
      const createUserData: User = await this.users.create({ ...userData });
      return createUserData;
    } else {
      const updateUserById: User = await this.users.findByIdAndUpdate(findUser.id, { ...userData }, { new: true });
      return updateUserById;
    }
  }
}

export default AuthService;
