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
  Commute,
  Person as PersonIcon,
  Public,
} from "@mui/icons-material";
import { useParams } from "react-router-dom";
import LinkItemAttribute from "../components/LinkItemAttribute";
import { Helmet } from "react-helmet";

const Planets = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <Helmet>
        <title>Planets - SW Encyclopedia</title>
      </Helmet>
      <DataPage
        search_id={id}
        endpoint="/planets"
        renderItem={(planet: Planet) => (
          <DataCard key={planet.url} label={planet.name}>
            <ItemAttribute icon={Public} data={planet.name} />
            <ItemAttribute
              label="Rotation period:"
              data={planet.rotation_period}
            />
            <ItemAttribute
              label="Orbital period:"
              data={planet.orbital_period}
            />
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
                  link={"/people/" + encodeURIComponent(person.name)}
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
                  link={"/films/" + encodeURIComponent(film.title)}
                  key={film.url}
                  data={film.title}
                ></LinkItemAttribute>
              )}
            />
          </DataCard>
        )}
      />
    </>
  );
};

export default Planets;
