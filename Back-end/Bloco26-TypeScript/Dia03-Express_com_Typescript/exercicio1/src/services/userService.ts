import IUser from "../interfaces/user.interface";
import UserModel from "../models/userModel";

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

  public createUser = async(name:string, email:string, password:string):Promise<IUser|null> => {
    const userExists = await this.model.getByEmail(email);
    if (userExists) {
      return null;
    }

    const user = await this.model.createUser(name, email, password);
    return user;
  }
}
