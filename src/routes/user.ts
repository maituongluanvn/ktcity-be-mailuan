import express from 'express';
import { getUser, putUser } from '../controllers/user';

const userRouter = express.Router();

userRouter.get('/', getUser);
userRouter.put('/:id', putUser);

export = userRouter;
