// src/App.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

/* ============== CONFIG GLOBALE ============== */
const WHATSAPP_NUMBER = "22958718973";
const waLink = (text = "") => {
  const phone = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${phone}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
};
const buyOnWhatsApp = (p) => {
  const msg =
    `Bonjour BABA CODJO,\n` +
    `Je souhaite ACHETER : ${p.name} (${p.price}).\n` +
    `Catégorie : ${p.category}.\n\n` +
    `Pouvez-vous m’indiquer la marche à suivre pour le paiement et la livraison ?`;
  window.open(waLink(msg), "_blank", "noopener,noreferrer");
};

/* ============== UI BASIQUE RÉUTILISABLE ============== */
const Section = ({ id, children, bg }) => (
  <section id={id} className={`section ${bg || ""}`}>
    <div className="container">{children}</div>
  </section>
);

const Title = ({ children }) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="title"
  >
    {children}
  </motion.h2>
);

const Button = ({ href, onClick, children, variant = "primary" }) => {
  const Cmp = href ? "a" : "button";
  return (
    <Cmp
      href={href}
      onClick={onClick}
      className={`btn ${variant === "ghost" ? "btn-ghost" : "btn-primary"}`}
    >
      {children}
    </Cmp>
  );
};

/* ============== HEADER BURGER ============== */
function BurgerHeader() {
  const [open, setOpen] = useState(false);
  const handleNavClick = (e) => {
    if (e.target.matches('a[href^="#"]')) setOpen(false);
  };
  return (
    <header className="header">
      <nav className="nav">
        <strong className="brand">BABA CODJO</strong>

        {/* Menu desktop */}
        <ul className="menu desktop-only">
          <li><a href="#accueil">Accueil</a></li>
          <li><a href="#apropos">À propos</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#consultation">Consultation</a></li>
          <li><a href="#boutique">Boutique</a></li>
          <li><a href="#temoignages">Témoignages</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>

        {/* Bouton burger (mobile) */}
        <button
          className={`burger mobile-only ${open ? "is-open" : ""}`}
          aria-label="Ouvrir le menu"
          aria-expanded={open ? "true" : "false"}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? "open" : ""}`}
        onClick={handleNavClick}
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <ul>
          <li><a href="#accueil">Accueil</a></li>
          <li><a href="#apropos">À propos</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#consultation">Consultation</a></li>
          <li><a href="#boutique">Boutique</a></li>
          <li><a href="#temoignages">Témoignages</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </div>
    </header>
  );
}

/* ============== TÉMOIGNAGES ============== */
function TestimonialsSection() {
  const items = [
    {
      id: "fr-paris-sandra",
      name: "Sandra M.",
      city: "Paris",
      country: "France 🇫🇷",
      role: "Assistante de direction",
      short:
        "J’avais perdu tout espoir avec mon compagnon. La guidance m’a permis de retrouver le calme et une vraie communication.",
      full:
        "Au départ, je doutais. Mais dès la première consultation, j’ai senti un apaisement. Les conseils étaient précis et adaptés. En moins de deux semaines, les tensions ont baissé et nous avons repris un dialogue sincère. Je recommande à ceux qui veulent avancer sans se perdre.",
      img: "/testimonials/sandra.jpg",
    },
    {
      id: "es-madrid-edouard",
      name: "Édouard R.",
      city: "Madrid",
      country: "Espagne 🇪🇸",
      role: "Commerçant",
      short:
        "Mon commerce tournait au ralenti. Les blocages ont été identifiés et j’ai appliqué les rituels conseillés.",
      full:
        "Honnêtement, j’étais sceptique. Pourtant, après la purification et quelques ajustements concrets, j’ai vu un changement dans l’ambiance du magasin et la clientèle. Les ventes ont redémarré progressivement, puis nettement. Le suivi est sérieux et motivant.",
      img: "/testimonials/edouard.jpg",
    },
    {
      id: "de-berlin-melissa",
      name: "Mélissa M.",
      city: "Berlin",
      country: "Allemagne 🇩🇪",
      role: "Étudiante",
      short:
        "Je dormais mal, anxieuse. La purification énergétique m’a fait un bien fou.",
      full:
        "On m’a expliqué clairement d’où venaient les charges lourdes que je portais sans le savoir. Après le rituel et quelques habitudes à mettre en place, j’ai retrouvé un sommeil plus stable et l’esprit plus léger. Je me sens recentrée et confiante pour la suite.",
      img: "/testimonials/melissa.jpg",
    },
    {
      id: "it-milan-julie",
      name: "Julie A.",
      city: "Milan",
      country: "Italie 🇮🇹",
      role: "Styliste",
      short:
        "Le coffret Réconciliation nous a aidés à apaiser notre relation et à recréer des moments de complicité.",
      full:
        "J’ai apprécié la simplicité des instructions et la clarté du suivi. On avance étape par étape, sans pression. Les tensions se sont calmées et on a retrouvé de l’écoute. C’est un vrai accompagnement, humain et respectueux.",
      img: "/testimonials/julie.jpg",
    },
    {
      id: "fr-lyon-michel",
      name: "Michel D.",
      city: "Lyon",
      country: "France 🇫🇷",
      role: "Ingénieur",
      short:
        "Accompagnement très clair. La voyance m’a aidé à comprendre mes blocages et à faire des choix posés.",
      full:
        "J’avais besoin d’orientation. Les réponses étaient précises, avec des actions réalistes. Je me sens plus serein dans mes décisions. Le respect et la discrétion sont au rendez-vous.",
      img: "/testimonials/michel.jpg",
    },
    {
      id: "es-barcelona-aminata",
      name: "Aminata K.",
      city: "Barcelone",
      country: "Espagne 🇪🇸",
      role: "Entrepreneure",
      short:
        "J’ai rencontré quelqu’un de bien après un travail d’ouverture de chemins et de confiance en moi.",
      full:
        "Le processus a été progressif et personnalisé. On m’a expliqué le ‘pourquoi’ et le ‘comment’ sans promesses irréalistes. Résultat : je me sens alignée, j’attire de meilleures rencontres et j’avance.",
      img: "/testimonials/aminata.jpg",
    },
  ];

  const [expanded, setExpanded] = React.useState({});
  const toggle = (id) => setExpanded((s) => ({ ...s, [id]: !s[id] }));

  return (
    <>
      <Title>Ils m’ont fait confiance</Title>

      <div className="t-badges">
        {["France 🇫🇷", "Espagne 🇪🇸", "Allemagne 🇩🇪", "Italie 🇮🇹"].map((b) => (
          <span key={b} className="t-badge">{b}</span>
        ))}
      </div>

      <div className="t-grid">
        {items.map((t, i) => (
          <motion.article
            key={t.id}
            className={`t-card ${expanded[t.id] ? "t-card--open" : ""}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <div className="t-media">
              {t.img ? (
                <img src={t.img} alt={`${t.name} — ${t.city}, ${t.country}`} />
              ) : (
                <div className="t-fallback">
                  {t.name.split(" ").map(w => w[0]).join("").slice(0,2)}
                </div>
              )}
            </div>

            <div className="t-body">
              <div className="t-top">
                <div className="t-id">
                  <div className="t-name">{t.name}</div>
                  <div className="t-meta">
                    {t.city} • {t.country}{t.role ? ` • ${t.role}` : ""}
                  </div>
                </div>
                <div className="t-quote">“</div>
              </div>

              <p className="t-text">
                {expanded[t.id] ? t.full : t.short}
              </p>

              <div className="t-actions">
                <button className="btn btn-ghost" onClick={() => toggle(t.id)}>
                  {expanded[t.id] ? "Lire moins" : "Lire plus"}
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </>
  );
}

