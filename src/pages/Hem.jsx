import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import ServiceCard from "/src/components/ui/ServiceCard";
import fallbackhomeservices from "../data/fallbackhomeservices";
import { getUrl } from "../utils/api";
import kommun from "../assets/bilder/kommun-logo.png";
import sorby from "../assets/bilder/sorby-logo.png";
import uni from "../assets/bilder/universitetet-logo.png";
import "../styles/hem.css";

const Hem = () => {
  const [services, setServices] = useState([]);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    axios
      .get(getUrl("/api/get-home-services"))
      .then((res) => setServices(res.data))
      .catch((err) => {
        console.error("Fel vid hämtning av tjänster:", err);
        setServices(fallbackhomeservices);
        setUsingFallback(true);
      });
  }, []);

  return (
    <>
      <Helmet>
                      {/* SEO optimering  */}
        <title>Hedström Måleri AB – Din målare i Örebro</title>
        <meta
          name="description"
          content="Letar du efter en erfaren målare i Örebro? Hedström Måleri AB erbjuder kvalitetsmåleri till privatpersoner och företag i hela Närke."
        />
        <meta
          name="keywords"
          content="målare Örebro, tapetsering, fasadmålning, inomhusmålning, Hedström Måleri, måleri Närke"
        />
        <meta name="author" content="Hedström Måleri AB" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Hedström Måleri AB",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Exempelgatan 12",
              addressLocality: "Örebro",
              addressRegion: "SE",
              postalCode: "70361"
            },
            url: "https://www.hedstrommaleri.se",
            telephone: "+4619123456",
            description:
              "Målare i Örebro som erbjuder inomhusmålning, fasadmålning och tapetsering i hela Närke.",
            image: "https://www.hedstrommaleri.se/assets/hedstrombil.jpg"
          })}
        </script>
          <link rel="preload" as="image" href="images/hedstrombil.jpg" />
      </Helmet>

      <header
        className="relative min-h-screen w-full bg-no-repeat bg-top md:bg-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(4,9,30,0.7), rgba(4,9,30,0.7)), url("images/hedstrombil.jpg")`,
        }}
      ></header>

      <div className="w-[90%] lg:w-3/5 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-[var(--first-color)] text-[32px] md:text-[42px] lg:text-[42px]">
          Välkommen till Hedström Måleri AB
        </h1>
        <p className="mt-[10px] mb-[40px] text-[18px] md:text-[24px] lg:text-[20px]">
          Ett litet familjeföretag med fokus på kvalité och nöjda kunder.
        </p>
        <a
          href="/kontakt"
          className="inline-block no-underline text-white border border-white py-3 px-6 md:px-8 text-[19px] md:text-[24px] lg:text-[20px] bg-transparent cursor-pointer hover:border-[#f44336] hover:bg-[#f44336] transition duration-1000"
        >
          Kontakta oss för en offert!
        </a>
      </div>

      {/* TJÄNSTER */}
      <section className="w-4/5 mx-auto text-center pt-[100px]">
        <h2 className="text-[var(--rubrik-color)] text-4xl font-semibold">
          Tjänster vi erbjuder
        </h2>
        <p className="text-[var(--text-color)] text-[14px] font-light p-[10px]">
          Vi erbjuder ett antal olika tjänster för privatpersoner och företag.
        </p>

        <div className="mt-[5%] flex flex-col md:flex-row justify-between">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.name}
              description={service.description}
            />
          ))}
        </div>
      </section>

      {/* GEOGRAFI */}
      <section className="w-4/5 mx-auto text-center pt-[100px]">
        <h2 className="text-[var(--rubrik-color)] text-4xl font-semibold">
          Var vi finns
        </h2>
        <p className="text-[var(--text-color)] text-[14px] font-light leading-[22px] p-[10px]">
          Hedström Måleri AB är baserat i Örebro, ett penseldrag från slottet. Vi utför arbeten i hela Närke med omnejd.
        </p>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="basis-[200%] rounded-[10px] mb-[30px] relative overflow-hidden">
            <img
              src= "images/slottet.jpg"
              alt="Örebro slott - närhet till Hedström Måleri AB"
              loading="lazy"
              className="w-full h-[60vh] object-center md:h-auto md:object-right object-cover"
            />
            <div className="bg-[rgba(166,170,184,0.7)] h-full w-full absolute top-0 group">
              <h3 className="w-full text-white font-bold text-[30px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:opacity-100">
                ÖREBRO
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* REFERENSER */}
      <section className="w-4/5 mx-auto text-center pt-[100px] mb-8">
        <div className="mb-8">
          <h2 className="text-[var(--rubrik-color)] text-4xl font-semibold">
            Utvalda uppdragsgivare
          </h2>
          <p className="text-[var(--text-color)] text-[14px] font-light leading-[22px] p-[10px]">
            Vi utför arbeten åt kunder, stora som små, och strävar alltid efter att leverera högsta kvalitet.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-[10px] text-center">
            <a href="https://www.orebro.se/">
              <img
                src={kommun}
                alt="Måleriuppdrag åt Örebro Kommun"
                loading="lazy"
                className="w-full h-[200px] object-contain rounded-[10px]"
              />
            </a>
            <h3 className="text-[var(--text-color)] mt-[10px] mb-[15px]">Örebro Kommun</h3>
          </div>
          <div className="rounded-[10px] text-center">
            <a href="#">
              <img
                src={sorby}
                alt="Målning av Sörbyskolan"
                loading="lazy"
                className="w-full h-[200px] object-contain rounded-[10px]"
              />
            </a>
            <h3 className="text-[var(--text-color)] mt-[10px] mb-[15px]">Sörbyskolan</h3>
          </div>
          <div className="rounded-[10px] text-center">
            <a href="https://www.oru.se/">
              <img
                src={uni}
                alt="Målning vid Örebro Universitet"
                loading="lazy"
                className="w-full h-[200px] object-contain rounded-[10px]"
              />
            </a>
            <h3 className="text-[var(--text-color)] mt-[10px] mb-[15px]">Örebro Universitet</h3>
          </div>
        </div>
      </section>

      {/* SEO-Text */}
      <section className="mt-12 px-4 max-w-4xl mx-auto text-center text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl text-[var(--text-rubrik)] font-semibold mb-2">Målare i Örebro med erfarenhet</h2>
        <p className="text-[var(--text-color)] mb-4">
           Vårt fokus ligger på kvalitetsmåleri för både privatpersoner, fastighetsägare och företag i hela Närke. Oavsett om du behöver hjälp med tapetsering, inomhusmålning, fasadmålning eller renovering så kan du räkna med oss.
           <br /> <br />
            Vi arbetar i bland annat Kumla, Hallsberg, Nora, Lindesberg och Askersund. Vår målsättning är alltid att leverera professionella resultat och att överträffa kundens förväntningar.
        </p>
      </section>
    </>
  );
};

export default Hem;
