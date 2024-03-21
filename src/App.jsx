import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Vans, { loader as vansLoader } from "./pages/vans";
import VanDetail, { loader as vanDetailLoader } from "./pages/van-detail";
import HostLayout from "./pages/host/layout";
import Dashboard from "./pages/host/dashboard";
import Income from "./pages/host/income";
import Reviews from "./pages/host/reviews";
import EditVans, { loader as hostVansLoader } from "./pages/host/editvans";
import { NotFound, ErrorPage } from "./pages/error-page";
import "./server";
import EditVanDetails, {
  loader as hostVanDetailsLoader,
} from "./pages/host/editvans-details";
import HostVanInfo from "./pages/host/details";
import HostVanPricing from "./pages/host/pricing";
import HostVanPhotos from "./pages/host/photos";
import LoginPage from "./pages/login";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="vans">
          <Route
            index
            element={<Vans />}
            loader={vansLoader}
            errorElement={<ErrorPage />}
          />
          <Route path=":id" element={<VanDetail />} loader={vanDetailLoader} />
        </Route>
        <Route>
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="editvan">
              <Route index element={<EditVans />} loader={hostVansLoader} />
              <Route
                path=":id"
                element={<EditVanDetails />}
                loader={hostVanDetailsLoader}
              >
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
