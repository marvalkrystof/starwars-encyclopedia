import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

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

const CrawlText = styled(Typography)(() => ({
  color: "#FFC107",
  fontFamily: '"Pathway Gothic One", sans-serif',
  fontSize: "6rem",
  textAlign: "center",
  whiteSpace: "pre-line",
  width: "200%",
  position: "absolute",
  transformOrigin: "center bottom",
  animation: "crawl 60s linear",
  animationFillMode: "forwards",
  lineHeight: 1.5,
  "@keyframes crawl": {
    "0%": {
      top: "60%",
      opacity: 1,
      transform: "rotateX(45deg) translateY(40%) translateZ(1700px)",
    },
    "100%": {
      top: "-180%",
      opacity: 0.2,
      transform: "rotateX(45deg) translateY(-100%) translateZ(1000px)",
    },
  },
}));

const EpisodeLabel = styled(Typography)(() => ({
  color: "#FFC107",
  fontFamily: '"Pathway Gothic One", sans-serif',
  wordSpacing: "0.5em",
  fontSize: "9rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  textAlign: "center",
  marginBottom: "4rem",
  width: "100%",
}));

interface Props {
  text: string;
  onClose: () => void;
  episode_name: string;
  episode_number: string;
  duration: number;
}

const OpeningCrawl = ({
  text,
  episode_name,
  onClose,
  episode_number,
  duration = 15,
}: Props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <CrawlContainer>
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
