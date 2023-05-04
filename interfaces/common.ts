export type NumberOrString = number | string;

export type ApiResponse<T> = Promise<{
  status: number;
  data: T;
}>;
