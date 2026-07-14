import "react";

const joyas = [
  {
    id: 1,
    nombre: "Collar Aurora",
    precio: "$89.990",
    imagen: "/images/collar.jpg",
  },
  {
    id: 2,
    nombre: "Anillo Élite",
    precio: "$59.990",
    imagen: "/images/anillo.jpg",
  },
  {
    id: 3,
    nombre: "Pulsera Perla",
    precio: "$69.990",
    imagen: "/images/pulsera.jpg",
  },
  {
    id: 4,
    nombre: "Aretes Crystal",
    precio: "$49.990",
    imagen: "/images/aretes.jpg",
  },
];

function Catalogo() {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-light">Colección Exclusiva</h2>
        <p className="text-muted">
          Joyas diseñadas para resaltar tu elegancia y personalidad.
        </p>
      </div>

      <div className="row g-4">
        {joyas.map((joya) => (
          <div key={joya.id} className="col-md-6 col-lg-3">
            <div className="card border-0 shadow-sm h-100">
              <img
                src={joya.imagen}
                alt={joya.nombre}
                className="card-img-top"
                style={{
                  height: "300px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body text-center">
                <h5 className="card-title">{joya.nombre}</h5>

                <p
                  className="fw-bold"
                  style={{
                    color: "#8B5CF6",
                  }}
                >
                  {joya.precio}
                </p>

                <button className="btn btn-outline-dark rounded-pill px-4">
                  Ver Detalles
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Catalogo;
