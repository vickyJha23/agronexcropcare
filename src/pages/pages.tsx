import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, X, Sprout, Leaf, ShieldCheck, Wheat, Instagram, Facebook, MapPin, Phone, Download, Send, Bot, Sparkles } from "lucide-react";
import { products, categories, featuredProducts, categorySlug, upcomingFormulations, images, mapsUrl } from "../data/catalog.ts";
import { Shell } from "../components/Shell.tsx";
import { Eyebrow } from "../components/Eyebrow.tsx";
import { CategoryCard } from "../components/CategoryCard.tsx";
import { ProductCard } from "../components/ProductCard.tsx";

export function Home() {
  return (
    <Shell>
      <main>
        <section
          className="hero"
          style={{
            backgroundImage: `linear-gradient(90deg,rgba(9,23,16,.72),rgba(9,23,16,.16)),linear-gradient(0deg,rgba(9,23,16,.48),transparent 45%),url(${images.hero})`,
          }}
        >
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={images.hero}
            aria-hidden="true"
          >
            <source src="/assets/agronex-field-video.mp4" type="video/mp4" />
          </video>
          <div className="hero-inner">
            <Eyebrow>
              CROP PROTECTION <i /> HIGHER YIELDS <i /> HEALTHIER FUTURE
            </Eyebrow>
            <h1>
              Healthy Crops.
              <br />
              <em>Brighter</em>
              <br />
              Tomorrows.
            </h1>
            <p>Crop-care solutions for the people who grow our future.</p>
            <div className="hero-actions">
              <Link className="button button-light" to ="/products">
                Explore Products <ArrowUpRight size={17} />
              </Link>
              <Link className="text-link light" to ="/about">
                Discover AGRONEX <ArrowRight size={17} />
              </Link>
            </div>
          </div>
          <div className="hero-foot">
            <span>01 / ROOTED IN HARYANA, INDIA</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>
        <section className="section categories-section">
          <div className="section-head">
            <div>
              <Eyebrow>OUR PRODUCTS</Eyebrow>
              <h2>
                Complete crop care.
                <br />
                <em>Considered solutions.</em>
              </h2>
            </div>
            <div className="head-copy">
              <p>
                From insect and disease management to weed control and plant
                growth, explore our crop-care portfolio.
              </p>
              <Link className="text-link" to ="/products">
                View all products <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
          <div className="category-grid">
            {categories.map((c, i) => (
              <CategoryCard key={c[0]} item={c} i={i} />
            ))}
          </div>
        </section>
        <section
          className="crop-feature"
          style={{
            backgroundImage: `linear-gradient(90deg,rgba(5,30,20,.79),rgba(5,30,20,.12)),url(${images.leaves})`,
          }}
        >
          <div className="crop-feature-inner">
            <Eyebrow>BETTER SOLUTIONS FOR EVERY CROP</Eyebrow>
            <h2>
              Because every crop
              <br />
              deserves <em>the best.</em>
            </h2>
            <p>
              Explore crop-care solutions designed around different crops and
              the challenges they face.
            </p>
            <Link className="button button-outline" to ="/crop-solutions">
              Explore crop solutions <ArrowUpRight size={17} />
            </Link>
          </div>
          <span className="image-caption">GROW WITH CARE · AGRONEX</span>
        </section>
        <section className="section about-home">
          <div className="about-images">
            <img
              className="about-main"
              src={images.farmer}
              alt="Farmer tending a healthy crop"
              loading="lazy"
            />
            <div className="about-note">
              <Sprout size={25} />
              <span>
                Rooted in
                <br />
                farmer needs
              </span>
            </div>
            <img
              className="about-leaf"
              src={images.leaves}
              alt="Close-up of fresh green leaves"
              loading="lazy"
            />
          </div>
          <div className="about-copy">
            <Eyebrow>ABOUT AGRONEX</Eyebrow>
            <h2>
              A trusted partner
              <br />
              for <em>farmers and dealers.</em>
            </h2>
            <p>
              AGRONEX CROP CARE is an Indian crop-protection company based in
              Haryana. We focus on quality products, thoughtful technology,
              farmer-focused solutions and dependable dealer support.
            </p>
            <p>
              Founded by J.S. SHARMA and led by Managing Director M. Jangra,
              AGRONEX is built around a simple belief: better crop care begins
              with listening to the people who grow our food.
            </p>
            <Link className="text-link" to ="/about">
              Know more about us <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
        <section className="section featured">
          <div className="section-head">
            <div>
              <Eyebrow>OUR PORTFOLIO</Eyebrow>
              <h2>
                Crop protection,
                <br />
                <em>with purpose.</em>
              </h2>
            </div>
            <div className="head-copy">
              <p>
                Explore crop-care products selected to support practical needs
                in the field.
              </p>
              <Link className="text-link" to ="/products">
                Explore the full portfolio <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
          <div className="product-grid">
            {featuredProducts.map((p) => (
              <ProductCard key={p.slug} p={p} />
            ))}
          </div>
        </section>
        <section
          className="dealer-cta"
          style={{
            backgroundImage: `linear-gradient(90deg,rgba(5,42,29,.93),rgba(5,42,29,.64)),url(${images.hero})`,
          }}
        >
          <div>
            <Eyebrow>LET'S GROW TOGETHER</Eyebrow>
            <h2>
              Strong partnerships.
              <br />
              <em>Healthier harvests.</em>
            </h2>
          </div>
          <div className="dealer-right">
            <p>
              Join the AGRONEX dealer network and connect with a team focused on
              crop care and farmer support.
            </p>
            <Link
              className="button button-light"
              to ="/dealer-network#dealer-application"
            >
              Become a Dealer <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
      </main>
    </Shell>
  );
}
export function PageHero({ label, title, sub }) {
  return (
    <section className="page-hero">
      <Eyebrow>{label}</Eyebrow>
      <h1>{title}</h1>
      {sub && <p>{sub}</p>}
    </section>
  );
}
export function About() {
  return (
    <Shell>
      <main>
        <PageHero
          label="ABOUT AGRONEX"
          title={
            <>
              Rooted in care.
              <br />
              <em>Growing with purpose.</em>
            </>
          }
          sub="An Indian crop-care company shaped by the needs of farmers and the strength of trusted partnerships."
        />
        <section className="section about-page">
          <div
            className="about-page-photo"
            style={{ backgroundImage: `url(${images.about})` }}
          />
          <div>
            <Eyebrow>OUR APPROACH</Eyebrow>
            <h2>
              Better crop care starts with <em>understanding.</em>
            </h2>
            <p>
              Established in 2023, AGRONEX CROP CARE is an Indian crop-care
              company based in Haryana. Founded by J.S. SHARMA, the company
              brings together agricultural crop protection products and
              practical crop-care solutions for farmers and agricultural
              businesses.
            </p>
            <p>
              Its portfolio includes insecticides, fungicides, herbicides and
              crop growth solutions. Product information helps visitors explore
              formulations, suitable crops, target pests or diseases,
              application details and available pack sizes.
            </p>
            <p>
              AGRONEX serves a range of field needs across crops including
              cotton, wheat, paddy, soybean, mustard, chilli, tomato and other
              vegetables. The company also welcomes enquiries from agricultural
              retailers and distributors interested in serving farming
              communities.
            </p>
            <p>
              Based in Sirsa, Haryana, AGRONEX continues to build its work
              around accessible product information, farmer-focused thinking and
              relationships with its dealer network.
            </p>
            <div className="principles">
              <span>
                <ShieldCheck />
                Quality-led portfolio
              </span>
              <span>
                <Sprout />
                Farmer-focused thinking
              </span>
              <span>
                <Wheat />
                Dealer relationships
              </span>
            </div>
          </div>
        </section>
        <section className="founders">
          <div className="founders-heading">
            <Eyebrow>THE PEOPLE BEHIND AGRONEX</Eyebrow>
            <h2>
              Leadership with
              <br />
              <em>agriculture at heart.</em>
            </h2>
          </div>
          <article className="leader-card">
            <span className="founder-initial">JSS</span>
            <div>
              <small>FOUNDER &amp; VISION</small>
              <h3>Mr. J. S. Sharma</h3>
              <strong>B.Sc. Agriculture | Founder – AGRONEX CROP CARE</strong>
              <p>
                Mr. J. S. Sharma is a B.Sc. Agriculture graduate with a strong
                vision to contribute to modern agriculture through quality
                agricultural products, research-driven solutions, and innovative
                farming practices.
              </p>
              <p>
                With a deep understanding of farmers’ practical needs and the
                challenges faced in agriculture, he founded AGRONEX CROP CARE
                with the vision of developing and providing reliable solutions
                in Crop Protection, Fertilizers, Plant Nutrition, and Organic
                Manure.
              </p>
              <p>
                Driven by a strong passion for research and product innovation,
                Mr. J. S. Sharma has been actively involved in agricultural
                Research &amp; Development for nearly three years, with a
                particular focus on Organic Manure and Soil Health.
              </p>
              <p>
                His research and product development work also includes an
                innovative agricultural product focused on Soil Health and pH
                Management. The product has been developed through research and
                practical product development, with the objective of supporting
                balanced soil conditions, better nutrient availability, healthy
                plant growth, and improved crop performance.
              </p>
              <p>
                His approach combines agricultural knowledge, research,
                practical development, and an understanding of farmers’
                real-world requirements to create solutions that can contribute
                to better and more sustainable agriculture.
              </p>
              <h4>Our Vision</h4>
              <p>
                To build AGRONEX CROP CARE as a trusted, quality-driven, and
                research-oriented agricultural brand, delivering innovative
                solutions that support healthy soil, better crops, and
                sustainable agricultural growth.
              </p>
              <h4>Our Philosophy</h4>
              <p className="leadership-motto">
                Research <i>•</i> Quality <i>•</i> Innovation <i>•</i> Farmer
                First
              </p>
            </div>
          </article>
          <article className="leader-card">
            <span className="founder-initial">MJ</span>
            <div>
              <small>MANAGING DIRECTOR</small>
              <h3>Mr. M. Jangra</h3>
              <strong>
                Post Graduate | Managing Director – AGRONEX CROP CARE
              </strong>
              <p>
                Mr. M. Jangra is a Post Graduate and serves as the Managing
                Director of AGRONEX CROP CARE, contributing to the company’s
                management, strategic planning, business development, and
                long-term growth.
              </p>
              <p>
                As Managing Director, he plays a key role in strengthening the
                company’s business operations, organizational development, and
                strategic direction. His leadership supports the company’s
                efforts to build strong relationships with customers, business
                partners, and stakeholders while creating a strong and
                sustainable presence in the agricultural sector.
              </p>
              <p>
                With a focus on professional management, business development,
                and sustainable growth, he works closely with the organization
                to strengthen its operations and support AGRONEX CROP CARE’s
                vision of providing quality, reliable, and innovative
                agricultural solutions.
              </p>
              <p>
                His leadership and management approach complement the company’s
                commitment to quality, innovation, reliability, and long-term
                growth.
              </p>
              <h4>Leadership Philosophy</h4>
              <p className="leadership-motto">
                Professional Management <i>•</i> Strategic Growth <i>•</i>{" "}
                Strong Leadership
              </p>
            </div>
          </article>
        </section>
        <section className="section research-section">
          <div className="research-copy">
            <Eyebrow>OUR RESEARCH TEAM</Eyebrow>
            <h2>
              Research for <em>healthier agriculture.</em>
            </h2>
            <p>
              At AGRONEX CROP CARE, our research team is committed to supporting
              modern agriculture through scientific thinking, continuous
              research, and a focus on crop health and soil sustainability.
            </p>
            <p>
              Our team explores innovative agricultural solutions, studies crop
              protection challenges, works to improve soil health, and develops
              products designed for farmers’ evolving needs. We emphasize
              product research, quality, and responsible agricultural practices
              to support sustainable farming.
            </p>
            <p>
              Through continuous learning, field-oriented research, and a
              commitment to innovation, we aim to contribute to healthier crops,
              improved soil conditions, and better agricultural outcomes.
            </p>
            <div className="research-vision">
              <small>OUR VISION</small>
              <p>
                To promote innovative, reliable, and sustainable agricultural
                solutions that support crop health, healthy soil, and better
                outcomes for farmers.
              </p>
            </div>
          </div>
          <div className="research-gallery">
            <img
              className="research-gallery-wide"
              src="/assets/research-team/research-team-office.jpeg"
              alt="AGRONEX team working together in the crop-care office"
              loading="lazy"
            />
            <img
              src="/assets/research-team/research-lab.jpeg"
              alt="Agricultural researchers studying crop and soil samples"
              loading="lazy"
            />
            <img
              src="/assets/research-team/research-office.jpeg"
              alt="AGRONEX crop-care office and team workspace"
              loading="lazy"
            />
            <img
              src="/assets/research-team/agronex-office-logo.jpeg"
              alt="AGRONEX CROP CARE logo displayed at the office"
              loading="lazy"
            />
          </div>
        </section>
      </main>
    </Shell>
  );
}
export function ProductsPage({ search = "", initialCategory = "All" }) {
  const params = new URLSearchParams(search);
  const queryCategory = params.get("category");
  const crops = [
    "All",
    "Cotton",
    "Wheat",
    "Paddy",
    "Soybean",
    "Chilli",
    "Tomato",
    "Mustard",
    "Vegetables",
    "Moong",
    "Guar",
    "Groundnut",
    "Bajra",
    "Sugarcane",
    "Maize",
    "Potato",
    "Fruits",
    "Grapes",
    "Mango",
    "Gram",
    "Apple",
    "Okra",
    "Cabbage",
    "Onion",
    "Cumin",
    "Brinjal",
    "Safflower",
    "Tea",
    "Non-crop areas",
  ];
  const queryCrop =
    crops.find(
      (item) => item.toLowerCase() === params.get("crop")?.toLowerCase(),
    ) || "All";
  const selectedCategory = categories.some(([name]) => name === initialCategory)
    ? initialCategory
    : "All";
  const [cat, setCat] = useState(selectedCategory),
    [crop, setCrop] = useState("All");
  useEffect(() => {
    if (
      selectedCategory === "All" &&
      categories.some(([name]) => name === queryCategory)
    )
      setCat(queryCategory);
    setCrop(queryCrop);
  }, [selectedCategory, queryCategory, queryCrop]);
  const cropKey = crop.toLowerCase().replace(/s$/, "");
  const shown = products.filter(
    (p) =>
      (cat === "All" || p.category === cat) &&
      (crop === "All" ||
        p.crops.toLowerCase().replace(/s\b/g, "").includes(cropKey)),
  );
  return (
    <Shell>
      <main>
        <PageHero
          label={cat === "All" ? "OUR PRODUCTS" : cat.toUpperCase()}
          title={
            cat === "All" ? (
              <>
                Crop care for
                <br />
                <em>every field.</em>
              </>
            ) : (
              <>
                {cat}
                <br />
                <em>for every field.</em>
              </>
            )
          }
          sub={
            cat === "All"
              ? "Explore our crop-care range. Select a product to view its formulation, suitable crops, target pests, application guidance and pack sizes."
              : `${categories.find(([name]) => name === cat)?.[1]} Browse the products below to compare formulations, target crops, pack sizes and product information.`
          }
        />
        <section className="section catalog">
          <div className="filters">
            <div>
              <label htmlFor="category">PRODUCT TYPE</label>
              <select
                id="category"
                value={cat}
                onChange={(e) => setCat(e.target.value)}
              >
                {["All", ...categories.map((c) => c[0])].map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="crop">CROP / USE</label>
              <select
                id="crop"
                value={crop}
                onChange={(e) => setCrop(e.target.value)}
              >
                {crops.map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </div>
            <span>
              {shown.length} of {products.length} products
            </span>
            <a
              className="catalog-download"
              href="/assets/agronex-catalog.pdf"
              download="agronex-catalog.pdf"
            >
              <Download size={16} /> Download catalog
            </a>
          </div>
          {shown.length ? (
            <div className="product-grid catalog-products">
              {shown.map((p) => (
                <ProductCard key={p.slug} p={p} />
              ))}
            </div>
          ) : (
            <p className="catalog-empty">
              No products match these filters. Try another crop or product type.
            </p>
          )}
          <p className="catalog-note">
            Use crop protection products only as directed on the product label
            and in line with local agricultural guidance.
          </p>
        </section>
        <section className="section upcoming-section">
          <div className="section-head">
            <div>
              <Eyebrow>COMING SOON</Eyebrow>
              <h2>
                More solutions
                <br />
                <em>on the horizon.</em>
              </h2>
            </div>
            <div className="head-copy">
              <p>
                Ceragen and additional formulations are planned for the upcoming
                range. Contact us for availability updates.
              </p>
            </div>
          </div>
          <div className="upcoming-card">
            <img
              src="/assets/products/ceragen.png"
              alt="Ceragen product pack"
              loading="lazy"
            />
            <div>
              <span className="coming-badge">COMING SOON</span>
              <h3>Ceragen</h3>
              <p className="upcoming-formula">Chlorantraniliprole 18.5% SC</p>
              <p>
                Paddy, sugarcane and vegetables · targets stem borer and green
                semilooper · dose 5 ml per 15L water · packs 30ml, 60ml and
                150ml.
              </p>
              <Link className="text-link" to ="/contact?product=ceragen">
                Enquire about Ceragen <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
          <h3 className="upcoming-list-title">Upcoming formulations</h3>
          <p className="catalog-note">
            Additional formulations planned for the AGRONEX range.
          </p>
          <div className="upcoming-tags">
            {upcomingFormulations.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>
      </main>
    </Shell>
  );
}
export function ProductDetail({ p }) {
  return (
    <Shell>
      <main>
        <PageHero
          label={`${p.category.toUpperCase()}${p.comingSoon ? " · COMING SOON" : ""}`}
          title={
            <>
              {p.name}
              <br />
              <em>{p.formula}</em>
            </>
          }
          sub="Product details, crop fit and pack information."
        />
        <nav className="product-breadcrumb" aria-label="Breadcrumb">
          <Link to ="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to ="/products">Products</Link>
          <span aria-hidden="true">/</span>
          <Link to ={`/products/${categorySlug(p.category)}`}>{p.category}</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{p.name}</span>
        </nav>
        <section className="section detail-layout">
          <div
            className="detail-art"
            style={{
              "--pack-bg": p.packBg || "#e8eee2",
              "--pack-accent": p.accent || "#477148",
            } as React.CSSProperties}
          >
            <img
              src={`/assets/products/${p.image}.${p.imageExt || "png"}`}
              alt={`${p.name} product pack`}
            />
            <span>{p.category}</span>
          </div>
          <div>
            <Eyebrow>PRODUCT OVERVIEW</Eyebrow>
            <h2>
              {p.name}
              <br />
              <em>Product details.</em>
            </h2>
            <p>{p.benefit}.</p>
            <dl>
              <dt>Formulation</dt>
              <dd>{p.formula}</dd>
              <dt>Suitable crops</dt>
              <dd>{p.crops}</dd>
              <dt>Targets</dt>
              <dd>{p.target}</dd>
              <dt>{p.doseLabel || "Dose per 15L water"}</dt>
              <dd>{p.dose}</dd>
              {p.pack && (
                <>
                  <dt>Pack sizes</dt>
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
            <p className="catalog-note">
              Follow the product label and local agricultural guidance when
              selecting and applying crop-care products.
            </p>
            <Link
              className="button button-dark"
              to ={`/contact?product=${p.slug}`}
            >
              Enquire about this product <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
        <section className="section related-products">
          <h2>
            Explore more <em>{p.category.toLowerCase()}.</em>
          </h2>
          <div>
            {products
              .filter(
                (item) => item.category === p.category && item.slug !== p.slug,
              )
              .slice(0, 3)
              .map((item) => (
                <Link key={item.slug} to ={`/products/${item.slug}`}>
                  {item.name} <ArrowUpRight size={15} />
                </Link>
              ))}
          </div>
          <Link className="text-link" to ="/products">
            Browse all products <ArrowRight size={16} />
          </Link>
        </section>
      </main>
    </Shell>
  );
}
export function Solutions() {
  return (
    <Shell>
      <main>
        <PageHero
          label="CROP SOLUTIONS"
          title={
            <>
              Care that starts
              <br />
              <em>with the crop.</em>
            </>
          }
          sub="Explore AGRONEX crop-care products by crop and common field challenge."
        />
        <section className="section solution-list">
          <img src={images.leaves} alt="Healthy crop leaves" />
          <div>
            <Eyebrow>FIELD-LED CROP CARE</Eyebrow>
            <h2>
              Every field brings
              <br />
              its own <em>questions.</em>
            </h2>
            <p>
              Our crop-care range supports cotton, wheat, paddy, soybean,
              mustard, chilli, tomato and other vegetables. Browse by crop or
              product type to explore relevant solutions.
            </p>
            <Link className="button button-dark" to ="/products">
              Browse products <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
        <div className="crop-tags">
          {[
            "Cotton",
            "Wheat",
            "Paddy",
            "Soybean",
            "Chilli",
            "Tomato",
            "Mustard",
            "Vegetables",
            "Moong",
            "Guar",
          ].map((x) => (
            <Link key={x} to ={`/products?crop=${encodeURIComponent(x)}`}>
              {x}
              <ArrowUpRight size={14} />
            </Link>
          ))}
        </div>
      </main>
    </Shell>
  );
}
function DealerApplication() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    business: "",
    type: "",
    district: "",
    experience: "",
    message: "",
  });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const body = `AGRONEX DEALER APPLICATION\nContact person: ${form.name}\nPhone: ${form.phone}\nBusiness name: ${form.business}\nBusiness type: ${form.type}\nDistrict / service area: ${form.district}\nAgriculture business experience: ${form.experience}\n\nAdditional information: ${form.message}`;
    window.open(
      `https://wa.me/917734076003?text=${encodeURIComponent(body)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };
  return (
    <section className="dealer-application" id="dealer-application">
      <div className="dealer-application-copy">
        <Eyebrow>DEALER APPLICATION</Eyebrow>
        <h2>
          Tell us about
          <br />
          <em>your business.</em>
        </h2>
        <p>
          Share a few details about your business and service area. The AGRONEX
          team will review your enquiry and follow up through WhatsApp.
        </p>
        <div className="dealer-form-points">
          <span>
            <ShieldCheck size={17} />
            Direct coordination with AGRONEX
          </span>
          <span>
            <MapPin size={17} />
            Local service area details
          </span>
        </div>
      </div>
      <form className="dealer-form" onSubmit={submit}>
        <label>
          Contact person
          <input
            name="name"
            value={form.name}
            onChange={update}
            required
            placeholder="Full name"
          />
        </label>
        <label>
          Phone number
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={update}
            required
            placeholder="+91"
          />
        </label>
        <label>
          Business name
          <input
            name="business"
            value={form.business}
            onChange={update}
            required
            placeholder="Registered or trading name"
          />
        </label>
        <label>
          Business type
          <select name="type" value={form.type} onChange={update} required>
            <option value="">Select business type</option>
            <option>Retail agricultural input shop</option>
            <option>Wholesale distributor</option>
            <option>Other agricultural business</option>
          </select>
        </label>
        <label>
          District / service area
          <input
            name="district"
            value={form.district}
            onChange={update}
            required
            placeholder="District, State"
          />
        </label>
        <label>
          Years in agricultural trade
          <select
            name="experience"
            value={form.experience}
            onChange={update}
            required
          >
            <option value="">Select experience</option>
            <option>New to the agricultural trade</option>
            <option>Less than 2 years</option>
            <option>2–5 years</option>
            <option>More than 5 years</option>
          </select>
        </label>
        <label className="dealer-field-wide">
          Additional information
          <textarea
            name="message"
            value={form.message}
            onChange={update}
            rows={3}
            placeholder="Tell us about your business or enquiry (optional)"
          />
        </label>
        <button className="button button-dark dealer-field-wide" type="submit">
          Submit dealer enquiry on WhatsApp <ArrowUpRight size={17} />
        </button>
        <small className="dealer-form-note dealer-field-wide">
          WhatsApp opens with your application details for you to review and
          send.
        </small>
      </form>
    </section>
  );
}
export function Dealer() {
  useEffect(() => {
    if (window.location.hash === "#dealer-application")
      requestAnimationFrame(() =>
        document
          .getElementById("dealer-application")
          ?.scrollIntoView({ behavior: "smooth", block: "start" }),
      );
  }, []);
  return (
    <Shell>
      <main>
        <PageHero
          label="DEALER NETWORK"
          title={
            <>
              Build a stronger
              <br />
              <em>agri-business.</em>
            </>
          }
          sub="Join AGRONEX in bringing a considered crop-care portfolio and responsive support closer to farming communities."
        />
        <section className="section dealer-page">
          <div
            className="dealer-page-image"
            style={{ backgroundImage: `url(${images.dealer})` }}
            role="img"
            aria-label="Agricultural dealer speaking with a farmer"
          />
          <div>
            <Eyebrow>PARTNER WITH AGRONEX</Eyebrow>
            <h2>
              Local knowledge.
              <br />
              <em>Shared growth.</em>
            </h2>
            <p>
              We welcome enquiries from agricultural retailers and distribution
              partners. Tell us about your business and service area; our team
              will follow up to discuss the next steps.
            </p>
            <Link className="button button-dark" to ="#dealer-application">
              Apply to become a dealer <ArrowUpRight size={17} />
            </Link>
            <a className="dealer-phone" href="tel:+917734076003">
              <Phone size={16} /> Call +91 77340 76003
            </a>
          </div>
        </section>
        <section className="dealer-benefits">
          <div>
            <span>
              <Sprout />
            </span>
            <h3>Crop-care portfolio</h3>
            <p>
              Explore insect, disease and weed management products alongside
              growth solutions.
            </p>
          </div>
          <div>
            <span>
              <ShieldCheck />
            </span>
            <h3>Responsive coordination</h3>
            <p>
              Connect directly with AGRONEX to discuss product availability and
              dealer enquiries.
            </p>
          </div>
          <div>
            <span>
              <Wheat />
            </span>
            <h3>Local relationships</h3>
            <p>
              Bring local market knowledge to a partnership focused on
              agricultural communities.
            </p>
          </div>
        </section>
        <DealerApplication />
        <section className="dealer-contact-band">
          <div>
            <Eyebrow>START A CONVERSATION</Eyebrow>
            <h2>Let’s discuss your area.</h2>
          </div>
          <Link className="button button-light" to ="#dealer-application">
            Submit a dealer enquiry <ArrowUpRight size={17} />
          </Link>
        </section>
      </main>
    </Shell>
  );
}
export function Contact({ search = "" }) {
  const selectedSlug = new URLSearchParams(search).get("product") || "";
  const [form, setForm] = useState({
    name: "",
    phone: "",
    product: "",
    message: "",
  });
  useEffect(() => {
    if (selectedSlug)
      setForm((current) => ({ ...current, product: selectedSlug }));
  }, [selectedSlug]);
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const sendEnquiry = (e) => {
    e.preventDefault();
    const p = products.find((item) => item.slug === form.product);
    const enquiryType =
      p?.name ||
      (form.product === "dealer"
        ? "Dealer enquiry"
        : form.product === "other"
          ? "Other enquiry"
          : "General enquiry");
    const body = `AGRONEX CROP CARE ENQUIRY\nName: ${form.name}\nPhone: ${form.phone}\nProduct / enquiry: ${enquiryType}\n\nMessage: ${form.message}`;
    window.open(
      `https://wa.me/917734076003?text=${encodeURIComponent(body)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };
  return (
    <Shell>
      <main>
        <PageHero
          label="CONTACT AGRONEX"
          title={
            <>
              Contact the
              <br />
              <em>AGRONEX team.</em>
            </>
          }
          sub="For product information, dealer opportunities or general enquiries, please use the form below or call our team."
        />
        <section className="section contact-layout">
          <div className="contact-left">
            <div className="contact-cards">
              <a href="tel:+917734076003">
                <Phone />
                <small>CALL US</small>
                <strong>+91 77340 76003</strong>
                <ArrowUpRight />
              </a>
              <a href={mapsUrl} target="_blank" rel="noreferrer">
                <MapPin />
                <small>OPEN IN GOOGLE MAPS</small>
                <strong>
                  Plot No. 2937,
                  <br />
                  Village: DTR, LGD Code: 32753,
                  <br />
                  Sirsa, Haryana 125076
                </strong>
                <ArrowUpRight />
              </a>
            </div>
            <div className="contact-social">
              <Eyebrow>FOLLOW AGRONEX</Eyebrow>
              <a
                className="text-link"
                href="https://www.facebook.com/share/1JDCgwbFWn/"
              >
                Facebook <ArrowUpRight size={17} />
              </a>
              <a
                className="text-link"
                href="https://www.instagram.com/agronex_crop_care?stkn=MXRzYTRhOXR1czQ5NQ=="
              >
                Instagram <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
          <div className="contact-form-wrap">
            <Eyebrow>PRODUCT & DEALER ENQUIRIES</Eyebrow>
            <h2>
              Send an
              <br />
              <em>enquiry.</em>
            </h2>
            <form className="enquiry-form" onSubmit={sendEnquiry}>
              <label>
                Your name
                <input
                  name="name"
                  value={form.name}
                  onChange={update}
                  required
                  placeholder="Name"
                />
              </label>
              <label>
                Phone number
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={update}
                  required
                  placeholder="+91"
                />
              </label>
              <label>
                Product
                <select name="product" value={form.product} onChange={update}>
                  <option value="">Select a product (optional)</option>
                  {products.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.name}
                      {p.comingSoon ? " — Coming Soon" : ""}
                    </option>
                  ))}
                  <option value="dealer">Dealer enquiry</option>
                  <option value="other">Other enquiry</option>
                </select>
              </label>
              <label className="field-wide">
                Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={update}
                  required
                  rows={4}
                  placeholder="Tell us what you would like to know"
                />
              </label>
              <button className="button button-dark" type="submit">
                Send enquiry <ArrowUpRight size={17} />
              </button>
              <small className="form-note">
                WhatsApp will open with your enquiry ready for review and
                sending.
              </small>
            </form>
          </div>
        </section>
      </main>
    </Shell>
  );
}


export function NotFound() {
  return (
    <Shell>
      <main>
        <PageHero
          label="404 · PAGE NOT FOUND"
          title={
            <>
              This page
              <br />
              <em>is unavailable.</em>
            </>
          }
          sub="The link may have changed. Visit the AGRONEX homepage or browse our crop-care products."
        />
        <section className="section">
          <Link className="button button-dark" to="/">
            Return to homepage <ArrowUpRight size={17} />
          </Link>
          <Link className="text-link not-found-link" to="/products">
            Browse products <ArrowRight size={17} />
          </Link>
        </section>
      </main>
    </Shell>
  );
}
