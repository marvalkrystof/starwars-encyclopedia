import { Box, Typography } from "@mui/material";
import DataList from "../components/DataList";

interface Props {

}


const People = (props : Props) => {
    return (
    <>
    <Box>
        <Typography variant="h6" component="p">This page lists data about people from Star Wars.</Typography>
    </Box>
    
    
    <DataList></DataList>

    </>
);
  }



export default People;