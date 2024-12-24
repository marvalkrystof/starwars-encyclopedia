import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

// Styled component for the crawl container
const CrawlContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "black",
  overflow: "hidden",
  perspective: "400px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
}));

const CrawlText = styled(Typography)(({ theme }) => ({
  color: "#FFC107",
  fontFamily: '"Pathway Gothic One", sans-serif',
  fontSize: "6rem",
  textAlign: "center",
  whiteSpace: "pre-line", // Preserve original text formatting
  width: "200%",
  position: "absolute",
  transform: "rotateX(45deg) translateY(50%) translateZ(1500px)", // Added translateZ for Z-axis adjustment
  transformOrigin: "center bottom",
  animation: "crawl 60s linear",
  animationFillMode: "forwards",
  lineHeight: 1.5,
  "@keyframes crawl": {
    "0%": {
      top: "60%",
      opacity: 1,
      transform: "rotateX(45deg) translateY(50%) translateZ(1500px)", // Start closer on Z-axis
    },
    "100%": {
      top: "-180%",
      opacity: 0,
      transform: "rotateX(45deg) translateY(-100%) translateZ(1300px)", // Move farther back
    },
  },
}));

// Styled component for the episode label
const EpisodeLabel = styled(Typography)(({ theme }) => ({
  color: "#FFC107", // Star Wars-like yellow
  fontFamily: '"Pathway Gothic One", sans-serif',
  wordSpacing: "0.5em", // Adjusted word spacing
  fontSize: "9rem", // Increased font size
  fontWeight: "bold",
  textTransform: "uppercase",
  textAlign: "center",
  marginBottom: "4rem",
  width: "100%",
}));

// Styled close button
const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(2),
  right: theme.spacing(2),
  color: "white",
  zIndex: 1001,
}));

interface Props {
  text: string;
  onClose?: () => void;
  episode_name: string;
  episode_number: string;
  duration: number;
}

const OpeningCrawl = ({
  text,
  episode_name,
  episode_number,
  onClose,
  duration = 15,
}: Props) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <CrawlContainer>
      <CloseButton aria-label="close" onClick={handleClose} size="large">
        <CloseIcon fontSize="large" />
      </CloseButton>
      <CrawlText variant="body1">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box sx={{ width: "50%" }}>
            <EpisodeLabel variant="h2" sx={{ marginBottom: 4 }}>
              {episode_number}
            </EpisodeLabel>
            <EpisodeLabel variant="h2" sx={{ marginBottom: 4 }}>
              {episode_name}
            </EpisodeLabel>
          </Box>
          {text}
        </Box>
      </CrawlText>
    </CrawlContainer>
  );
};

export default OpeningCrawl;
