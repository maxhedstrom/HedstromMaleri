import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import fallbackTimeline from "../data/fallbacktimeline";
import altLogo from "/src/assets/bilder/altLogo.jpg";
import { getUrl } from "../utils/api";

const Projekt = () => {
  const [timeline, setTimeline] = useState([]);
  const timelineRef = useRef(null);
  const redLineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current && redLineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const offsetTop = rect.top + window.scrollY;
        const visibleHeight = rect.height;
        const scrollY = window.scrollY;
        const scrollProgress = (scrollY - offsetTop + windowHeight * 0.4) / visibleHeight;
        const speedFactor = 1.0;
        const newHeight = Math.min(Math.max(0, scrollProgress * 100 * speedFactor), 100);
        redLineRef.current.style.height = `${newHeight}%`;
      }
    };

    let ticking = false;
    const optimizedScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", optimizedScroll);
    return () => window.removeEventListener("scroll", optimizedScroll);
  }, []);

  useEffect(() => {
    fetch(getUrl("/api/get-projekt"))
      .then((res) => {
        if (!res.ok) throw new Error("Kunde inte hämta från backend");
        return res.json();
      })
      .then((data) => setTimeline(data))
      .catch((err) => {
        console.error("Använder fallback:", err);
        setTimeline(fallbackTimeline);
      });
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hedström Måleri AB",
    url: "https://hedstrommaleri.se",
    logo: "https://hedstrommaleri.se/logo-med-farg.png",    
    project: timeline.map((event) => ({
      "@type": "CreativeWork",
      name: `Projekt år ${event.year}`,
      description: event.text,
      datePublished: `${event.year}`,
      image: "https://hedstrommaleri.se/logo-med-farg.png",
      url: "https://hedstrommaleri.se/projekt",
    })),
  };

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href="/images/projekt.webp" />

        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
        <title>Våra projekt – Hedström Måleri AB | Målare i Örebro</title>
        <meta
          name="description"
          content="Utforska våra projekt och historik på Hedström Måleri AB, med över 35 års erfarenhet inom måleri."
        />
      </Helmet>

      <header
        style={{
          backgroundImage: `linear-gradient(rgba(4,9,30,0.7), rgba(4,9,30,0.7)), url("/images/projekt.webp")`,
        }}
        className="relative min-h-[60vh] w-full bg-no-repeat bg-top md:bg-center bg-cover flex items-center justify-center px-4 text-center"
      >
        <h1 className="text-white text-3xl md:text-4xl font-semibold max-w-2xl">
          Våra projekt
        </h1>
      </header>

      <main>
        <section
          className="w-3/4 md:w-5/5 lg:w-8/9 mx-auto text-center pt-[100px]"
          aria-labelledby="projekt-header"
        >
          <h2
            id="projekt-header"
            className="text-[var(--rubrik-color)] text-4xl font-semibold text-center mb-6"
          >
            Här kan du läsa om vår stolta historia och se ett urplock av våra projekt
            genom åren.
          </h2>

          <p className="text-[var(--text-color)] text-[14px] font-light leading-[22px] p-[10px] max-w-3xl mx-auto">
            Företaget ägs och drivs av Peter Hedström som har över 35 års erfarenhet i
            branschen. Vi är stolta över att kunna visa upp ett urval av våra mest
            framgångsrika och kvalitativa måleriprojekt.
          </p>

          <section
            id="timeline"
            className="relative flex flex-col items-center py-10"
            aria-label="Tidslinje över projekt"
          >
            <div ref={timelineRef} className="relative w-full max-w-4xl">
              <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 transform -translate-x-1/2">
                <div
                  ref={redLineRef}
                  className="absolute w-full bg-red-500 transition-all duration-300 ease-out top-0"
                  style={{ height: "0%" }}
                />
              </div>

              {timeline.map((event, index) => (
                <article
                  key={index}
                  className={`relative flex items-center w-full mb-10 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                  aria-labelledby={`event-year-${index}`}
                  tabIndex="0"
                >
                  <div className="w-3/4 md:w-1/2">
                    <h3
                      id={`event-year-${index}`}
                      className={`text-lg font-semibold text-[var(--rubrik-color)] mb-2 ${
                        index % 2 === 0 ? "mr-33 md:mr-10" : "ml-33 md:ml-10"
                      }`}
                    >
                      {event.year}
                    </h3>
                    <p
                      className={`text-[var(--text-color)] text-sm md:text-base mb-4 ${
                        index % 2 === 0 ? "mr-33 md:mr-10" : "ml-33 md:ml-10"
                      }`}
                    >
                      {event.text}
                    </p>
                  </div>
                  <img
                    src={altLogo}
                    alt={`Ikon för projekt år ${event.year}`}
                    className="w-20 h-20 rounded-full absolute left-1/2 transform -translate-x-1/2 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </article>
              ))}
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Projekt;
