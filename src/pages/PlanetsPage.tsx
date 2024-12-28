import { Planet } from "../types/types";
import DataCard from "../components/DataCard";
import DataPage from "../components/DataPage";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getEndpointFromUrl } from "../utils/utils";
import PlanetData from "../components/api_data/PlanetData";

const PlanetsPage = () => {
  const { search_id } = useParams<{ search_id: string }>();

  return (
    <>
      <Helmet>
        <title>Planets - SW Encyclopedia</title>
      </Helmet>
      <DataPage
        search_id={search_id}
        endpoint="/planets"
        renderItem={(planet: Planet) => (
          <DataCard
            objectEndpoint={getEndpointFromUrl(planet.url)}
            key={planet.url}
            label={planet.name}
          >
            <PlanetData planet={planet} />
          </DataCard>
        )}
      />
    </>
  );
};

export default PlanetsPage;
