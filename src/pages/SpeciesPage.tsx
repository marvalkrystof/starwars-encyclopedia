import { Species } from "../types/types";
import DataCard from "../components/DataCard";
import DataPage from "../components/DataPage";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getEndpointFromUrl } from "../utils/utils";
import SpecieData from "../components/api_data/SpecieData";

const SpeciesPage = () => {
  const { search_id } = useParams<{ search_id: string }>();

  return (
    <>
      <Helmet>
        <title>Species - SW Encyclopedia</title>
      </Helmet>
      <DataPage
        search_id={search_id}
        endpoint="/species"
        renderItem={(species: Species) => (
          <DataCard
            objectEndpoint={getEndpointFromUrl(species.url)}
            key={species.url}
            label={species.name}
          >
            <SpecieData species={species} />
          </DataCard>
        )}
      />
    </>
  );
};

export default SpeciesPage;
