import { Box, Typography } from "@mui/material";
import TextCard from "../components/TextCard";

export default function NotFound() {
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
        <Typography variant="h1">404 - Page Not Found</Typography>
      </TextCard>
    </Box>
  );
}
