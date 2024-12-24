import { Box, CircularProgress, Typography } from "@mui/material";
import { useFetch } from "../hooks/UseFetch";
import { ApiResponse, IndividualBase } from "../types/types";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import { getEndpointFromUrl } from "../utils/apiUtils";
import Searchbar from "./Searchbar";
import TextCard from "./TextCard";

interface Props<T> {
  endpoint: string;
  renderItem: (item: T) => JSX.Element;
  search_id: string | undefined;
}

const DataPage = <T extends IndividualBase>({
  endpoint,
  renderItem,
  search_id,
}: Props<T>) => {
  const [localEndpoint, setLocalEndpoint] = useState<string>(endpoint);

  const { data, loading, error } = useFetch<ApiResponse<T>>({
    endpoint: localEndpoint,
  });

  const decoded_search_id = decodeURIComponent(search_id || "");

  const [page, setPage] = useState<number>(1);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      setLocalEndpoint(endpoint);
    } else {
      setLocalEndpoint(`${endpoint}/?search=${event.target.value}`);
    }
  };

  const handleNextPage = () => {
    if (data?.next) {
      setLocalEndpoint(getEndpointFromUrl(data.next));
      setPage(page + 1);
    }
  };
  const handlePrevPage = () => {
    if (data?.previous) {
      setLocalEndpoint(getEndpointFromUrl(data.previous));
      setPage(page - 1);
    }
  };
  useEffect(() => {
    if (search_id) {
      setLocalEndpoint(`${endpoint}/?search=${decoded_search_id}`);
    }
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginTop: 1,
        padding: 2,
        minHeight: "90vh",
        rowGap: 5,
      }}
    >
      <Box sx={{ width: "20%", minWidth: 400 }}>
        <Searchbar
          onChange={handleSearchChange}
          defaultValue={decoded_search_id}
        ></Searchbar>
      </Box>
      <Box
        sx={{
          display: "grid",
          columnGap: 3,
          rowGap: 1,
          minHeight: "70vh",
          width: "100%",
          bgcolor: "background.default",
          gridTemplateColumns: {
            sm: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(5, 1fr)",
          },
        }}
        component="div"
      >
        {loading && (
          <Box
            sx={{
              gridColumn: "1/-1",
              gridRow: "1/-1",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        )}
        {error && (
          <Box
            sx={{
              gridColumn: "1/-1",
              gridRow: "1/-1",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextCard>
              <Typography variant="h3">
                Error occurred while fetching data.
              </Typography>
            </TextCard>
          </Box>
        )}
        {Array.isArray(data?.results) && data?.results.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100vw",
            }}
          >
            <Typography variant="h6">No data found</Typography>
          </Box>
        ) : (
          data?.results.map((item) => (item ? renderItem(item) : null))
        )}
      </Box>
      <Box sx={{ width: "15%", minWidth: 400 }}>
        <Pagination
          isPrevDisabled={!data?.previous}
          isNextDisabled={!data?.next}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          page={page}
        />
      </Box>
    </Box>
  );
};

export default DataPage;
