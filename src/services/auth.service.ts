// import {createUserWithEmailAndPassword} from '@firebase/auth'
import bcrypt from 'bcrypt';
import config from 'config';
import jwt from 'jsonwebtoken';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { DataStoredInToken, TokenData } from '@interfaces/auth.interface';
import { User } from '@interfaces/users.interface';
import userModel from '@models/users.model';
import { isEmpty } from '@utils/util';

class AuthService {
  public users = userModel;

  public async signup(userData: CreateUserDto): Promise<any> {
    // await admin.crea
    // if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    // const findUser: User = await this.users.findOne({ username: userData.username });
    // if (findUser) throw new HttpException(409, `${userData.username} already exists`);

    // const hashedPassword = await bcrypt.hash(userData.password, 10);
    // const createUserData: User = await this.users.create({ ...userData, password: hashedPassword });

    // return createUserData;
  }

  public async login(userData: CreateUserDto): Promise<{ tokenData: TokenData, user:User }> {
    const user: User = await this.users.findOne({ username: userData.username }).select('+password');
    if (!user) throw new HttpException(409, `${userData.username} not found`);

    const isPasswordMatching: boolean = await bcrypt.compare(userData.password, user.password);
    if (!isPasswordMatching) throw new HttpException(409, "You're password not matching");
    const tokenData = this.createToken(user);

    return { tokenData, user };
  }

  public async logout(userData: User): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: User = await this.users.findOne({ email: userData.email, password: userData.password }).select('+password');
    if (!findUser) throw new HttpException(409, `You're email ${userData.email} not found`);

    return findUser;
  }

  public createToken(user: User): TokenData {
    const dataStoredInToken: DataStoredInToken = { _id: user._id };
    const secretKey: string = config.get('secretKey');
    const expiresIn: number = 60 * 60;

    return { expiresIn, token: jwt.sign(dataStoredInToken, secretKey, { expiresIn }) };
  }

  public createCookie(tokenData: TokenData): string {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
  }
}

export default AuthService;
