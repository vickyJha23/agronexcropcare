import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo.tsx";

export function Header() {
  const [scrolled, setScrolled] = useState(false),
    [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-wrap">
        <Logo light />
        <button
          className={`mobile-toggle ${open ? "is-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="menu-lines" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </button>
        <nav className={open ? "nav open" : "nav"}>
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Products", "/products"],
            ["Crop Solutions", "/crop-solutions"],
            ["Dealer Network", "/dealer-network"],
            ["Contact", "/contact"],
          ].map(([a, b]) => (
            <Link key={a} to ={b} onClick={() => setOpen(false)}>
              {a}
            </Link>
          ))}
          <Link
            className="nav-cta"
            to ="/dealer-network#dealer-application"
            onClick={() => setOpen(false)}
          >
            Dealer Enquiry <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
