import { CustomError } from './domain';

// TODO: use zod
export const convertToCustomError = (error: Error): CustomError => {
  if (
    error.cause &&
    typeof error.cause === 'object' &&
    typeof (error as CustomError).cause?.errorCode === 'number'
  ) {
    return error as CustomError;
  }

  return {
    ...error,
    cause: undefined,
  };
};
