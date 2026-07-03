import { Routes, Route } from "react-router-dom";

// Pages (las crearé luego)
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import Product from "./pages/Product/Product";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
