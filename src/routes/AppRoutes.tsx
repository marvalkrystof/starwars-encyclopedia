import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PeoplePage from "../pages/PeoplePage";
import NotFoundPage from "../pages/NotFoundPage";
import FilmsPage from "../pages/FilmsPage";
import PlanetsPage from "../pages/PlanetsPage";
import SpeciesPage from "../pages/SpeciesPage";
import VehiclesPage from "../pages/VehiclesPage";
import StarshipsPage from "../pages/StarshipsPage";
import CrawlPage from "../pages/CrawlPage";
import FilmPage from "../pages/FilmPage";
import SpeciePage from "../pages/SpeciePage";
import StarshipPage from "../pages/StarshipPage";
import VehiclePage from "../pages/VehiclePage";
import PersonPage from "../pages/PersonPage";
import PlanetPage from "../pages/PlanetPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />

      <Route path="/" element={<HomePage />} />

      <Route path="/people" element={<PeoplePage />} />
      <Route path="/people/search/:search_id" element={<PeoplePage />} />
      <Route path="/people/:id" element={<PersonPage />} />

      <Route path="/films" element={<FilmsPage />} />
      <Route path="/films/search/:search_id" element={<FilmsPage />} />
      <Route path="/films/:id" element={<FilmPage />} />

      <Route path="/planets" element={<PlanetsPage />} />
      <Route path="/planets/search/:search_id" element={<PlanetsPage />} />
      <Route path="/planets/:id" element={<PlanetPage />} />

      <Route path="/species" element={<SpeciesPage />} />
      <Route path="/species/search/:search_id" element={<SpeciesPage />} />
      <Route path="/species/:id" element={<SpeciePage />} />

      <Route path="/vehicles" element={<VehiclesPage />} />
      <Route path="/vehicles/search/:search_id" element={<VehiclesPage />} />
      <Route path="/vehicles/:id" element={<VehiclePage />} />

      <Route path="/starships" element={<StarshipsPage />} />
      <Route path="/starships/search/:search_id" element={<StarshipsPage />} />
      <Route path="/starships/:id" element={<StarshipPage />} />

      <Route path="/crawl/:id" element={<CrawlPage />} />
    </Routes>
  );
};

export default AppRoutes;
