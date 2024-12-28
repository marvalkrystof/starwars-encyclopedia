import { Commute, Theaters, Person as PersonIcon } from "@mui/icons-material";
import { Film, Person, Vehicle } from "../../types/types";
import ItemAttribute from "../ItemAttribute";
import ItemList from "../ItemList";
import LinkItemAttribute from "../LinkItemAttribute";

interface Props {
  vehicle: Vehicle;
}
const VehicleData = ({ vehicle }: Props) => {
  return (
    <>
      <ItemAttribute icon={Commute} title data={vehicle.name} />
      <ItemAttribute label="Model:" data={vehicle.model} />
      <ItemAttribute label="Manufacturer:" data={vehicle.manufacturer} />
      <ItemAttribute label="Cost in credits:" data={vehicle.cost_in_credits} />
      <ItemAttribute label="Length:" data={vehicle.length} />
      <ItemAttribute
        label="Max atmosphering speed:"
        data={vehicle.max_atmosphering_speed}
      />
      <ItemAttribute label="Crew:" data={vehicle.crew} />
      <ItemAttribute label="Passengers:" data={vehicle.passengers} />
      <ItemAttribute label="Cargo capacity:" data={vehicle.cargo_capacity} />
      <ItemAttribute label="Consumables:" data={vehicle.consumables} />
      <ItemAttribute label="Vehicle class:" data={vehicle.vehicle_class} />
      <ItemList
        dataUrls={vehicle.films}
        icon={Theaters}
        label="Films"
        renderItem={(film: Film) => (
          <LinkItemAttribute
            link={"/films/search/" + encodeURIComponent(film.title)}
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
            link={"/people/search/" + encodeURIComponent(person.name)}
            key={person.url}
            data={person.name}
          ></LinkItemAttribute>
        )}
      />
    </>
  );
};

export default VehicleData;
