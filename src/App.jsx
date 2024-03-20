import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Vans from "./pages/vans";
import VanDetail from "./pages/van-detail";
import HostLayout from "./pages/host/layout";
import Dashboard from "./pages/host/dashboard";
import Income from "./pages/host/income";
import Reviews from "./pages/host/reviews";
import EditVans from "./pages/host/editvans";
import "./server";
import EditVanDetails from "./pages/host/editvans-details";
import HostVanInfo from "./pages/host/details";
import HostVanPricing from "./pages/host/pricing";
import HostVanPhotos from "./pages/host/photos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<VanDetail />} />
          </Route>
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="editvan">
              <Route index element={<EditVans />} />
              <Route path=":id" element={<EditVanDetails />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
