import { Film, Person, Planet, Species as SpeciesType } from "../types/types";
import ItemAttribute from "../components/ItemAttribute";
import ItemList from "../components/ItemList";
import Item from "../components/Item";
import DataCard from "../components/DataCard";
import DataPage from "../components/DataPage";
import { Theaters, Adb, Person as PersonIcon } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import LinkItemAttribute from "../components/LinkItemAttribute";
import { Helmet } from "react-helmet";

const Species = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <Helmet>
        <title>Species - SW Encyclopedia</title>
      </Helmet>
      <DataPage
        search_id={id}
        endpoint="/species"
        renderItem={(species: SpeciesType) => (
          <DataCard key={species.url} label={species.name}>
            <ItemAttribute icon={Adb} data={species.name} />
            <ItemAttribute
              label="Classification:"
              data={species.classification}
            />
            <ItemAttribute label="Designation:" data={species.designation} />
            <ItemAttribute
              label="Average Height:"
              data={species.average_height}
            />
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
                  link={"/planets/" + encodeURIComponent(homeworld.name)}
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
                  link={"/people/" + encodeURIComponent(person.name)}
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

export default Species;
