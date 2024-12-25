import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import People from "../pages/People";
import NotFound from "../pages/NotFound";
import Films from "../pages/Films";
import Planets from "../pages/Planets";
import Species from "../pages/Species";
import Vehicles from "../pages/Vehicles";
import Starships from "../pages/Starships";
import CrawlPage from "../pages/CrawlPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/people" element={<People />} />
      <Route path="/people/:id" element={<People />} />
      <Route path="/films" element={<Films />} />
      <Route path="/films/:id" element={<Films />} />
      <Route path="/planets" element={<Planets />} />
      <Route path="/planets/:id" element={<Planets />} />
      <Route path="/species" element={<Species />} />
      <Route path="/species/:id" element={<Species />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/vehicles/:id" element={<Vehicles />} />
      <Route path="/starships" element={<Starships />} />
      <Route path="/starships/:id" element={<Starships />} />
      <Route path="/crawl/:id" element={<CrawlPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
