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
import DataCard from "../components/DataCard";
import DataPage from "../components/DataPage";
import {
  Theaters,
  RocketLaunch,
  Adb,
  Commute,
  Person as PersonIcon,
  Public,
} from "@mui/icons-material";
import { useParams } from "react-router-dom";
import LinkItemAttribute from "../components/LinkItemAttribute";
import { Helmet } from "react-helmet";

const Films = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <Helmet>
        <title>Films - SW Encyclopedia</title>
      </Helmet>
      <DataPage
        search_id={id}
        endpoint="/films"
        renderItem={(film: Film) => (
          <DataCard key={film.url} label={film.title}>
            <ItemAttribute icon={Theaters} data={film.title} />
            <ItemAttribute label="Episode:" data={film.episode_id} />
            <ItemAttribute label="Director:" data={film.director} />
            <ItemAttribute label="Producer:" data={film.producer} />
            <ItemAttribute label="Release Date:" data={film.release_date} />
            <ItemList
              dataUrls={film.characters}
              icon={PersonIcon}
              label="Characters"
              renderItem={(person: Person) => (
                <LinkItemAttribute
                  link={"/people/" + encodeURIComponent(person.name)}
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
                  link={"/planets/" + encodeURIComponent(planet.name)}
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
                  link={"/starships/" + encodeURIComponent(starship.name)}
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
                  link={"/vehicles/" + encodeURIComponent(vehicle.name)}
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
                  link={"/species/" + encodeURIComponent(species.name)}
                  key={species.url}
                  data={species.name}
                ></LinkItemAttribute>
              )}
            />
          </DataCard>
        )}
      />
    </>
  );
};

export default Films;
