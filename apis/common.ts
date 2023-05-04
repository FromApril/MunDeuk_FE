import { ApiResponse } from "@/interfaces/common";
import client from "./client";

// tests
export const getRemittanceAmount = (): ApiResponse<null> => {
  return client.get("/me");
};

export const postReservation = (payload: unknown): ApiResponse<null> => {
  return client.post("/reservations", payload);
};
