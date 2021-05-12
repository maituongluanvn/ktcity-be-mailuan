import { Request, Response, NextFunction } from 'express';

function resSuccess(res: Response, data: any, total: number, code: number) {
    return res.status(code).json({
        status: true,
        data: data,
        total: total
    });
}

export { resSuccess };
