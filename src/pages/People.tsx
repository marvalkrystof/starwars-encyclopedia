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
} from "@mui/icons-material";
import { useParams } from "react-router-dom";
import LinkItemAttribute from "../components/LinkItemAttribute";
import { Helmet } from "react-helmet";

const People = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <Helmet>
        <title>People - SW Encyclopedia</title>
      </Helmet>
      <DataPage
        search_id={id}
        endpoint="/people"
        renderItem={(person: Person) => (
          <DataCard key={person.url} label={person.name}>
            <ItemAttribute icon={PersonIcon} data={person.name} />
            <ItemAttribute label="Gender:" data={person.gender} />
            <ItemAttribute label="Birth year:" data={person.birth_year} />

            <Item
              dataUrl={person.homeworld}
              label="Homeworld:"
              renderItemAttribute={(homeworld: Planet, label: string) => (
                <LinkItemAttribute
                  link={"/planets/" + encodeURIComponent(homeworld.name)}
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
                  link={"/films/" + encodeURIComponent(film.title)}
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
                  link={"/starships/" + encodeURIComponent(starship.name)}
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
                  link={"/species/" + encodeURIComponent(species.name)}
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
                  link={"/vehicles/" + encodeURIComponent(vehicle.name)}
                  key={vehicle.url}
                  data={vehicle.name}
                ></LinkItemAttribute>
              )}
            />
          </DataCard>
        )}
      />
    </>
  );
};

export default People;
