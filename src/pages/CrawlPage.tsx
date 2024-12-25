import { useParams } from "react-router-dom";
import OpeningCrawl from "../components/OpeningCrawl";
import { useFetch } from "../hooks/UseFetch";
import { ApiResponse, Film } from "../types/types";
import { integerToRoman } from "../utils/utils";
import { Navigate } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";

const CrawlPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useFetch<ApiResponse<Film>>({
    endpoint: "/films",
  });

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "80vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Navigate to="/*" />;
  }

  const filteredEpisode = data?.results?.find(
    (film) => id && film.episode_id === parseInt(id)
  );

  if (data && !filteredEpisode) {
    return <Navigate to="/*" />;
  }

  if (filteredEpisode) {
    return (
      <OpeningCrawl
        episode_name={filteredEpisode.title}
        text={filteredEpisode.opening_crawl}
        episode_number={integerToRoman(filteredEpisode.episode_id)}
        onClose={() => window.close()}
        duration={45}
      />
    );
  }

  return null;
};

export default CrawlPage;
