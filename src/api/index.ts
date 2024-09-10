import axios from "axios";
import { API_KEY } from "~/constants/env";

export const API = axios.create({
  baseURL: "/api",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});
