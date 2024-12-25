import axios, { AxiosInstance } from "axios";

export const apiClient: AxiosInstance = axios.create({
  baseURL: "https://swapi.py4e.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});
