import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import Contact from "./pages/Contact";
import ProductDetailPage from "./pages/ProductDetailPage";
import "./index.css";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Cakes from "./pages/cataloguePages/Cakes";
import Pastries from "./pages/cataloguePages/Pastries";
import Catering from "./pages/cataloguePages/Catering";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/catalogue/cakes" element={<Cakes />} />
        <Route path="/catalogue/pastries" element={<Pastries />} />
        <Route path="/catalogue/catering" element={<Catering />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;