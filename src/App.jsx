import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import Contact from "./pages/Contact";
import ProductDetailPage from "./pages/ProductDetailPage";
import "./index.css";
import Blogs from "./pages/Blogs";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </Router>
  );
}

export default App;