export type CustomError = Error & {
  cause?: {
    errorCode: number;
  };
};
