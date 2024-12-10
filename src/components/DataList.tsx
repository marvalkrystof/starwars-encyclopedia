import { Box } from "@mui/material";
import { useFetch } from "../hooks/UseFetch";
import { ApiResponse, IndividualBase } from "../types/types";
import DataListItemAttribute from "./DataListItemAttribute";
import Pagination from "./Pagination";
import { useState } from "react";
import { getEndpointFromUrl } from "../utils/apiUtils";
import Loading from "./Loading";

interface Props<T> {
  endpoint: string;
  renderItem: (item: T) => JSX.Element;
}

const DataList = <T extends IndividualBase>({
  endpoint,
  renderItem,
}: Props<T>) => {
  const [localEndpoint, setLocalEndpoint] = useState<string>(endpoint);
  const { data, loading, error } = useFetch<ApiResponse<T>>({
    endpoint: localEndpoint,
  });

  const handleNextPage = () => {
    if (data?.next) {
      setLocalEndpoint(getEndpointFromUrl(data.next));
    }
  };
  const handlePrevPage = () => {
    if (data?.previous) {
      setLocalEndpoint(getEndpointFromUrl(data.previous));
    }
  };

  return (
    <>
      <Box
        sx={{
          paddingTop: 2,
          display: "grid",
          columnGap: 3,
          rowGap: 1,
          width: "100%",
          height: "80vh",
          bgcolor: "background.paper",
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
          <DataListItemAttribute label="Error occurred while fetching data." />
        )}
        {data?.results.map((item) => (item ? renderItem(item) : null))}
      </Box>
      <Pagination
        isPrevDisabled={!data?.previous}
        isNextDisabled={!data?.next}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </>
  );
};

export default DataList;
