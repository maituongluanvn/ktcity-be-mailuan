import { Request, Response, NextFunction } from 'express';
import { resSuccess, updateSuccess } from '../function/func';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({
    log: ['query', 'info', `warn`, `error`]
});

const getUser = async (req: Request, res: Response, next: NextFunction) => {
    const { keyword = '', skip = 0, take = 5, status } = req.query as any;
    try {
        const total = await prisma.user.count({
            where: {
                status: +status
            }
        });

        const data = await prisma.user.findMany({
            where: {
                status: +status
            },
            skip: +skip * +take,
            take: +take
        });
        resSuccess(res, data, total, 200);
    } catch (err) {
        return res.status(400).json({
            status: false,
            message: err.message
        });
    }
};

const putUser = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params as any;
    const { body = {} } = req as any;

    try {
        await prisma.user.update({
            where: {
                id: +id
            },
            data: { ...body }
        });
        updateSuccess(res);
    } catch (err) {
        return res.status(400).json({
            status: false,
            message: err
        });
    }
};

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const { body = {} } = req as any;
    try {
        await prisma.user.create({
            data: { ...body }
        });
        updateSuccess(res);
    } catch (err) {
        return res.status(400).json({
            status: false,
            message: err
        });
    }
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params as any;
    try {
        await prisma.user.delete({
            where: {
                id: +id
            }
        });
        updateSuccess(res);
    } catch (err) {
        return res.status(400).json({
            status: false,
            message: err
        });
    }
};

export { getUser, putUser, createUser, deleteUser };
