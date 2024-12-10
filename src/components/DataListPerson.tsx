import {
  Film,
  Person,
  Planet,
  Species,
  Starship,
  Vehicle,
} from "../types/types";
import DataListItemAttribute from "./DataListItemAttribute";
import DataListItemList from "./DataListItemList";
import DataListItem from "./DataListItem";
import DataListItemBase from "./DataListItemBase";
import DataList from "./DataList";

const DataListPeople: React.FC = () => {
  return (
    <DataList
      endpoint="/people"
      renderItem={(person: Person) => (
        <DataListItemBase key={person.url} label={person.name}>
          <DataListItemAttribute label="Name:" data={person.name} />
          <DataListItemAttribute label="Gender:" data={person.gender} />
          <DataListItemAttribute label="Birth year:" data={person.birth_year} />

          <DataListItem
            dataUrl={person.homeworld}
            label="Homeworld:"
            renderItemAttribute={(homeworld: Planet, label: string) => (
              <DataListItemAttribute
                key={homeworld.url}
                label={label}
                data={homeworld.name}
              />
            )}
          />
          <DataListItemAttribute label="Height:" data={person.height} />
          <DataListItemAttribute label="Weight:" data={person.mass} />
          <DataListItemAttribute label="Hair Color:" data={person.hair_color} />
          <DataListItemAttribute label="Skin Color:" data={person.skin_color} />
          <DataListItemAttribute label="Eye Color:" data={person.eye_color} />
          <DataListItemList
            dataUrls={person.films}
            label="Films"
            renderItem={(film: Film) => (
              <DataListItemAttribute key={film.url} label={film.title} />
            )}
          />
          <DataListItemList
            dataUrls={person.starships}
            label="Starships"
            renderItem={(starship: Starship) => (
              <DataListItemAttribute key={starship.url} label={starship.name} />
            )}
          />
          <DataListItemList
            dataUrls={person.species}
            label="Species"
            renderItem={(species: Species) => (
              <DataListItemAttribute key={species.url} label={species.name} />
            )}
          />
          <DataListItemList
            dataUrls={person.vehicles}
            label="Vehicles"
            renderItem={(vehicle: Vehicle) => (
              <DataListItemAttribute key={vehicle.url} label={vehicle.name} />
            )}
          />
        </DataListItemBase>
      )}
    />
  );
};

export default DataListPeople;
