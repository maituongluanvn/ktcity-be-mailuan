import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({
    log: ['query', 'info', `warn`, `error`]
});

const getUser = async (req: Request, res: Response, next: NextFunction) => {
    const { keyword = '', skip = 0, take = 10 } = req.query as any;
    try {
        const total = await prisma.user.count({});
        const user = await prisma.user.findMany({
            where: {
                email: {
                    contains: keyword
                }
            },
            skip: 0,
            take: 10
        });

        return res.status(200).json({
            status: true,
            data: user,
            total: total
        });
    } catch (err) {
        return res.status(400).json({
            status: false
        });
    }
};

export { getUser };
