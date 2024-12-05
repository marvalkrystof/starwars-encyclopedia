import {
  List
} from "@mui/material";
import {useFetch} from "../hooks/UseFetch";
import { ApiResponse, Person } from "../types/Types";
import DataListItemPerson from "./DataListItemPerson";

const DataList: React.FC = () => {
  const { data, loading, error } = useFetch<ApiResponse>({endpoint : "/people"});


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      component="div"
    >

      {data?.results.map((person  ) => (
        
        <DataListItemPerson key={person.url} {...person}></DataListItemPerson>
        
      ))}
      
    </List>
  );
};

export default DataList;
