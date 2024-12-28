import { Box, Typography, Link as MUILink } from "@mui/material";
import TextCard from "../components/TextCard";
import { Helmet } from "react-helmet-async";
const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home - SW Encyclopedia</title>
      </Helmet>
      <Box
        display="flex"
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <TextCard>
          <Typography variant="h1">
            Welcome to the STARWARS Encyclopedia!
          </Typography>
          <Typography variant="h6" sx={{ marginTop: 1 }}>
            {"This page is built on top of "}
            <MUILink color="primary.main" href="https://swapi.py4e.com/">
              swapi
            </MUILink>
            {" using React, Typescript, and MaterialUI."}
          </Typography>
          <Typography variant="h6">
            Disclaimer: If error occurs while fetching data, please check the
            API status, as that's the most likely cause.
          </Typography>
        </TextCard>
      </Box>
    </>
  );
};

export default HomePage;
