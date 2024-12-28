import { Vehicle } from "../types/types";
import DataCard from "../components/DataCard";
import DataPage from "../components/DataPage";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getEndpointFromUrl } from "../utils/utils";
import VehicleData from "../components/api_data/VehicleData";

const VehiclesPage = () => {
  const { search_id } = useParams<{ search_id: string }>();

  return (
    <>
      <Helmet>
        <title>Vehicles - SW Encyclopedia</title>
      </Helmet>
      <DataPage
        search_id={search_id}
        endpoint="/vehicles"
        renderItem={(vehicle: Vehicle) => (
          <DataCard
            objectEndpoint={getEndpointFromUrl(vehicle.url)}
            key={vehicle.url}
            label={vehicle.name}
          >
            <VehicleData vehicle={vehicle} />
          </DataCard>
        )}
      />
    </>
  );
};

export default VehiclesPage;
