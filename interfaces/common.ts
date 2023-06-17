export type NumberOrString = number | string;

export type Location = {
  latitude: number;
  longitude: number;
};

export type ApiResponse<T> = Promise<{
  status: number;
  data: T;
}>;
