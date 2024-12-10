import { useState } from "react";
import { useFetchMultiple } from "../hooks/UseFetch";
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import DataListItemAttribute from "./DataListItemAttribute";
import { IndividualBase } from "../types/types";
import { getEndpointFromUrl } from "../utils/apiUtils";

type Props<T> = {
  dataUrls: string[];
  label: string;
  renderItem: (item: T) => JSX.Element; // Function to render each item (like Person, Planet, etc.)
};

const DataListItemList = <T extends IndividualBase>({
  dataUrls,
  label,
  renderItem,
}: Props<T>) => {
  const [open, setOpen] = useState<boolean>(false);
  const [fetchData, setFetchData] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
    if (!fetchData) {
      setFetchData(true); // Trigger fetching once the section is expanded
    }
  };

  const { data, loading, error } = useFetchMultiple<T>({
    endpoints: dataUrls.map(getEndpointFromUrl),
    enabled: fetchData,
  });

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={label} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {loading && <DataListItemAttribute label="Loading..." />}
          {error && (
            <DataListItemAttribute label="Error occurred while fetching data." />
          )}
          {data?.length === 0 && !loading && !error && (
            <DataListItemAttribute label={`No ${label.toLowerCase()} found.`} />
          )}
          {data?.map((item) => (item ? renderItem(item) : null))}
        </List>
      </Collapse>
    </>
  );
};

export default DataListItemList;
