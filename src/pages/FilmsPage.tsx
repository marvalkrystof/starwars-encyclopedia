import { Film } from "../types/types";
import DataCard from "../components/DataCard";
import DataPage from "../components/DataPage";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getEndpointFromUrl } from "../utils/utils";
import FilmData from "../components/api_data/FilmData";

const FilmsPage = () => {
  const { search_id } = useParams<{ search_id: string }>();

  return (
    <>
      <Helmet>
        <title>Films - SW Encyclopedia</title>
      </Helmet>
      <DataPage
        search_id={search_id}
        endpoint="/films"
        renderItem={(film: Film) => (
          <DataCard
            key={film.url}
            objectEndpoint={getEndpointFromUrl(film.url)}
            label={film.title}
          >
            <FilmData film={film} />
          </DataCard>
        )}
      />
    </>
  );
};

export default FilmsPage;
