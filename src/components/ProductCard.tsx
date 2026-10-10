import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Product } from "../data/catalog.ts";
import { ProductModal } from "./ProductModal.tsx";

export function ProductCard({ p }: { p: Product }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <article className="product-card">
        <button
          type="button"
          className="product-open"
          onClick={() => setOpen(true)}
          aria-label={`Preview ${p.name}`}
          aria-haspopup="dialog"
        >
          <div
            className="product-visual"
            style={{
              "--pack-bg": p.packBg || "#e8eee2",
              "--pack-accent": p.accent || "#477148",
            } as React.CSSProperties}
          >
            <img
              className="product-package"
              src={`/assets/products/${p.image}.${p.imageExt || "png"}`}
              alt={`${p.name} product pack`}
              loading="lazy"
            />
            <span className="product-category">{p.category}</span>
            <ArrowUpRight className="product-arrow" size={20} />
          </div>
        </button>
        <div className="product-info">
          <div>
            <h3>
              <Link to ={`/products/${p.slug}`}>{p.name}</Link>
              {p.comingSoon && (
                <span className="coming-badge-inline">Coming Soon</span>
              )}
            </h3>
            <p>{p.formula}</p>
          </div>
          <Link to ={`/products/${p.slug}`} aria-label={`View ${p.name} details`}>
            <ArrowRight size={19} />
          </Link>
        </div>
      </article>
      {open && <ProductModal p={p} onClose={() => setOpen(false)} />}
    </>
  );
}
