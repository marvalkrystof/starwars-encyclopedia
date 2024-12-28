import ItemAttribute from "../ItemAttribute";
import LinkItemAttribute from "../LinkItemAttribute";
import {
  Film,
  Person,
  Planet,
  Species,
  Starship,
  Vehicle,
} from "../../types/types";
import {
  Theaters,
  RocketLaunch,
  Adb,
  Commute,
  Person as PersonIcon,
  Public,
} from "@mui/icons-material";
import { integerToRoman } from "../../utils/utils";
import ItemList from "../ItemList";

interface Props {
  film: Film;
}

const FilmData = ({ film }: Props) => {
  return (
    <>
      <ItemAttribute icon={Theaters} title data={film.title} />

      <ItemAttribute label="Episode:" data={integerToRoman(film.episode_id)} />
      <LinkItemAttribute
        key={"/crawl/" + film.episode_id}
        data="Opening Crawl"
        link={"/crawl/" + film.episode_id}
        openNewTab={true}
      />
      <ItemAttribute label="Director:" data={film.director} />
      <ItemAttribute label="Producer:" data={film.producer} />
      <ItemAttribute label="Release Date:" data={film.release_date} />
      <ItemList
        dataUrls={film.characters}
        icon={PersonIcon}
        label="Characters"
        renderItem={(person: Person) => (
          <LinkItemAttribute
            link={"/people/search/" + encodeURIComponent(person.name)}
            key={person.url}
            data={person.name}
          ></LinkItemAttribute>
        )}
      />
      <ItemList
        dataUrls={film.planets}
        icon={Public}
        label="Planets"
        renderItem={(planet: Planet) => (
          <LinkItemAttribute
            link={"/planets/search/" + encodeURIComponent(planet.name)}
            key={planet.url}
            data={planet.name}
          />
        )}
      />
      <ItemList
        dataUrls={film.starships}
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
        dataUrls={film.vehicles}
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
      <ItemList
        dataUrls={film.species}
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
    </>
  );
};

export default FilmData;
