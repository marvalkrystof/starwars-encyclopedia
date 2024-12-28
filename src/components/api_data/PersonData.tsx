import {
  Theaters,
  Person as PersonIcon,
  RocketLaunch,
  Adb,
  Commute,
} from "@mui/icons-material";
import {
  Film,
  Person,
  Planet,
  Species,
  Starship,
  Vehicle,
} from "../../types/types";
import Item from "../Item";
import ItemAttribute from "../ItemAttribute";
import ItemList from "../ItemList";
import LinkItemAttribute from "../LinkItemAttribute";

interface Props {
  person: Person;
}
const PersonData = ({ person }: Props) => {
  return (
    <>
      <ItemAttribute icon={PersonIcon} title data={person.name} />
      <ItemAttribute label="Gender:" data={person.gender} />
      <ItemAttribute label="Birth year:" data={person.birth_year} />

      <Item
        dataUrl={person.homeworld}
        label="Homeworld:"
        renderItemAttribute={(homeworld: Planet, label: string) => (
          <LinkItemAttribute
            link={"/planets/search/" + encodeURIComponent(homeworld.name)}
            key={homeworld.url}
            label={label}
            data={homeworld.name}
          ></LinkItemAttribute>
        )}
      />
      <ItemAttribute label="Height:" data={person.height} />
      <ItemAttribute label="Weight:" data={person.mass} />
      <ItemAttribute label="Hair Color:" data={person.hair_color} />
      <ItemAttribute label="Skin Color:" data={person.skin_color} />
      <ItemAttribute label="Eye Color:" data={person.eye_color} />
      <ItemList
        dataUrls={person.films}
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
        dataUrls={person.starships}
        icon={RocketLaunch}
        label="Starships"
        renderItem={(starship: Starship) => (
          <LinkItemAttribute
            link={"/starships/search/" + encodeURIComponent(starship.name)}
            key={starship.url}
            data={starship.name}
          ></LinkItemAttribute>
        )}
      />
      <ItemList
        dataUrls={person.species}
        icon={Adb}
        label="Species"
        renderItem={(species: Species) => (
          <LinkItemAttribute
            link={"/species/search/" + encodeURIComponent(species.name)}
            key={species.url}
            data={species.name}
          ></LinkItemAttribute>
        )}
      />
      <ItemList
        dataUrls={person.vehicles}
        icon={Commute}
        label="Vehicles"
        renderItem={(vehicle: Vehicle) => (
          <LinkItemAttribute
            link={"/vehicles/search/" + encodeURIComponent(vehicle.name)}
            key={vehicle.url}
            data={vehicle.name}
          ></LinkItemAttribute>
        )}
      />
    </>
  );
};

export default PersonData;
