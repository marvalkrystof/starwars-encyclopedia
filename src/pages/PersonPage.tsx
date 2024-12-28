import { useParams } from "react-router-dom";
import IndividualDataPage from "../components/IndividualDataPage";
import { Helmet } from "react-helmet-async";
import PersonData from "../components/api_data/PersonData";
import { Person } from "../types/types";

const PersonPage = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <IndividualDataPage
      endpoint={"/people/" + id}
      renderItem={(person: Person) => {
        return (
          <>
            <Helmet>
              <title>{person.name} - SW Encyclopedia</title>
            </Helmet>
            <PersonData person={person} />
          </>
        );
      }}
    ></IndividualDataPage>
  );
};

export default PersonPage;
