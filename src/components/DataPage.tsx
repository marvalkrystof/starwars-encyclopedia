import { Box, Typography } from "@mui/material";
import { useFetch } from "../hooks/UseFetch";
import { ApiResponse, IndividualBase } from "../types/types";
import ItemAttribute from "./ItemAttribute";
import Pagination from "./Pagination";
import { useState } from "react";
import { getEndpointFromUrl } from "../utils/apiUtils";
import Loading from "./Loading";
import Searchbar from "./Searchbar";

interface Props<T> {
  endpoint: string;
  renderItem: (item: T) => JSX.Element;
}

const DataPage = <T extends IndividualBase>({
  endpoint,
  renderItem,
}: Props<T>) => {
  const [localEndpoint, setLocalEndpoint] = useState<string>(endpoint);

  const { data, loading, error } = useFetch<ApiResponse<T>>({
    endpoint: localEndpoint,
  });

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
  console.log(data?.results);
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <Searchbar onChange={handleSearchChange}></Searchbar>
        <Box
          sx={{
            paddingTop: 2,
            paddingLeft: 3,
            paddingRight: 3,
            display: "grid",
            columnGap: 3,
            rowGap: 1,
            width: "100%",
            height: "80vh",
            bgcolor: "background.default",
            gridTemplateColumns: {
              sm: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(5, 1fr)",
            },
          }}
          component="div"
        >
          {loading && <Loading />}
          {error && (
            <ItemAttribute data="Error occurred while fetching data." />
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
        <Pagination
          isPrevDisabled={!data?.previous}
          isNextDisabled={!data?.next}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          page={page}
        />
      </Box>
    </>
  );
};

export default DataPage;
