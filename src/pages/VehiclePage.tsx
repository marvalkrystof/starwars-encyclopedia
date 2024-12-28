import { useParams } from "react-router-dom";
import IndividualDataPage from "../components/IndividualDataPage";
import { Vehicle } from "../types/types";
import { Helmet } from "react-helmet-async";
import VehicleData from "../components/api_data/VehicleData";

const VehiclePage = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <IndividualDataPage
      endpoint={"/vehicles/" + id}
      renderItem={(vehicle: Vehicle) => {
        return (
          <>
            <Helmet>
              <title>{vehicle.name} - SW Encyclopedia</title>
            </Helmet>
            <VehicleData vehicle={vehicle} />
          </>
        );
      }}
    ></IndividualDataPage>
  );
};

export default VehiclePage;
