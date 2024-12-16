import { Box, Typography } from "@mui/material";
import TextCard from "../components/TextCard";
import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 Not Found - SW Encyclopedia</title>
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
          <Typography variant="h1">404 - Page Not Found</Typography>
        </TextCard>
      </Box>
    </>
  );
}
