import { Request, Response } from 'express';

function resSuccess(res: Response, data: any, total: number, code: number) {
    return res.status(code).json({
        status: true,
        data: data,
        total: total
    });
}

function updateSuccess(res: Response) {
    return res.status(200).json({
        status: true
    });
}

export { resSuccess, updateSuccess };
