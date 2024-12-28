import ItemAttribute from "../ItemAttribute";
import ItemList from "../ItemList";
import { Film, Person, Planet } from "../../types/types";
import { Public, Person as PersonIcon, Theaters } from "@mui/icons-material";
import LinkItemAttribute from "../LinkItemAttribute";

interface Props {
  planet: Planet;
}

const PlanetData = ({ planet }: Props) => {
  return (
    <>
      <ItemAttribute icon={Public} title data={planet.name} />
      <ItemAttribute label="Rotation period:" data={planet.rotation_period} />
      <ItemAttribute label="Orbital period:" data={planet.orbital_period} />
      <ItemAttribute label="Diameter:" data={planet.diameter} />
      <ItemAttribute label="Climate:" data={planet.climate} />
      <ItemAttribute label="Gravity:" data={planet.gravity} />
      <ItemAttribute label="Terrain:" data={planet.terrain} />
      <ItemAttribute label="Surface water:" data={planet.surface_water} />
      <ItemAttribute label="Population:" data={planet.population} />
      <ItemList
        dataUrls={planet.residents}
        icon={PersonIcon}
        label="Residents"
        renderItem={(person: Person) => (
          <LinkItemAttribute
            link={"/people/search/" + encodeURIComponent(person.name)}
            key={person.url}
            data={person.name}
          ></LinkItemAttribute>
        )}
      />
      <ItemList
        dataUrls={planet.films}
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
    </>
  );
};

export default PlanetData;
