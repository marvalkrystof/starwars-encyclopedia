import { useParams } from "react-router-dom";
import FilmData from "../components/api_data/FilmData";
import IndividualDataPage from "../components/IndividualDataPage";
import { Film } from "../types/types";
import { Helmet } from "react-helmet-async";
const FilmPage = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <IndividualDataPage
      endpoint={"/films/" + id}
      renderItem={(film: Film) => {
        return (
          <>
            <Helmet>
              <title>{film.title} - SW Encyclopedia</title>
            </Helmet>
            <FilmData film={film} />
          </>
        );
      }}
    ></IndividualDataPage>
  );
};

export default FilmPage;
