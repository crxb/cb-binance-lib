export declare class BinanceError extends Error {
    code: number;
    isExternalError: boolean;
    constructor(code: number, message: string, isExternalError?: boolean);
}
