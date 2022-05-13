import { Router } from "express";
import UserController from "../controllers/userController";
import { validateName, validateEmail, validatePassword } from '../middlewares/userValidationsMiddleware';

const userController = new UserController();

const route = Router();

route.get('/', userController.getAll);
route.get('/:id', userController.getById);
route.post('/', validateName, validateEmail, validatePassword, userController.createUser);

export default route;
