import { Request, Response, NextFunction } from 'express';

const getUser = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        message: 'dep trai'
    });
};

export { getUser };
