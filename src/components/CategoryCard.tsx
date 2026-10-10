import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { categorySlug } from "../data/catalog.ts";

export function CategoryCard({ item, i }) {
  return (
    <Link
      className={`category-card ${item[2]}`}
      to ={`/products/${categorySlug(item[0])}`}
    >
      <div className="cat-top">
        <span>0{i + 1}</span>
        <ArrowUpRight size={20} />
      </div>
      <div>
        <h3>{item[0]}</h3>
        <p>{item[1]}</p>
      </div>
    </Link>
  );
}
