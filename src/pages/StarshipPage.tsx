import { useParams } from "react-router-dom";
import IndividualDataPage from "../components/IndividualDataPage";
import { Starship } from "../types/types";
import { Helmet } from "react-helmet-async";
import StarshipData from "../components/api_data/StarshipData";

const StarshipPage = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <IndividualDataPage
      endpoint={"/starships/" + id}
      renderItem={(starship: Starship) => {
        return (
          <>
            <Helmet>
              <title>{starship.name} - SW Encyclopedia</title>
            </Helmet>
            <StarshipData starship={starship} />
          </>
        );
      }}
    ></IndividualDataPage>
  );
};

export default StarshipPage;
