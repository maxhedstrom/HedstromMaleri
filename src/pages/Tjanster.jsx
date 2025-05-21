import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/hem.css";
import InfoCard from "/src/components/ui/infoCard";
import fallBackTjanster from "../data/fallbacktjanster";
import { getUrl } from "../utils/api";

function Tjanster() {
  const [tjanster, setTjanster] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getUrl("/api/get-services"));
        if (!res.ok) {
          throw new Error("Tjänster kunde inte hämtas från backend.");
        }
        const data = await res.json();
        setTjanster(data);
      } catch (error) {
        console.error("Kunde inte hämta tjänster:", error);
        setTjanster(fallBackTjanster);
      }
    };

    fetchData();

    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "Hedström Måleri AB",
      "url": "https://hedstrommaleri.se",
       "logo": "https://hedstrommaleri.se/logo-med-farg.png",  

    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Måleritjänster",
      "itemListElement": tjanster.map((tjanst, index) => ({
        "@type": "OfferCatalog",
        "name": tjanst.title,
        "itemListElement": {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": tjanst.title,
            "description": tjanst.description,
            "image": tjanst.image || "https://hedstrommaleri.se/logo-med-farg.png",
            "url": `https://hedstrommaleri.se/tjanster#tjanst-${index}`
          }
        }
      }))
    }
  };

  return (
    <>
      <Helmet>
        <title>Tjänster – Hedström Måleri AB | Målare i Örebro</title>
        <meta
          name="description"
          content="Upptäck Hedström Måleri AB:s professionella måleritjänster för byggföretag, bostadsrättföreningar och privatpersoner."
        />
        <link rel="preload" as="image" href="/images/bakgrundsbil-tvamalare.webp" />

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <header
        style={{
          backgroundImage: `linear-gradient(rgba(4,9,30,0.7), rgba(4,9,30,0.7)), url("/images/bakgrundsbil-tvamalare.webp")`,
        }}
        className="relative min-h-[60vh] w-full bg-no-repeat bg-center bg-cover flex items-center justify-center px-4 text-center"
      >
        <h1 className="text-white text-3xl md:text-4xl font-semibold max-w-2xl">Tjänster</h1>
      </header>

      <main>
        <section className="w-11/12 md:w-5/5 mx-auto text-center py-16 px-4" aria-labelledby="tjanster-header">
          <h2 id="tjanster-header" className="text-[var(--rubrik-color)] text-3xl md:text-4xl font-semibold text-center mb-4">
            Vi arbetar både åt byggföretag, bostadsrättföreningar och privatpersoner.
            <br />
            <br />
          </h2>
          <h3 className="text-black text-2xl font-extralight text-center mb-12">
            Nedan kan du läsa mer om vilka tjänster vi erbjuder och hur vi kan hjälpa dig.
          </h3>

          {tjanster.map((tjanst, index) => (
            <div id={`tjanst-${index}`} key={index}>
              <InfoCard
                title={tjanst.title}
                description={tjanst.description}
                image={tjanst.image || "/src/assets/bilder/default.jpg"}
                linkText={tjanst.linkText || "Kontakta oss för en offert!"}
                link={tjanst.link || "/kontakt"}
                reverse={tjanst.reverse}
                className="border"
              />
            </div>
          ))}

          <h3 className="text-black text-2xl font-extralight text-center mt-16">
            Har du frågor eller vill ha en offert? <br /> Tveka inte att kontakta oss!
          </h3>
          <a
            href="/kontakt"
            className="text-[var(--rubrik-color)] text-xl font-semibold mt-5 inline-block"
          >
            Kontakta oss
          </a>
        </section>
      </main>
    </>
  );
}

export default Tjanster;
