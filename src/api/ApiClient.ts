import axios, { AxiosInstance } from "axios";

export const apiClient: AxiosInstance = axios.create({
  baseURL: "https://swapi.dev/api",
  headers: {
    "Content-Type": "application/json",
  },
});
