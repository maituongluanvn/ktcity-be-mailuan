import { Request, Response } from 'express';

function resGetManySuccess(res: Response, data: any, total: number, code: number) {
    return res.status(code).json({
        status: true,
        data: data,
        total: total
    });
}

function resGetDetailSuccess(res: Response, data: any, code: number) {
    return res.status(code).json({
        status: true,
        data: data
    });
}

function updateSuccess(res: Response) {
    return res.status(200).json({
        status: true
    });
}

export { resGetManySuccess, resGetDetailSuccess, updateSuccess };
