import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Vans from "./pages/vans";
import createServer from "./server";

function App() {
  createServer;
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
