import "react";

function Nosotros() {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img
            src="/images/wanda-atelier.jpg"
            alt="Wanda Atelier"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-lg-6">
          <h2 className="display-5 mb-4">Sobre Wanda Atelier</h2>

          <p className="lead">
            Wanda Atelier nace de nuestra pasión por crear prendas únicas,
            elegantes y llenas de personalidad.
          </p>

          <p>
            Cada diseño es elaborado con dedicación y atención a los detalles,
            buscando ofrecer piezas que hagan sentir especial a quien las use.
          </p>

          <p>
            Nuestro objetivo es combinar estilo, calidad y autenticidad en cada
            creación, transformando ideas en prendas que reflejen confianza,
            belleza y esencia propia.
          </p>

          <p>
            Más que una marca, Wanda Atelier es un espacio donde la creatividad,
            la moda y el amor por el diseño se encuentran para dar vida a cada
            colección.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
