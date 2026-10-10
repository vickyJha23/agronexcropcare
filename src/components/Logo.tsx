import { Link } from "react-router-dom";

export function Logo({ light = false }) {
  return (
    <Link
      className={`brand ${light ? "brand-light" : ""}`}
      to ="/"
      aria-label="Agronex Crop Care home"
    >
      <img
        className="brand-art"
        src={
          light ? "/assets/agronex-logo-light.png" : "/assets/agronex-logo.png"
        }
        alt="AGRONEX CROP CARE"
      />
    </Link>
  );
}
