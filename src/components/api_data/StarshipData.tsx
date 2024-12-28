import {
  RocketLaunch,
  Theaters,
  Person as PersonIcon,
} from "@mui/icons-material";
import { Film, Person, Starship } from "../../types/types";
import ItemAttribute from "../ItemAttribute";
import ItemList from "../ItemList";
import LinkItemAttribute from "../LinkItemAttribute";

interface Props {
  starship: Starship;
}

const StarshipData = ({ starship }: Props) => {
  return (
    <>
      <ItemAttribute icon={RocketLaunch} title data={starship.name} />
      <ItemAttribute label="Model:" data={starship.model} />
      <ItemAttribute label="Manufacturer:" data={starship.manufacturer} />
      <ItemAttribute label="Cost in credits:" data={starship.cost_in_credits} />
      <ItemAttribute label="Length:" data={starship.length} />
      <ItemAttribute
        label="Max atmosphering speed:"
        data={starship.max_atmosphering_speed}
      />
      <ItemAttribute label="Crew:" data={starship.crew} />
      <ItemAttribute label="Passengers:" data={starship.passengers} />
      <ItemAttribute label="Cargo capacity:" data={starship.cargo_capacity} />
      <ItemAttribute label="Consumables:" data={starship.consumables} />
      <ItemAttribute
        label="Hyperdrive rating:"
        data={starship.hyperdrive_rating}
      />
      <ItemAttribute label="Starship class:" data={starship.starship_class} />
      <ItemList
        dataUrls={starship.films}
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
        dataUrls={starship.pilots}
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

export default StarshipData;
