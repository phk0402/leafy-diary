import axios from "axios";
import { API_BASE_URL } from "~/constants/env";
import { BASE_HEADER } from "~/constants/config";

export const API = axios.create({
  baseURL: API_BASE_URL,
  headers: BASE_HEADER,
});
