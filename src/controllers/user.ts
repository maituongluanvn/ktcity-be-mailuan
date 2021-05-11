import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getUser = async (req: Request, res: Response, next: NextFunction) => {
    // const { keyword: } = req.query;
    // const user = await prisma.user.findUnique({
    //     where: {
    //         email: `%$as%`
    //     }
    // });
    await prisma.$connect();
    return res.status(200).json({
        message: 'dep trai'
        // data: user
    });
};

export { getUser };
