import IUser from "../interfaces/user.interface";
import UserModel from "../models/userModel";

const STATUS = {
  codeOK: 200,
  codeNotFound: 404
}

const MESSAGES = {
  userNotFound: 'User not found!'
}

export default class UserService {
  public model = new UserModel();

  public getAll = async (): Promise<IUser[]> => {
    const users = await this.model.getAll();
    return users;
  }

  public getById = async (id: number): Promise<IUser> => {
    const user = await this.model.getById(id);

    return user;
  }
}
