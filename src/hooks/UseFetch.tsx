import { useQueries, useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/ApiClient";

interface UseFetchParams {
  endpoint: string;
  method?: string;
  body?: any;
  enabled?: boolean;
}

export const useFetch = <T,>({
  endpoint,
  method = "GET",
  body,
  enabled = true,
}: UseFetchParams) => {
  const { data, isLoading, error } = useQuery<T, Error>({
    queryKey: [endpoint, method, body],
    queryFn: async () => {
      const response = await apiClient({
        url: endpoint,
        method,
        data: body,
      });
      return response.data;
    },
    enabled,
    retry: 1,
  });

  return {
    data,
    loading: isLoading,
    error: error ? error.message : null,
  };
};

interface UseFetchMultipleParams {
  endpoints: string[];
  method?: string;
  body?: any;
  enabled?: boolean;
}

export const useFetchMultiple = <T,>({
  endpoints,
  method = "GET",
  body,
  enabled = true,
}: UseFetchMultipleParams) => {
  const queries = useQueries({
    queries: endpoints.map((endpoint) => ({
      queryKey: [endpoint, method, body],
      queryFn: async () => {
        const response = await apiClient({
          url: endpoint,
          method,
          data: body,
        });
        return response.data as T;
      },
      enabled,
      retry: 1,
    })),
  });

  // Map the results to a more convenient structure
  const data = queries.map((query) => query.data || null);
  const loading = queries.some((query) => query.isLoading);
  const error = queries.some((query) => query.isError)
    ? queries
        .filter((query) => query.isError)
        .map((query) => query.error?.message || "Error")
    : null;

  return {
    data,
    loading,
    error,
  };
};
