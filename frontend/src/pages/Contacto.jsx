import React from "react";

function Contacto() {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-5">Contáctanos</h2>
        <p className="text-muted">
          Estamos disponibles para responder tus consultas y ayudarte a
          encontrar la joya perfecta.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow border-0">
            <div className="card-body p-4">
              <form>
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ingresa tu nombre"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Correo electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="correo@ejemplo.com"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Asunto</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Asunto"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Mensaje</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Escribe tu mensaje..."
                  ></textarea>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-dark">
                    Enviar mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="mb-1">
              <strong>Email:</strong> contacto@wandaatelier.com
            </p>
            <p className="mb-1">
              <strong>Instagram:</strong> @wandaatelier
            </p>
            <p>
              <strong>WhatsApp:</strong> +56 9 XXXX XXXX
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
