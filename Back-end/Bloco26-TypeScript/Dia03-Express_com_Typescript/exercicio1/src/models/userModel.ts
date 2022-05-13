import { RowDataPacket } from "mysql2";
import IUser from "../interfaces/user.interface";
import connection from "./connection";

export default class UserModel {
  public getAll = async (): Promise<IUser[]> => {
    const [users] = await connection.execute('SELECT * FROM TypeScriptExpress.Users');
    return users as IUser[];
  }

  public getById = async (id: number): Promise<IUser> => {
    const query = 'SELECT * FROM TypeScriptExpress.Users WHERE id = ?;';

    const [user] = await connection.execute<RowDataPacket[]>(query, [id]);

    return user[0] as IUser;
  };
}
