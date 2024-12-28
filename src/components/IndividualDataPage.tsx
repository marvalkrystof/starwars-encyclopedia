import { Box, CircularProgress, Typography } from "@mui/material";
import { useFetch } from "../hooks/UseFetch";
import { IndividualBase } from "../types/types";
import TextCard from "./TextCard";

interface Props<T> {
  endpoint: string;
  renderItem: (item: T) => JSX.Element;
}

const IndividualDataPage = <T extends IndividualBase>({
  endpoint,
  renderItem,
}: Props<T>) => {
  const { data, loading, error } = useFetch<T>({
    endpoint: endpoint,
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        marginTop: 1,
        padding: 2,
        minHeight: "90vh",
      }}
    >
      {loading && (
        <Box
          sx={{
            width: "100%",
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
            width: "100%",
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
      {data ? renderItem(data) : null}
    </Box>
  );
};

export default IndividualDataPage;
