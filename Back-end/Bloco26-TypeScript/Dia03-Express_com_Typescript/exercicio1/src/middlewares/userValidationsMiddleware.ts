import { validadeEmail, validadeName, validadePassword } from "../schemas/userSchema";
import { NextFunction, Request, Response } from "express";
import IUser from "../interfaces/user.interface";

export function validateName(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body as IUser;
  const validations = validadeName(name);

  if (validations.message) {
    return res.status(validations.code).json({ message: validations.message });
  }

  next();
}

export function validateEmail(req: Request, res: Response, next: NextFunction) {
  const { email } = req.body as IUser;
  const validations = validadeEmail(email);

  if (validations.message) {
    return res.status(validations.code).json({ message: validations.message });
  }

  next();
}

export function validatePassword(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body as IUser;
  const validations = validadePassword(password);

  if (validations.message) {
    return res.status(validations.code).json({ message: validations.message });
  }

  next();
}
