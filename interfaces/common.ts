export type NumberOrString = number | string;

export type Location = {
  latitude: number;
  longitude: number;
};

export type ApiResponse<T> = Promise<{
  success: boolean;
  data: T;
  msg: string | null;
}>;

export type ApiError = Promise<{
  message: string;
  name: string;
  stack: string;
  status: number;
}>;
