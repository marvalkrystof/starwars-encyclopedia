import { Box, Typography } from "@mui/material";
import DataListPeople from "../components/DataListPerson";

const People = () => {
  return (
    <>
      <Box>
        <Typography variant="h6" component="p">
          This page lists data about people from Star Wars.
        </Typography>
      </Box>

      <DataListPeople></DataListPeople>
    </>
  );
};

export default People;
