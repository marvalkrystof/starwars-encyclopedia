import { Box, Card, Link, Typography } from "@mui/material";
import { useThemeContext } from "../providers/ThemeContextProvider";
import TextCard from "../components/TextCard";

const Home = () => {
  const { theme } = useThemeContext();

  return (
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
        <Typography variant="body1">
          {"This page is built on top of "}
          <Link color="primary.main" href="https://swapi.dev/">
            swapi.dev
          </Link>
          {" using React, Typescript, and MaterialUI."}
        </Typography>
        <Typography variant="body1">
          Disclaimer: If error occurs while fetching data, please check the API
          status, as that's the most likely cause.
        </Typography>
      </TextCard>
    </Box>
  );
};

export default Home;
