import { ResultSetHeader, RowDataPacket } from "mysql2";
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

  public getByEmail = async (email:string) => {
    const query = 'SELECT * FROM TypeScriptExpress.Users WHERE email = ?;';
    const [data] = await connection.execute<RowDataPacket[]>(query, [email]);
    return data[0] as IUser;
  };
  
  public createUser = async (name:string, email:string, password:string):Promise<IUser> => {
    const query = 'INSERT INTO TypeScriptExpress.Users (name, email, password) VALUES (?, ?, ?);';
    const [user] = await connection.execute<ResultSetHeader>(query, [name, email, password]);
    return {id: user.insertId, name, email, password };
  };

  public updateUser = async (name:string, email:string, password:string, id:number):Promise<IUser|null> => {
    const query = 'UPDATE TypeScriptExpress.Users SET name = ?, email = ?, password = ? WHERE id = ?';
    const getUser = await this.getById(id);

    if (!getUser) return null;

    await connection.execute<RowDataPacket[]>(query, [name, email, password, id]);
    return {id, name, email, password};
  }
}
