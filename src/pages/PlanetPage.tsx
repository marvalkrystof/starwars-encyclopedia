import { useParams } from "react-router-dom";
import IndividualDataPage from "../components/IndividualDataPage";
import { Planet } from "../types/types";
import { Helmet } from "react-helmet-async";
import PlanetData from "../components/api_data/PlanetData";

const PlanetPage = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <IndividualDataPage
      endpoint={"/planets/" + id}
      renderItem={(planet: Planet) => {
        return (
          <>
            <Helmet>
              <title>{planet.name} - SW Encyclopedia</title>
            </Helmet>
            <PlanetData planet={planet} />
          </>
        );
      }}
    ></IndividualDataPage>
  );
};

export default PlanetPage;
