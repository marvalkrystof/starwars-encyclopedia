import { Film, Person, Planet, Species } from "../../types/types";
import ItemAttribute from "../ItemAttribute";
import Item from "../Item";
import LinkItemAttribute from "../LinkItemAttribute";
import ItemList from "../ItemList";
import { Theaters, Adb, Person as PersonIcon } from "@mui/icons-material";

interface Props {
  species: Species;
}

const SpecieData = ({ species }: Props) => {
  return (
    <>
      <ItemAttribute icon={Adb} title data={species.name} />
      <ItemAttribute label="Classification:" data={species.classification} />
      <ItemAttribute label="Designation:" data={species.designation} />
      <ItemAttribute label="Average Height:" data={species.average_height} />
      <ItemAttribute label="Skin Colors:" data={species.skin_colors} />
      <ItemAttribute label="Hair Colors:" data={species.hair_colors} />
      <ItemAttribute label="Eye Colors:" data={species.eye_colors} />
      <ItemAttribute
        label="Average Lifespan:"
        data={species.average_lifespan}
      />
      <Item
        dataUrl={species.homeworld}
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
      <ItemAttribute label="Language:" data={species.language} />
      <ItemList
        dataUrls={species.people}
        icon={PersonIcon}
        label="People"
        renderItem={(person: Person) => (
          <LinkItemAttribute
            link={"/people/search/" + encodeURIComponent(person.name)}
            key={person.url}
            data={person.name}
          ></LinkItemAttribute>
        )}
      />
      <ItemList
        dataUrls={species.films}
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

export default SpecieData;