/* ============== DONNÉES BOUTIQUE ============== */
/* Place les images dans /public/products/ avec ces noms */
const PRODUCTS = [
  // Produit du mois
  {
    id: "coffret-reconciliation",
    category: "Produit du mois",
    name: "Coffret Réconciliation",
    price: "82,90 €",
    desc:
      "Pack spécial retour affectif : fiole retour affectif, bougie rouge d’attraction, grigri d’amour artisanal, notice incluse. Consultation express gratuite (nouveaux clients – ce mois-ci).",
    img: "/products/coffret-reconciliation.jpg",
    featured: true,
  },

  // Protection et énergie
  { id: "amulette-protection", category: "Protection et énergie", name: "Amulette de protection", price: "16,60 €", desc: "Petit sachet cuir avec racines, herbes et coquillages. Protège du mauvais œil et des attaques invisibles.", img: "/products/amulette-protection.jpg" },
  { id: "bougie-blanche-purification", category: "Protection et énergie", name: "Bougie blanche de purification", price: "8,80 €", desc: "Purifie les lieux et nettoie les énergies lourdes.", img: "/products/bougie-blanche-purification.jpg" },
  { id: "encens-santal-africain", category: "Protection et énergie", name: "Encens bois de santal africain", price: "6,30 €", desc: "Pour purifier la maison et le corps.", img: "/products/encens-santal-africain.jpg" },
  { id: "obsidienne-africaine", category: "Protection et énergie", name: "Cristal Obsidienne africaine", price: "6,10 €", desc: "Éloigne les vibrations négatives et renforce la confiance.", img: "/products/obsidienne-africaine.jpg" },
  { id: "bracelet-protection-perles", category: "Protection et énergie", name: "Bracelet de protection perles africaines", price: "110,60 €", desc: "Protection puissante au quotidien.", img: "/products/bracelet-protection-perles.jpg" },
  { id: "grigri-protection", category: "Protection et énergie", name: "Grigri de protection", price: "9,60 €", desc: "Éloigne malchance et malveillance.", img: "/products/grigri-protection.jpg" },

  // Chance et prospérité
  { id: "poudre-prosperite", category: "Chance et prospérité", name: "Poudre de prospérité", price: "35,30 €", desc: "Attire argent, réussite et opportunités.", img: "/products/poudre-prosperite.jpg" },
  { id: "bracelet-chance-perles", category: "Chance et prospérité", name: "Bracelet chance perles africaines", price: "241,60 €", desc: "Porte-bonheur puissant pour travail et business.", img: "/products/bracelet-chance-perles.jpg" },
  { id: "sachet-reussite-financiere", category: "Chance et prospérité", name: "Sachet Réussite financière", price: "76,90 €", desc: "Attire fortune et avancées professionnelles.", img: "/products/sachet-reussite-financiere.jpg" },
  { id: "statue-prosperite", category: "Chance et prospérité", name: "Statue prospérité africaine", price: "39,20 €", desc: "Objet sacré qui attire l’abondance.", img: "/products/statue-prosperite.jpg" },
  { id: "bougie-verte-richesse", category: "Chance et prospérité", name: "Bougie verte richesse", price: "53,80 €", desc: "Renforce l’énergie d’argent et la croissance financière.", img: "/products/bougie-verte-richesse.jpg" },
  { id: "encens-chance", category: "Chance et prospérité", name: "Encens de chance", price: "92,30 €", desc: "Active réussite rapide et ouverture de chemins.", img: "/products/encens-chance.jpg" },

  // Amour et relations
  { id: "fiole-retour-affectif", category: "Amour et relations", name: "Fiole retour affectif", price: "75,30 €", desc: "Pour rapprocher un ex ou raviver la flamme.", img: "/products/fiole-retour-affectif.jpg" },
  { id: "bougie-rouge-attraction", category: "Amour et relations", name: "Bougie rouge attraction", price: "133,80 €", desc: "Attire amour, passion et désir.", img: "/products/bougie-rouge-attraction.jpg" },
  { id: "grigri-amour", category: "Amour et relations", name: "Grigri d’amour", price: "37,60 €", desc: "Renforce la séduction et le lien amoureux.", img: "/products/grigri-amour.jpg" },
  { id: "collier-seduction", category: "Amour et relations", name: "Collier de séduction africaine", price: "126,10 €", desc: "Augmente le charisme et le pouvoir d’attraction.", img: "/products/collier-seduction.jpg" },
  { id: "sachet-ame-soeur", category: "Amour et relations", name: "Sachet Attirer l’âme sœur", price: "86,90 €", desc: "Aide à attirer un partenaire compatible.", img: "/products/sachet-ame-soeur.jpg" },
  { id: "bougie-rose-harmonie", category: "Amour et relations", name: "Bougie rose harmonie amoureuse", price: "63,80 €", desc: "Apaise les tensions et renforce la complicité.", img: "/products/bougie-rose-harmonie.jpg" },

  // Divination et guidance
  { id: "tarot-africain", category: "Divination et guidance", name: "Cartes de tarot africain", price: "12,20 €", desc: "Jeu traditionnel pour guidance.", img: "/products/tarot-africain.jpg" },
  { id: "pendule-radiesthesie", category: "Divination et guidance", name: "Pendule radiesthésie", price: "9,20 €", desc: "Pour des réponses rapides.", img: "/products/pendule-radiesthesie.jpg" },
  { id: "carnet-tirages-reves", category: "Divination et guidance", name: "Carnet tirages et rêves", price: "14,60 €", desc: "Pour noter visions et interprétations.", img: "/products/carnet-tirages-reves.jpg" },
  { id: "consultation-express", category: "Divination et guidance", name: "Consultation express", price: "23,80 €", desc: "Conseils rapides et guidance immédiate.", img: "/products/consultation-express.jpg" },
  { id: "consultation-complete", category: "Divination et guidance", name: "Consultation complète", price: "62,90 €", desc: "Lecture profonde et conseils personnalisés.", img: "/products/consultation-complete.jpg" },
  { id: "guide-rituels-africains", category: "Divination et guidance", name: "Guide de rituels africains", price: "35,30 €", desc: "Rituels simples de protection, amour et chance.", img: "/products/guide-rituels-africains.jpg" },

  // Objets rituels et traditionnels
  { id: "sachet-vodoun-protection-chance", category: "Objets rituels et traditionnels", name: "Sachet vodoun protection et chance", price: "128,40 €", desc: "Pour attirer chance et protection durable.", img: "/products/sachet-vodoun-protection-chance.jpg" },
  { id: "plantes-racines-sacrees", category: "Objets rituels et traditionnels", name: "Plantes et racines sacrées", price: "195,30 €", desc: "Pour rituels d’amour, richesse et protection.", img: "/products/plantes-racines-sacrees.jpg" },
  { id: "encensoir-africain", category: "Objets rituels et traditionnels", name: "Encensoir africain", price: "66,90 €", desc: "Support pour brûler les encens sacrés.", img: "/products/encensoir-africain.jpg" },
  { id: "calebasse-rituelle", category: "Objets rituels et traditionnels", name: "Calebasse rituelle", price: "99,20 €", desc: "Utilisée dans rituels et cérémonies.", img: "/products/calebasse-rituelle.jpg" },
  { id: "tissu-rituel-africain", category: "Objets rituels et traditionnels", name: "Tissu rituel africain", price: "85,30 €", desc: "Support pour autels et protections.", img: "/products/tissu-rituel-africain.jpg" },
];

