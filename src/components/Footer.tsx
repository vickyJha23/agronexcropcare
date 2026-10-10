import { Link } from "react-router-dom";
import { ArrowUpRight, Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { categories, categorySlug, mapsUrl } from "../data/catalog.ts";
import { Logo } from "./Logo.tsx";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Logo light />
          <p>
            Healthy Crops.
            <br />
            Brighter Tomorrows.
          </p>
          <div className="social">
            <a
              href="https://www.facebook.com/share/1JDCgwbFWn/"
              aria-label="Facebook"
            >
              <Facebook size={17} />
            </a>
            <a
              href="https://www.instagram.com/agronex_crop_care?stkn=MXRzYTRhOXR1czQ5NQ=="
              aria-label="Instagram"
            >
              <Instagram size={17} />
            </a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to ="/about">About AGRONEX</Link>
          <Link to ="/products">Our Products</Link>
          <Link to ="/crop-solutions">Crop Solutions</Link>
          <Link to ="/dealer-network">Dealer Network</Link>
        </div>
        <div>
          <h4>Product groups</h4>
          {categories.map(([n]) => (
            <Link to ={`/products/${categorySlug(n)}`} key={n}>
              {n}
            </Link>
          ))}
        </div>
        <div className="footer-contact">
          <h4>Get in touch</h4>
          <a href="tel:+917734076003">
            <Phone size={15} /> +91 77340 76003
          </a>
          <a
            className="footer-location"
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            <MapPin size={15} /> Plot No. 2937,
            <br />
            Village: DTR, LGD Code: 32753,
            <br />
            Sirsa, Haryana 125076 <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 AGRONEX CROP CARE</span>
        <span>Healthy Crops. Brighter Tomorrows.</span>
        <Link to ="/contact">
          Contact us <ArrowUpRight size={14} />
        </Link>
        <span className="footer-credit">
          Created by <strong>Realsight</strong>
        </span>
      </div>
    </footer>
  );
}
