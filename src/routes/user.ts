import express from 'express';
import { getUser, putUser, createUser, deleteUser } from '../controllers/user';

const userRouter = express.Router();

userRouter.get('/', getUser);
userRouter.put('/:id', putUser);
userRouter.post('/', createUser);
userRouter.delete('/:id', deleteUser);

export = userRouter;
