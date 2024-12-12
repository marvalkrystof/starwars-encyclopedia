import {
  Film,
  Person,
  Planet,
  Species,
  Starship,
  Vehicle,
} from "../types/types";
import ItemAttribute from "./ItemAttribute";
import ItemList from "./ItemList";
import Item from "./Item";
import DataCard from "./DataCard";
import DataPage from "./DataPage";
import {
  Theaters,
  RocketLaunch,
  Adb,
  Commute,
  Person as PersonIcon,
} from "@mui/icons-material";

const DataPagePeople: React.FC = () => {
  return (
    <DataPage
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
              <ItemAttribute
                key={homeworld.url}
                label={label}
                data={homeworld.name}
              />
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
              <ItemAttribute key={film.url} data={film.title} />
            )}
          />
          <ItemList
            dataUrls={person.starships}
            icon={RocketLaunch}
            label="Starships"
            renderItem={(starship: Starship) => (
              <ItemAttribute key={starship.url} data={starship.name} />
            )}
          />
          <ItemList
            dataUrls={person.species}
            icon={Adb}
            label="Species"
            renderItem={(species: Species) => (
              <ItemAttribute key={species.url} data={species.name} />
            )}
          />
          <ItemList
            dataUrls={person.vehicles}
            icon={Commute}
            label="Vehicles"
            renderItem={(vehicle: Vehicle) => (
              <ItemAttribute key={vehicle.url} data={vehicle.name} />
            )}
          />
        </DataCard>
      )}
    />
  );
};

export default DataPagePeople;
