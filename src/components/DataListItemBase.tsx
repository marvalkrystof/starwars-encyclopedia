import React, { ReactNode, useState } from "react";
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

interface Props {
  label: string;
  children: JSX.Element[];
}

const DataListItemBase: React.FC<Props> = ({ label, children }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const [fetchData, setFetchData] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
    if (!fetchData) {
      setFetchData(true); // Start the fetch when uncollapsed for the first time. This is to prevent fetching unnecessary data.
    }
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={label} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </>
  );
};

export default DataListItemBase;
