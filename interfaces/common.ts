export type NumberOrString = number | string;

export type Location = {
  latitude: string;
  longitude: string;
};

export type ApiResponse<T> = Promise<{
  status: number;
  data: T;
}>;
