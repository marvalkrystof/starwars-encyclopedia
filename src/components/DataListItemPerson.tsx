import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import { useState } from "react";
import { Person, Planet } from "../types/Types";
import DataListItemAttribute from "./DataListItemAttribute";
import {useFetch} from "../hooks/UseFetch";
import { getEndpointFromUrl } from "../utils/apiUtils";
import DataListItemFilms from "./DataListItemFIlms";

const DataListItemPerson: React.FC<Person> = ({
  name,
  height,
  mass,
  hair_color,
  skin_color,
  eye_color,
  birth_year,
  gender,
  homeworld,
  films,
  species,
  vehicles,
  starships,
}: Person) => {
  const [open, setOpen] = useState<boolean>(false);

  const [fetchHomeworld, setFetchHomeworld] = useState<boolean>(false);
  const { data, loading, error } = useFetch<Planet>({
    endpoint: getEndpointFromUrl(homeworld),
    enabled: fetchHomeworld,
  });

  const handleClick = () => {
    setOpen(!open);
    if (!fetchHomeworld) {
      setFetchHomeworld(true); // Start the fetch when uncollapsed for the first time. This is to prevent fetching unnecessary data.
    }
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <DataListItemAttribute label="Gender:" data={gender} />
          <DataListItemAttribute label="Birth year:" data={birth_year} />
          {loading && (
            <DataListItemAttribute label="Homeworld:" data="Loading..." />
          )}
          {error && (
            <DataListItemAttribute
              label="Error occured while loading homeworld:"/>
          )}
          {data && (
            <DataListItemAttribute label="Homeworld:" data={data.name} />
          )}
          <DataListItemAttribute label="Height:" data={height} />
          <DataListItemAttribute label="Weight:" data={mass} />
          <DataListItemAttribute label="Hair Color:" data={hair_color} />
          <DataListItemAttribute label="Skin Color:" data={skin_color} />
          <DataListItemAttribute label="Eye Color:" data={eye_color} />
          <DataListItemFilms filmUrls={films}/>
        </List>
      </Collapse>
    </>
  );
};

export default DataListItemPerson;
