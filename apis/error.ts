import { AxiosError } from "axios";

// types
const HTTP_STATUS = {
  INVALID_USER: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER: 500,
};

// 에러 객체's
// 추가적인 에러 : 네트워크 에러, ???
class CustomError extends AxiosError {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class ApiError<T = unknown> extends AxiosError<T> {
  constructor(error: AxiosError<T>, message?: string) {
    super(message ?? error.message);

    console.log(error);

    this.stack = error.stack;
    this.config = error.config;
    this.code = error.code;
    this.request = error.request;
    this.response = error.response;
    this.status = error.response?.status;
    // this.isAxiosError = error.isAxiosError;
    // this.toJSON = error.toJSON;
    // this.cause = error.cause;

    const errorStatus = error.response?.status || 0;
    this.setErrorName(errorStatus);
  }

  setErrorName = (status: number) => {
    if (status === HTTP_STATUS.INVALID_USER) {
      this.name = "InvalidUserError";
    }

    if (status === HTTP_STATUS.NOT_FOUND) {
      this.name = "NotFoundError";
    }

    if (status === HTTP_STATUS.INTERNAL_SERVER) {
      this.name = "InternalServerError";
    }

    if (status > HTTP_STATUS.INTERNAL_SERVER) {
      this.name = "OtherServerError";
    }

    console.warn("에러 발생 !!");
    console.warn(this.name);
  };
}
