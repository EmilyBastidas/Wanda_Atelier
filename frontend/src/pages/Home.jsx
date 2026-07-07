import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Inicio - Wanda Atelier";
  }, []);

  return (
    <div>
      <p className="" style={{ color: "#8E6BBE", fontSize: "12px" }}>
        Bisutería Artesanal
      </p>
    </div>
  );
}
