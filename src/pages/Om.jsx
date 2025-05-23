import { useEffect, useState } from "react";
import { FaSortAmountUpAlt } from "react-icons/fa";
import InfoCard from "/src/components/ui/infoCard";
import fallbackPersonal from "../data/fallbackpersonal";
import { getUrl } from "../utils/api";
import hedstrombil2 from "../assets/bilder/hedstrombil2.jpg";
import { Helmet } from "react-helmet";

const Personal = ({ person }) => {
  const [expanded, setExpanded] = useState(false);

  let buttonClasses =
    "absolute right-4 bottom-0 transform -translate-x-1/2 duration-[1200ms] ease-in-out text-3xl text-white transition-all cursor-pointer";
  let buttonIcon = (
    <div
      className={`relative transition-transform duration-[1200ms] ease-in-out ${
        expanded ? "delay-300 rotate-180 translate-y-2" : "translate-y-0"
      }`}
    >
      <FaSortAmountUpAlt />
    </div>
  );

  if (expanded) {
    buttonClasses += " top-[66%] md:top-[74%] -translate-y-1/2";
  } else {
    buttonClasses += " top-[97%] translate-y-0";
  }

  return (
    <div className="bg-[var(--text-color)] shadow-lg rounded-lg overflow-hidden flex flex-col relative h-[600px] md:h-[540px] 2xl:h-[700px] max-w-xs md:max-w-sm 2xl:max-w-lg">
      <div
        className="relative h-[85%] bg-cover bg-center"
        style={{ backgroundImage: `url(${person.image})` }}
      >
        {/* Lägg till osynlig img för SEO och tillgänglighet */}
        <img
          src={person.image}
          alt={`Porträtt av ${person.name}, ${person.role}`}
          className="sr-only"
          aria-hidden="false"
        />

        <div
          className={`absolute bottom-0 left-0 w-full bg-[var(--text-color)] bg-opacity-90 text-white flex flex-col justify-center items-center p-4 transition-all duration-[1200ms] ease-in-out ${
            expanded ? "h-1/3 md:h-1/4 translate-y-0" : "md:h-[20%] translate-y-full"
          }`}
        >
          <div className="mb-4">
            <h3 className="2xl:text-3xl font-bold">{person.name}</h3>
            <p className="text-xl font-semibold">{person.role}</p>
            <p>{person.email}</p>
          </div>

          <div
            className={`bg-[var(--text-color)] mb-[-90px] w-full text-center transition-opacity duration-[1200ms] ease-in-out ${
              expanded ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <p className="text-sm">{person.description}</p>
          </div>
        </div>

        <button onClick={() => setExpanded(!expanded)} className={buttonClasses}>
          {buttonIcon}
        </button>
      </div>
    </div>
  );
};

const Om = () => {
  const [personal, setPersonal] = useState([]);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    fetch(getUrl("personal"))
      .then((res) => {
        if (!res.ok) throw new Error("Kunde inte hämta från backend");
        return res.json();
      })
      .then((data) => setPersonal(data))
      .catch((err) => {
        console.error("Använder fallback:", err);
        setPersonal(fallbackPersonal);
        setUsingFallback(true);
      });
  }, []);

  return (
    <>
      <Helmet>
                      {/* SEO optimering  */}
        <title>Om oss – Hedström Måleri AB | Målare i Örebro</title>
        <meta
          name="description"
          content="Lär känna teamet bakom Hedström Måleri AB – ett familjeföretag med över 35 års erfarenhet inom måleri i Örebro. Läs om vår historia och vårt engagemang."
        />
        <link rel="preload" as="image" href="/images/slottet.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Hedström Måleri AB",
            url: "https://hedstrommaleri.se.se",  
            logo: "https://hedstrommaleri.se/logo-med-farg.png",   
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+46 736 00 20 47",
                contactType: "customer service",
                areaServed: "SE",
                availableLanguage: "Swedish",
              },
            ],
            employee: personal.map((p) => ({
              "@type": "Person",
              name: p.name,
              jobTitle: p.role,
              email: p.email,
            })),
          })}
        </script>
      </Helmet>

      <header
        style={{
          backgroundImage: `linear-gradient(rgba(4,9,30,0.7), rgba(4,9,30,0.7)), url("/images/slottet.webp")`,
        }}
        className="relative min-h-[60vh] w-full bg-no-repeat bg-center bg-cover flex items-center justify-center px-4 text-center"
      >
        <h1 className="text-white text-3xl md:text-4xl font-semibold max-w-2xl">
          Kul att du vill veta mer om oss!
        </h1>
      </header>
      
      <section className="w-11/12 md:w-4/5 mx-auto text-center py-16 px-4">
        <div id="top" className="max-w-2xl mx-auto">
          <h1 className="text-[var(--rubrik-color)] text-2xl md:text-5xl font-semibold leading-tight">
            DITT MÅLERI MED FOKUS PÅ KVALITÉ OCH NÖJDA KUNDER
          </h1>
          <p className="text-[var(--text-color)] text-lg md:text-xl leading-relaxed pt-6">
            Välkommen till oss på Hedström Måleri, din helhetsleverantör för
            måleri. Baserade i Örebro, erbjuder vi hantverksskicklighet med hög
            kvalitet över hela Närkeslätten med omnejd. Oavsett om du representerar
            ett företag, arbetar inom offentlig sektor eller är privatperson, kan du
            räkna med ett resultat som lever upp till dina höga förväntningar.
          </p>
        </div>
      </section>

      <InfoCard
        image={hedstrombil2}
        title="En väletablerad målerifirma"
        description="Hedström Måleri AB är ett familjeföretag med gedigen erfarenhet och ett starkt fokus på kundnöjdhet. Företaget grundades 2011 av Peter Hedström, som har över 35 års erfarenhet i branschen. Efter att ha arbetat på flera olika firmor valde han att starta sin egen verksamhet, med visionen att skapa ett företag där kvalitet, service och nära kundsamarbeten står i centrum.
        Idag drivs företaget av Peter Hedström tillsammans med Anton Hedström. Tillsammans kombinerar vi traditionellt hantverk med moderna metoder för att kunna erbjuda ett brett utbud av måleritjänster. Vi tar oss an allt från invändig och utvändig målning till tapetsering och specialanpassade uppdrag. På Hedström Måleri har vi ställning/liftutbildning och ID06.
        För oss är en bra kundrelation lika viktig som ett väl utfört arbete. Vi värdesätter tydlig kommunikation, trevlig service och respekt i varje projekt. Oavsett uppdrag strävar vi efter att leverera ett resultat vi och våra kunder kan vara stolta över.
        Genom åren har Hedström Måleri AB byggt upp ett starkt varumärke och ett gott rykte. Vi är stolta över att ha många återkommande kunder – både privatpersoner och företag – vilket vi ser som ett kvitto på vår höga standard och pålitlighet. Vill du läsa mer om våra projekt genom åren kan du klicka på knappen nedan."
        link="/projekt"
        linkText="Läs mer om våra projekt genom åren!"
        className="basis-full md:basis-[55%] min-h-[400px] h-full rounded-[10px] py-5 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)] text-center md:text-left flex flex-col justify-center gap-8"
        largeImage={true}
      />

      <section className="w-11/12 md:w-11/12 2xl:w-5/5 mx-auto text-center py-16 px-4 gap-7 overflow-hidden max-w-full">
        <h2 className="text-[var(--rubrik-color)] text-3xl md:text-4xl font-semibold mb-8">
          Det är vi som är Hedström Måleri!
        </h2>
        <div className="grid grid-cols-1 min-[650px]:grid-cols-2 min-[948px]:grid-cols-3 gap-10 py-16 px-4 justify-center items-center">
          {personal.map((person, index) => (
            <Personal key={index} person={person} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Om;
