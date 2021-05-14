import { Request, Response, NextFunction } from 'express';

const getUserMW = async (req: Request, res: Response, next: NextFunction) => {
    let { keyword = '', skip = 0, take = 5 } = req.query as any;
    if (+take > 5 || !take) {
        return res.status(400).json({
            status: false,
            message: 'query string is not validate'
        });
    } else {
        next();
    }
};

const putUserMW = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params as any;
    let isErr = false;
    const { body } = req;

    if (body?.email) {
        isErr = true;
    }

    if (isErr) {
        return res.status(400).json({
            status: false,
            message: 'missing ID'
        });
    }

    if (id) {
        next();
    }
};

const deleteUserMW = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params as any;
    if (id) {
        next();
    } else {
        res.status(400);
    }
};

export { getUserMW, putUserMW, deleteUserMW };
