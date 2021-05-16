import express from 'express';
import { getUser, putUser, createUser, deleteUser, getUserDetail } from '../controllers/user';
import { getUserMW, putUserMW, createUserMW, deleteUserMW } from '../middlewares/user';

const userRouter = express.Router();

userRouter.get('/', getUserMW, getUser);
userRouter.get('/:id', getUserDetail);
userRouter.put('/:id', putUserMW, putUser);
userRouter.post('/', createUserMW, createUser);
userRouter.delete('/:id', deleteUserMW, deleteUser);

export = userRouter;
