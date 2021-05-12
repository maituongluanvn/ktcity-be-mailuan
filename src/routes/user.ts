import express from 'express';
import { getUser, putUser, createUser, deleteUser } from '../controllers/user';
import { getUserMW, putUserMW, deleteUserMW } from '../middlewares/user';

const userRouter = express.Router();

userRouter.get('/', getUserMW, getUser);
userRouter.put('/:id', putUser);
userRouter.post('/', createUser);
userRouter.delete('/:id', deleteUserMW, deleteUser);

export = userRouter;
