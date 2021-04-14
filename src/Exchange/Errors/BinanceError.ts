export class BinanceError extends Error {
  code: number;
  isExternalError: boolean;

  constructor(code: number, message: string, isExternalError: boolean = false) {
    super(message);
    this.code = code;
    this.isExternalError = isExternalError;
    Object.setPrototypeOf(this, BinanceError.prototype);
  }
}
