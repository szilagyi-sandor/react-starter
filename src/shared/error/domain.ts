import { z } from 'zod';

export const customErrorCauseSchema = z.object({
  errorCode: z.number().nonnegative().finite(),
});

type CustomErrorCause = z.infer<typeof customErrorCauseSchema>;

export type CustomError = Error & {
  cause?: CustomErrorCause;
};
