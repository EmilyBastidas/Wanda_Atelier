import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/catalogo" element={<h1>Catalogo</h1>} />
        <Route path="/nosotros" element={<h1>Nosotros</h1>} />
        <Route path="/contacto" element={<h1>Contacto</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
