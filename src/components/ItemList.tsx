import { useState } from "react";
import { useFetchMultiple } from "../hooks/UseFetch";
import {
  Collapse,
  Icon,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore, SvgIconComponent } from "@mui/icons-material";
import ItemAttribute from "./ItemAttribute";
import { IndividualBase } from "../types/types";
import { getEndpointFromUrl } from "../utils/apiUtils";

type Props<T> = {
  dataUrls: string[];
  label: string;
  icon?: SvgIconComponent;
  renderItem: (item: T) => JSX.Element; // Function to render each item (like Person, Planet, etc.)
};

const ItemList = <T extends IndividualBase>({
  dataUrls,
  label,
  icon,
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
      <ListItemButton
        onClick={handleClick}
        sx={{
          "&:hover .bounce-icon": {
            animation: "bounce 0.6s infinite",
          },
          "@keyframes bounce": {
            "0%, 100%": {
              transform: "translateY(0)",
            },
            "50%": {
              transform: "translateY(-4px)",
            },
          },
        }}
      >
        {icon && (
          <Icon
            className="bounce-icon"
            sx={{
              transition: "transform 0.3s ease",
            }}
            component={icon}
            fontSize="medium"
          />
        )}
        <Typography sx={{ fontWeight: 900, fontSize: 20 }}>{label}</Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {loading && <ItemAttribute data="Loading..." />}
          {error && (
            <ItemAttribute data="Error occurred while fetching data." />
          )}
          {data?.length === 0 && !loading && !error && (
            <ItemAttribute data={`No ${label.toLowerCase()} found.`} />
          )}
          {data?.map((item) => (item ? renderItem(item) : null))}
        </List>
      </Collapse>
    </>
  );
};

export default ItemList;
