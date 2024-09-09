import { API_KEY } from "./env";

export const BASE_HEADER = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
  Authorization: `Bearer ${API_KEY}`,
};
