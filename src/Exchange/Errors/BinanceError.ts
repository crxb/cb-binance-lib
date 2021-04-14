export class BinanceError extends Error {
  code: number;
  isExternalError: boolean;

  constructor(code: number, message: string, isExternalError: boolean = false) {
    super();
    this.message = message;
    this.code = code;
    this.isExternalError = isExternalError;
    console.error(this)
  }
}
