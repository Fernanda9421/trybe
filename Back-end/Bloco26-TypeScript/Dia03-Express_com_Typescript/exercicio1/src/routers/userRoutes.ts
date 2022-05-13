import { Router } from "express";
import UserController from "../controllers/userController";

const userController = new UserController();

const route = Router();

route.get('/', userController.getAll);
route.get('/:id', userController.getById);

export default route;
