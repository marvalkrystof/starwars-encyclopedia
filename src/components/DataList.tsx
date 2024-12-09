import { List } from "@mui/material";
import { useFetch } from "../hooks/UseFetch";
import { ApiResponse, IndividualBase } from "../types/types";
import DataListItemAttribute from "./DataListItemAttribute";

interface Props<T> {
  endpoint: string;
  renderItem: (item: T) => JSX.Element;
}

const DataList = <T extends IndividualBase>({
  endpoint,
  renderItem,
}: Props<T>) => {
  const { data, loading, error } = useFetch<ApiResponse<T>>({ endpoint });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }} component="div">
      {loading && <DataListItemAttribute label="Loading..." />}
      {error && (
        <DataListItemAttribute label="Error occurred while fetching data." />
      )}
      {data?.results.map((item) => (item ? renderItem(item) : null))}
    </List>
  );
};

export default DataList;
