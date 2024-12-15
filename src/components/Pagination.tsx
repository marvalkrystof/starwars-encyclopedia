import { Button, Box, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useThemeContext } from "../providers/ThemeContextProvider";

interface Props {
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  page: number;
}

function Pagination({
  handleNextPage,
  handlePrevPage,
  isNextDisabled,
  isPrevDisabled,
  page,
}: Props) {
  const { theme } = useThemeContext();
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      gap={2}
      sx={{
        borderRadius: 3,
        paddingBlock: 3,
        paddingInline: 3,
        boxShadow: `0px 7px 17px ${theme.palette.primary.main}`,
      }}
    >
      <Button
        sx={{ flex: 1 }}
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        onClick={handlePrevPage}
        disabled={isPrevDisabled}
      >
        Previous
      </Button>
      <Typography sx={{ flex: 1, textAlign: "center" }} variant="h6">
        {page}
      </Typography>
      <Button
        sx={{ flex: 1 }}
        variant="outlined"
        endIcon={<ArrowForwardIcon />}
        onClick={handleNextPage}
        disabled={isNextDisabled}
      >
        Next
      </Button>
    </Box>
  );
}

export default Pagination;
