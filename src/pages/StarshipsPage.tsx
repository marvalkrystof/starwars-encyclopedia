import { Starship } from "../types/types";
import DataCard from "../components/DataCard";
import DataPage from "../components/DataPage";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getEndpointFromUrl } from "../utils/utils";
import StarshipData from "../components/api_data/StarshipData";

const StarshipsPage = () => {
  const { search_id } = useParams<{ search_id: string }>();

  return (
    <>
      <Helmet>
        <title>Starships - SW Encyclopedia</title>
      </Helmet>
      <DataPage
        search_id={search_id}
        endpoint="/starships"
        renderItem={(starship: Starship) => (
          <DataCard
            objectEndpoint={getEndpointFromUrl(starship.url)}
            key={starship.url}
            label={starship.name}
          >
            <StarshipData starship={starship} />
          </DataCard>
        )}
      />
    </>
  );
};

export default StarshipsPage;
