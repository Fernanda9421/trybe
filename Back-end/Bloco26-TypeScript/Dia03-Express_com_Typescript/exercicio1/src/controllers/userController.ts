import UserService from "../services/userService";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export default class UserController {
  public service = new UserService();

  public getAll = async(req: Request, res: Response):Promise<Response> => {
    const users = await this.service.getAll();
    return res.status(StatusCodes.OK).json(users);
  }

  public getById = async(req: Request, res: Response):Promise<Response | void> => {
    const { id } = req.params;
    const user = await this.service.getById(Number(id));

    !user
      ? res.status(StatusCodes.NOT_FOUND).json({ message: 'User not found!' })
      : res.status(StatusCodes.OK).json(user)
  }

  public createUser = async(req:Request, res:Response, next:NextFunction):Promise<Response | void> => {
    const { name, email, password } = req.body;
    const user = await this.service.createUser(name, email, password);

    !user
      ? res.status(StatusCodes.CONFLICT).json({ message: 'User already exists!' })
      : res.status(StatusCodes.OK).json(user)
  }
}
