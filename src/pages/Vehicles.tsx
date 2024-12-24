import { Film, Person, Planet, Species, Vehicle } from "../types/types";
import ItemAttribute from "../components/ItemAttribute";
import ItemList from "../components/ItemList";
import Item from "../components/Item";
import DataCard from "../components/DataCard";
import DataPage from "../components/DataPage";
import {
  Theaters,
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
        <title>Vehicles - SW Encyclopedia</title>
      </Helmet>
      <DataPage
        search_id={id}
        endpoint="/vehicles"
        renderItem={(vehicle: Vehicle) => (
          <DataCard key={vehicle.url} label={vehicle.name}>
            <ItemAttribute icon={Commute} data={vehicle.name} />
            <ItemAttribute label="Model:" data={vehicle.model} />
            <ItemAttribute label="Manufacturer:" data={vehicle.manufacturer} />
            <ItemAttribute
              label="Cost in credits:"
              data={vehicle.cost_in_credits}
            />
            <ItemAttribute label="Length:" data={vehicle.length} />
            <ItemAttribute
              label="Max atmosphering speed:"
              data={vehicle.max_atmosphering_speed}
            />
            <ItemAttribute label="Crew:" data={vehicle.crew} />
            <ItemAttribute label="Passengers:" data={vehicle.passengers} />
            <ItemAttribute
              label="Cargo capacity:"
              data={vehicle.cargo_capacity}
            />
            <ItemAttribute label="Consumables:" data={vehicle.consumables} />
            <ItemAttribute
              label="Vehicle class:"
              data={vehicle.vehicle_class}
            />
            <ItemList
              dataUrls={vehicle.films}
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
              dataUrls={vehicle.pilots}
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
