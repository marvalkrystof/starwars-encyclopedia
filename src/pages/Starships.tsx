import {
  Film,
  Person,
  Planet,
  Species,
  Starship,
  Vehicle,
} from "../types/types";
import ItemAttribute from "../components/ItemAttribute";
import ItemList from "../components/ItemList";
import Item from "../components/Item";
import DataCard from "../components/DataCard";
import DataPage from "../components/DataPage";
import {
  Theaters,
  RocketLaunch,
  Adb,
  Person as PersonIcon,
  Commute,
} from "@mui/icons-material";
import { useParams } from "react-router-dom";
import LinkItemAttribute from "../components/LinkItemAttribute";
import { Helmet } from "react-helmet";

const Vehicles = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <Helmet>
        <title>Starships - SW Encyclopedia</title>
      </Helmet>
      <DataPage
        search_id={id}
        endpoint="/starships"
        renderItem={(starship: Starship) => (
          <DataCard key={starship.url} label={starship.name}>
            <ItemAttribute icon={RocketLaunch} data={starship.name} />
            <ItemAttribute label="Model:" data={starship.model} />
            <ItemAttribute label="Manufacturer:" data={starship.manufacturer} />
            <ItemAttribute
              label="Cost in credits:"
              data={starship.cost_in_credits}
            />
            <ItemAttribute label="Length:" data={starship.length} />
            <ItemAttribute
              label="Max atmosphering speed:"
              data={starship.max_atmosphering_speed}
            />
            <ItemAttribute label="Crew:" data={starship.crew} />
            <ItemAttribute label="Passengers:" data={starship.passengers} />
            <ItemAttribute
              label="Cargo capacity:"
              data={starship.cargo_capacity}
            />
            <ItemAttribute label="Consumables:" data={starship.consumables} />
            <ItemAttribute
              label="Hyperdrive rating:"
              data={starship.hyperdrive_rating}
            />
            <ItemAttribute
              label="Starship class:"
              data={starship.starship_class}
            />
            <ItemList
              dataUrls={starship.films}
              icon={Theaters}
              label="Films"
              renderItem={(film: Film) => (
                <LinkItemAttribute
                  link={"/films/" + encodeURIComponent(film.title)}
                  key={film.url}
                  data={film.title}
                ></LinkItemAttribute>
              )}
            />
            <ItemList
              dataUrls={starship.pilots}
              icon={PersonIcon}
              label="Pilots"
              renderItem={(person: Person) => (
                <LinkItemAttribute
                  link={"/people/" + encodeURIComponent(person.name)}
                  key={person.url}
                  data={person.name}
                ></LinkItemAttribute>
              )}
            />
          </DataCard>
        )}
      />
    </>
  );
};

export default Vehicles;
