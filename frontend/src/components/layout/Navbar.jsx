import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom px-4">
      <NavLink className="navbar-brand" to="/">
        <img
          src="/images/wanda_atelier.png"
          alt="Wanda Atelier"
          style={{ height: "90px" }}
        />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav mx-auto gap-3">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              INICIO
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/catalogo">
              COLECCIONES
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/nosotros">
              NOSOTROS
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/contacto">
              CONTACTO
            </NavLink>
          </li>
        </ul>

        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-link text-dark">
            <FiSearch />
          </button>

          <button className="btn btn-link text-dark">
            <FiShoppingBag />
          </button>
        </div>
      </div>
    </nav>
  );
}
