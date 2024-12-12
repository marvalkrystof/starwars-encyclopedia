import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
  return (
    <Box
      marginBlock={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={2}
    >
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        onClick={handlePrevPage}
        disabled={isPrevDisabled}
      >
        Previous
      </Button>
      <Typography variant="h6">{page}</Typography>
      <Button
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
