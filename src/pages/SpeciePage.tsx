import { Helmet } from "react-helmet-async";
import IndividualDataPage from "../components/IndividualDataPage";
import { Species } from "../types/types";
import { useParams } from "react-router-dom";
import SpecieData from "../components/api_data/SpecieData";

const SpeciePage = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <IndividualDataPage
      endpoint={"/species/" + id}
      renderItem={(specie: Species) => {
        return (
          <>
            <Helmet>
              <title>{specie.name} - SW Encyclopedia</title>
            </Helmet>
            <SpecieData species={specie} />
          </>
        );
      }}
    ></IndividualDataPage>
  );
};

export default SpeciePage;
