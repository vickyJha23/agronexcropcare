import { Route, Routes, useLocation, useParams } from "react-router-dom";
import { products, categories, categorySlug } from "./data/catalog.ts";
import { Home, About, ProductsPage, ProductDetail, Solutions, Dealer, Contact, NotFound } from "./pages/pages.tsx";
import { RouteMetadata } from "./components/RouteMetadata.tsx";

function ProductOrCategoryRoute() {
  const { slug = "" } = useParams();
  const { search } = useLocation();
  const category = categories.find(([name]) => categorySlug(name) === slug)?.[0];
  if (category) return <ProductsPage initialCategory={category} search={search} />;
  const product = products.find((item) => item.slug === slug);
  return product ? <ProductDetail p={product} /> : <NotFound />;
}

function ProductListRoute() {
  const { search } = useLocation();
  return <ProductsPage search={search} />;
}

function ContactRoute() {
  const { search } = useLocation();
  return <Contact search={search} />;
}

export function App() {
  return (
    <>
      <RouteMetadata />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductListRoute />} />
        <Route path="/products/:slug" element={<ProductOrCategoryRoute />} />
        <Route path="/crop-solutions" element={<Solutions />} />
        <Route path="/dealer-network" element={<Dealer />} />
        <Route path="/contact" element={<ContactRoute />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
