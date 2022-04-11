import { AxiosError } from 'axios';

type SampleErrorData = {
  message: {
    id: string;
    message: string;
  }[];
}[];

export type SampleError = AxiosError<{
  statusCode: number;
  error: string;
  message: SampleErrorData;
  data: SampleErrorData;
}>;
