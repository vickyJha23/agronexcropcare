import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, X } from "lucide-react";
import type { Product } from "../data/catalog.ts";
import { Eyebrow } from "./Eyebrow.tsx";

export function ProductModal({ p, onClose }: { p: Product; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return (
    <div
      className="product-modal-backdrop"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <section
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`modal-${p.slug}`}
      >
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close product details"
        >
          <X size={20} />
        </button>
        <div
          className="modal-product-photo"
          style={{
            "--pack-bg": p.packBg || "#e8eee2",
            "--pack-accent": p.accent || "#477148",
          } as React.CSSProperties}
        >
          <img
            src={`/assets/products/${p.image}.${p.imageExt || "png"}`}
            alt={`${p.name} product pack`}
          />
        </div>
        <div className="modal-product-copy">
          <Eyebrow>
            {p.category}
            {p.comingSoon ? " · COMING SOON" : ""}
          </Eyebrow>
          <h2 id={`modal-${p.slug}`}>{p.name}</h2>
          <p className="modal-formula">{p.formula}</p>
          <p className="modal-benefit">{p.benefit}.</p>
          <dl className="modal-facts">
            <dt>Suitable crops</dt>
            <dd>{p.crops}</dd>
            <dt>Targets</dt>
            <dd>{p.target}</dd>
            <dt>{p.doseLabel || "Dose per 15L water"}</dt>
            <dd>{p.dose}</dd>
            {p.pack && (
              <>
                <dt>Available packs</dt>
                <dd>{p.pack}</dd>
              </>
            )}
            {p.note && (
              <>
                <dt>{p.noteLabel || "Usage note"}</dt>
                <dd>{p.note}</dd>
              </>
            )}
          </dl>
          <p className="modal-disclaimer">
            Always follow the product label and local agricultural guidance.
          </p>
          <Link className="button button-dark" to ={`/contact?product=${p.slug}`}>
            Enquire about {p.name} <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}
