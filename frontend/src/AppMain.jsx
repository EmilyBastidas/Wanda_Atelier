import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Joyas from "./pages/Catalogo.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Joyas />} />
        <Route path="/nosotros" element={<h1>Nosotros</h1>} />
        <Route path="/contacto" element={<h1>Contacto</h1>} />
        <Route path="*" element={<h1>Página no encontrada (404)</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