const CATEGORIES = [
  "Tous",
  "Produit du mois",
  "Protection et énergie",
  "Chance et prospérité",
  "Amour et relations",
  "Divination et guidance",
  "Objets rituels et traditionnels",
];

/* ============== BOUTIQUE ============== */
function Shop() {
  const FEATURED =
    PRODUCTS.find((p) => p.featured) || {
      id: "coffret-reconciliation",
      category: "Produit du mois",
      name: "Coffret Réconciliation",
      price: "82,90 €",
      desc:
        "Pack complet pour apaiser les tensions, raviver la flamme et favoriser la réconciliation amoureuse.",
      img: "/products/coffret-reconciliation.jpg",
      bullets: [
        "Fiole retour affectif",
        "Bougie rouge d’attraction",
        "Grigri d’amour artisanal",
        "Notice incluse",
        "Consultation express gratuite (nouveaux clients – ce mois-ci)",
      ],
    };

  const [activeCat, setActiveCat] = useState("Tous");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = PRODUCTS.filter((p) => {
    const okCat = activeCat === "Tous" || p.category === activeCat;
    const okSearch =
      !query ||
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.desc.toLowerCase().includes(query.toLowerCase());
    return okCat && okSearch;
  });

  const initials = (label = "") => {
    const w = label.trim().split(/\s+/);
    return ((w[0]?.[0] || "") + (w[1]?.[0] || "")).toUpperCase();
  };

  return (
    <>
      {/* Produit du mois en GRAND */}
      <div
        className="product-featured"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(280px, 360px) 1fr",
          gap: 18,
          margin: "16px auto 28px",
          maxWidth: 1000,
        }}
      >
        <div className="product-media" style={{ borderRadius: 16, overflow: "hidden", background: "#f5f5f5" }}>
          {FEATURED.img ? (
            <img
              src={FEATURED.img}
              alt={FEATURED.name}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          ) : (
            <div className="product-thumb--fallback" data-fallback="PM" aria-label={FEATURED.name} />
          )}
        </div>
        <div>
          <h3 style={{ margin: "0 0 6px 0", fontSize: 22, fontWeight: 800 }}>{FEATURED.name}</h3>
          <div style={{ fontWeight: 800, color: "var(--amber-700)", marginBottom: 10, fontSize: 18 }}>
            {FEATURED.price}
          </div>
          <p className="card-text">{FEATURED.desc}</p>
          {Array.isArray(FEATURED.bullets) && (
            <ul className="list" style={{ marginBottom: 12 }}>
              {FEATURED.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          )}
          <button className="btn btn-primary" onClick={() => buyOnWhatsApp(FEATURED)}>
            Acheter maintenant
          </button>
        </div>
      </div>

      {/* Filtres + recherche */}
      <div className="shop-toolbar">
        <div className="shop-filters">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`pill ${activeCat === c ? "pill-active" : ""}`}
              onClick={() => setActiveCat(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <input
          className="input shop-search"
          placeholder="Rechercher un produit…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Grille produits */}
      {filtered.length === 0 ? (
        <div className="muted">Aucun produit ne correspond à votre recherche.</div>
      ) : (
        <div className="shop-grid">
          {filtered.map((p) => (
            <div key={p.id} className="prod-card" onClick={() => setSelected(p)} role="button">
              <div className="prod-img-wrap">
                {p.img ? (
                  <img className="prod-img" src={p.img} alt={p.name} />
                ) : (
                  <div className="product-thumb--fallback" data-fallback={initials(p.name)} />
                )}
              </div>
              <div className="prod-body">
                <div className="product-cat" style={{ fontSize: 12, color: "#8c8c8c" }}>{p.category}</div>
                <h4 className="prod-title">{p.name}</h4>
                <p className="prod-desc">{p.desc}</p>
                <div className="prod-row">
                  <div className="prod-price">{p.price}</div>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      buyOnWhatsApp(p);
                    }}
                  >
                    Acheter
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal produit */}
      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>✕</button>
            <div className="modal-body">
              <div className="modal-thumb">
                {selected.img ? (
                  <img src={selected.img} alt={selected.name} />
                ) : (
                  <div className="product-thumb--fallback" data-fallback={initials(selected.name)} />
                )}
              </div>
              <div>
                <h3 className="modal-title">{selected.name}</h3>
                <div className="modal-price">{selected.price}</div>
                <p className="modal-desc">{selected.desc}</p>
                <button className="btn btn-primary" onClick={() => buyOnWhatsApp(selected)}>
                  Acheter sur WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ============== FAQ ============== */
const FAQS = [
  { q: "Comment fonctionne une consultation ?", a: "Vous m’expliquez votre situation (contexte, objectifs, contraintes). Je fais une lecture énergétique et une analyse de vos blocages, puis je vous oriente clairement : actions prioritaires, rituels possibles, délai réaliste et recommandations concrètes." },
  { q: "La consultation gratuite est-elle réelle ?", a: "Oui : 5 minutes d’analyse pour faire le point rapidement et vérifier si je peux vous aider. Si votre cas le nécessite, je vous proposerai une séance complète de 60 minutes pour aller au fond des choses." },
  { q: "Travaillez-vous à distance ?", a: "Oui, mes consultations et travaux se font partout dans le monde. Les suivis se font par WhatsApp pour répondre vite et adapter le travail si besoin." },
  { q: "En combien de temps puis-je voir des résultats ?", a: "Chaque histoire est unique. Certains ressentent une amélioration en quelques jours, d’autres sur un temps plus progressif. Je vous donne un délai réaliste selon votre situation et je fais un suivi." },
  { q: "La confidentialité est-elle garantie ?", a: "Totale. Vos informations ne sont jamais partagées. Les échanges, photos et détails personnels restent strictement confidentiels." },
  { q: "Comment commander un produit ou un rituel ?", a: "Cliquez sur “Acheter” dans la boutique ou utilisez le bouton WhatsApp. Votre message contient déjà le nom du produit et le prix ; je vous explique la marche à suivre pour le paiement et la livraison." },
  { q: "Livraison et paiement", a: "Livraison disponible dans plusieurs pays. Les moyens de paiement varient selon votre pays (détails envoyés sur WhatsApp). Les rituels sont confirmés après paiement afin de réserver votre créneau." },
  { q: "Les résultats sont-ils garantis ?", a: "Je travaille sérieusement et avec transparence ; les résultats dépendent de votre histoire, de votre implication et du contexte énergétique. Mon rôle est de maximiser vos chances et de vous guider honnêtement." },
  { q: "Quel service est le mieux pour moi ?", a: "Commencez par une consultation. Elle permet d’éviter les dépenses inutiles et de choisir exactement le travail le plus adapté à votre cas." },
];

function FAQItem({ item, index }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={`faq-item ${open ? "faq-open" : ""}`}>
      <button
        className="faq-q"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`faq-a-${index}`}
      >
        <span>{item.q}</span>
        <span className="chev" aria-hidden>{open ? "▾" : "▸"}</span>
      </button>
      <div id={`faq-a-${index}`} className="faq-a" style={{ maxHeight: open ? "500px" : "0px" }}>
        <div className="faq-a-inner">{item.a}</div>
      </div>
    </div>
  );
}

/* ============== APP ============== */
export default function App() {
  return (
    <div className="app">
      <Helmet>
        <title>Grand Marabout Voyant BABA CODJO</title>
        <meta
          name="description"
          content="Retour affectif, protection, ouverture de chemins, consultations et boutique consacrée – BABA CODJO."
        />
        <link rel="preload" as="image" href="/hero-2025.jpg" />
      </Helmet>

      {/* WhatsApp flottant */}
      <a className="wa-fab" href={waLink("Bonjour, je souhaite des informations.")} aria-label="WhatsApp">💬</a>

      {/* Header burger */}
      <BurgerHeader />

      {/* Décos flottantes */}
      <div className="floaters" aria-hidden>
        {["✦", "✧", "ⵣ", "⚕", "🜂", "🜄"].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.35, y: [0, -10, 0] }}
            transition={{ duration: 6 + i, repeat: Infinity }}
            className="floater"
            style={{ top: `${10 + i * 12}%`, left: `${8 + i * 14}%` }}
          >
            {s}
          </motion.div>
        ))}
      </div>

      <main>
        {/* 1) ACCUEIL — avec background */}
        <Section id="accueil" bg="bg-hero">
          {/* Titre à gauche, texte + boutons centrés */}
          <div className="center" style={{ display: "grid", gap: 14 }}>
            <h1 className="hero-title-left" style={{ justifySelf: "start" }}>
              Grand Marabout Voyant<br />
              <span className="hero-name">BABA CODJO</span>
            </h1>

            <p className="lead">
              Expert en retour affectif, protection et ouverture de chemins.
              BABA CODJO met son savoir ancestral au service de votre situation
              pour des résultats rapides et fiables. Découvrez vos blocages
              et accédez aux solutions adaptées.
            </p>

            <div className="actions">
              <a className="btn btn-primary" href="#consultation">Consultation</a>
              <a className="btn btn-ghost" href="#boutique">Boutique</a>
            </div>
          </div>
        </Section>

        {/* 2) A PROPOS */}
        <Section id="apropos">
          <Title>Qui suis-je ? Grand Marabout Voyant BABA CODJO</Title>
          <p className="text about text">
            Je suis BABA CODJO, marabout voyant depuis mon enfance. Je viens d’une famille où la
            spiritualité, les visions et les rituels vaudou font partie de la vie depuis des générations.
            J’ai appris très tôt à comprendre les énergies, à lire les blocages invisibles et à guider
            les personnes dans les moments difficiles.
          </p>
          <p className="text about text">
            Je prends le temps d’écouter chaque personne. Chacun arrive avec une histoire, une souffrance,
            une question ou un blocage. Mon devoir est d’apporter clarté, apaisement et solution.
          </p>
          <p className="text about text">
            Je travaille avec sérieux, respect et discrétion. Mon objectif est simple : vous aider à retrouver
            stabilité, paix intérieure et résultats concrets.
          </p>
          <ul className="chips" style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 10 }}>
            {["Retour affectif","Protection spirituelle","Ouverture de chemins","Voyance intuitive","Purification énergétique"]
              .map((c) => (<li key={c} className="chip">{c}</li>))}
          </ul>
        </Section>

        {/* 3) SERVICES (2x2 + dernier centré) */}
        <Section id="services" bg="bg-soft">
          <Title>Mes Travaux Spirituels</Title>
          <p className="text center">Chaque situation est unique. Je choisis le rituel qui correspond réellement à votre cas.</p>
          <div className="services-grid">
            <div className="service-card">
              <h3 className="service-title">Retour affectif</h3>
              <p className="service-text">Pour ramener un ex, renforcer l’amour, apaiser les tensions et stabiliser la relation.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Protection spirituelle</h3>
              <p className="service-text">Pour éloigner les énergies négatives, les jalousies, les mauvais sorts et les blocages invisibles.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Ouverture de chemins</h3>
              <p className="service-text">Pour attirer réussite, argent, opportunités, chance et avancées rapides.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Purification énergétique</h3>
              <p className="service-text">Pour nettoyer les charges lourdes, rééquilibrer votre énergie et retrouver paix intérieure.</p>
            </div>
            <div className="service-card service-last">
              <h3 className="service-title">Voyance intuitive</h3>
              <p className="service-text">Lecture de votre situation, réponses claires, guidance et compréhension de vos blocages.</p>
            </div>
          </div>
          <div className="center" style={{ marginTop: 20 }}>
            <a href="#consultation" className="btn btn-primary">Je réserve une consultation</a>
          </div>
        </Section>

        {/* 4) CONSULTATION (fluide & esthétique) */}
        <Section id="consultation">
          <Title>Consultations avec BABA CODJO</Title>
          <motion.p
            className="consult-intro"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Lecture claire de votre situation, identification des blocages et orientation vers la solution la plus adaptée.
          </motion.p>

          <div className="consult-grid">
            <motion.article
              className="plan plan--lite"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              <div className="plan-head">
                <span className="tag">Découverte</span>
                <h3 className="plan-title">Consultation gratuite</h3>
                <div className="plan-sub">5 minutes d’analyse</div>
              </div>
              <div className="divider" />
              <div className="perks">
                <div className="perk"><span className="perk-ico">🔎</span><div className="perk-text"><strong>Lecture instantanée</strong><span>Première vision globale de votre cas.</span></div></div>
                <div className="perk"><span className="perk-ico">🧭</span><div className="perk-text"><strong>Orientation claire</strong><span>Ce qui bloque & la meilleure suite à donner.</span></div></div>
                <div className="perk"><span className="perk-ico">🤝</span><div className="perk-text"><strong>Sans engagement</strong><span>Idéal pour un premier échange.</span></div></div>
              </div>
              <a
                className="btn btn-primary plan-cta"
                href={waLink("Je souhaite une consultation découverte gratuite (5 minutes).")}
                target="_blank" rel="noreferrer"
              >
                Commencer une consultation gratuite (5 minutes)
              </a>
            </motion.article>

            <motion.article
              className="plan plan--pro"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="plan-badge">Recommandé</div>
              <div className="plan-head">
                <span className="tag tag--pro">Séance complète</span>
                <h3 className="plan-title">Consultation approfondie</h3>
                <div className="plan-sub">60 minutes — <strong className="plan-price">50 €</strong></div>
              </div>
              <div className="divider" />
              <div className="perks">
                <div className="perk"><span className="perk-ico">🪬</span><div className="perk-text"><strong>Lecture approfondie</strong><span>Analyse des énergies & des influences invisibles.</span></div></div>
                <div className="perk"><span className="perk-ico">🧩</span><div className="perk-text"><strong>Plan d’action personnalisé</strong><span>Conseils précis, étapes et rituels adaptés.</span></div></div>
                <div className="perk"><span className="perk-ico">⚡</span><div className="perk-text"><strong>Résultats concrets</strong><span>Avancées rapides vers vos objectifs.</span></div></div>
              </div>
              <a
                className="btn btn-primary plan-cta"
                href={waLink("Je veux réserver une séance complète (60 min) — 50 €. Indiquez-moi comment payer, s’il vous plaît.")}
                target="_blank" rel="noreferrer"
              >
                Réserver ma séance complète
              </a>
            </motion.article>
          </div>
        </Section>

        {/* 5) BOUTIQUE */}
        <Section id="boutique" bg="bg-shop">
          <Title>Boutique – Produits consacrés</Title>
          <p className="center">Tous les objets sont préparés et consacrés par BABA CODJO.</p>
          <Shop />
        </Section>

        {/* 6) TÉMOIGNAGES */}
        <Section id="temoignages">
          <TestimonialsSection />
        </Section>

        {/* 7) CONTACT (numéro non affiché) */}
        <Section id="contact" bg="bg-soft">
          <Title>Contactez BABA CODJO</Title>
          <p className="trust" style={{maxWidth: 720, margin: "0 auto 18px", textAlign: "justify"}}>
            Vous traversez une période délicate ? Je vous réponds avec sérieux, discrétion et bienveillance.
            Votre situation sera étudiée avec attention pour vous guider vers la solution la plus adaptée.
          </p>
          <div className="actions" style={{ marginTop: 10 }}>
            <a className="btn btn-primary" href={waLink("Bonjour BABA CODJO, j’ai besoin d’aide pour ma situation. Pouvez-vous m’orienter ?")}>
              Contacter
            </a>
            <a className="btn btn-ghost" href={waLink("Je souhaite commencer la consultation découverte gratuite (5 minutes).")}>
              Commencer une consultation gratuite (5 minutes)
            </a>
          </div>
          <p className="muted" style={{maxWidth: 720, margin: "14px auto 0"}}>
            Confidentialité totale — aucune information n’est partagée.
          </p>
        </Section>

        {/* 8) FAQ (accordéon) */}
        <Section id="faq">
          <Title>FAQ – Questions fréquentes</Title>
          <div className="faq-accordion">
            {FAQS.map((it, idx) => (<FAQItem key={idx} item={it} index={idx} />))}
          </div>
          <div className="actions" style={{ marginTop: 16 }}>
            <a className="btn btn-primary" href={waLink("J’ai une question sur votre travail / la boutique.")} target="_blank" rel="noreferrer">
              Poser une question
            </a>
          </div>
        </Section>

        {/* 9) Mentions légales */}
        <Section id="mentions" bg="bg-soft">
          <Title>Mentions légales & Confidentialité (résumé)</Title>
          <ul className="list">
            <li><strong>Propriétaire :</strong> BABA CODJO</li>
            <li><strong>Activité :</strong> Services spirituels et vente d’objets consacrés</li>
            <li><strong>Données :</strong> Aucune donnée n’est vendue ni partagée</li>
            <li><strong>Confidentialité :</strong> Totale</li>
            <li><strong>But :</strong> Guidance spirituelle uniquement</li>
          </ul>
        </Section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} BABA CODJO — Tous droits réservés.
      </footer>
    </div>
  );
}