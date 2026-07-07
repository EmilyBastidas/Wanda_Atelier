import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Inicio - Wanda Atelier";
  }, []);

  return (
    <div>
      <p
        className="mt-5 ms-5 font-poppins"
        style={{ color: "#8E6BBE", fontSize: "14px" }}
      >
        BISUTERIA ARTESANAL
      </p>

      <div className="container mt-5 font-playfair">
        <h1 className="text-start" style={{ fontSize: "60px" }}>
          Joyas que cuentan una historia
        </h1>
      </div>
    </div>
  );
}
