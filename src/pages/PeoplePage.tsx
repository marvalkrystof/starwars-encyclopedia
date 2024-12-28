import { Person } from "../types/types";
import DataCard from "../components/DataCard";
import DataPage from "../components/DataPage";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getEndpointFromUrl } from "../utils/utils";
import PersonData from "../components/api_data/PersonData";

const PeoplePage = () => {
  const { search_id } = useParams<{ search_id: string }>();

  return (
    <>
      <Helmet>
        <title>People - SW Encyclopedia</title>
      </Helmet>
      <DataPage
        search_id={search_id}
        endpoint="/people"
        renderItem={(person: Person) => (
          <DataCard
            objectEndpoint={getEndpointFromUrl(person.url)}
            key={person.url}
            label={person.name}
          >
            <PersonData person={person} />
          </DataCard>
        )}
      />
    </>
  );
};

export default PeoplePage;
