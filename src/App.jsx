import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Vans from "./pages/vans";

function App() {
  // useEffect(() => {
  //   const path = location.pathname;
  //   if (path.includes("/about")) {
  //     setActualPage("about");
  //   } else if (path.includes("/vans")) {
  //     setActualPage("vans");
  //   } else {
  //     setActualPage("");
  //   }

  //   return null;
  // }, [location]);

  return (
    // <div className="app--container">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    // </div>
  );
}

export default App;
