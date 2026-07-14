import "react";

function Producto() {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img
            src="/images/vestido-negro.jpg"
            alt="Vestido Elegance"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-lg-6">
          <span className="badge bg-dark mb-3">Nueva Colección</span>

          <h2 className="display-5">Vestido Elegance</h2>

          <p className="text-muted">Diseño exclusivo de Wanda Atelier.</p>

          <h3 className="fw-bold mb-4">$89.990</h3>

          <p>
            Prenda confeccionada cuidadosamente para resaltar la elegancia y
            feminidad de cada mujer. Diseñada con materiales de alta calidad y
            acabados únicos.
          </p>

          <div className="mb-4">
            <strong>Tallas:</strong>

            <div className="mt-2">
              <button className="btn btn-outline-dark me-2">S</button>
              <button className="btn btn-outline-dark me-2">M</button>
              <button className="btn btn-outline-dark me-2">L</button>
              <button className="btn btn-outline-dark">XL</button>
            </div>
          </div>

          <button className="btn btn-dark btn-lg me-2">Comprar Ahora</button>

          <button className="btn btn-outline-dark btn-lg">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </section>
  );
}

export default Producto;
