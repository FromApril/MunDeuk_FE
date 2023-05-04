import dayjs, { Dayjs } from "dayjs";

export const getDday = (finishAt: string) => {
  return dayjs(finishAt).diff(new Date(), "day");
};

export const getDateByFormat = (
  date: Dayjs | Date | string,
  format?: string
) => {
  return dayjs(date).format(format || "YYYY.MM.DD");
};
