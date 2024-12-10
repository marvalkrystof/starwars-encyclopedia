import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100vw"
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;
