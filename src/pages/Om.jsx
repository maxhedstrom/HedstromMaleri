import React, { useState } from "react";
  import "../styles/hem.css";
  import { FaSortAmountUpAlt } from "react-icons/fa";

  const TeamMember = ({ person }) => {
    const [expanded, setExpanded] = useState(false);
  
    let buttonClasses =
      "absolute right-4 bottom-0 transform -translate-x-1/2 duration-[1200ms] ease-in-out text-3xl text-white transition-all";
  
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
<div className="bg-gray-500 shadow-lg rounded-lg overflow-hidden flex flex-col relative h-[600px] md:h-[540px] 2xl:h-[700px] max-w-xs md:max-w-sm 2xl:max-w-lg">

        {/* Bild och expanderbar overlay */}
        <div
          className="relative h-[85%] bg-cover bg-center"
          style={{ backgroundImage: `url(${person.image})` }}
        >
          {/* Expanderad overlay */}
          <div
            className={`absolute bottom-0 left-0 w-full bg-gray-500 bg-opacity-90 text-white flex flex-col justify-center items-center p-4 transition-all duration-[1200ms] ease-in-out ${
              expanded ? "h-1/3 md:h-1/4 translate-y-0" : "md:h-[20%] translate-y-full"
            }`}
          >
            {/* div för namn, roll och mail */}
            <div className="mb-4">
            <h3 className="2xl:text-3xl font-bold">{person.name}</h3>
            <p className="text-xl font-semibold">{person.role}</p>
              <p>{person.email}</p>
            </div>
  
            {/* Informationsruta */}
            <div
              className={`bg-gray-500 text-white mb-[-90px] w-full text-center transition-opacity duration-[1200ms] ease-in-out ${
                expanded ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              <p className="text-sm">{person.description}</p>
            </div>
          </div>
  
          {/* Knapp */}
          <button onClick={() => setExpanded(!expanded)} className={buttonClasses}>
            {buttonIcon}
          </button>
        </div>
      </div>
    );
  };
  



  const Om = () => {
    const teamMembers = [
      {
        name: "Peter Hedström",
        role: "VD & Målare",
        email: "peter@hedstrommaleri.se || 073-600 20 47",
        image: "src/assets/bilder/peter.jpg",
        description:
          "Peter har över 35 års erfarenhet av måleri och grundade företaget 2011. Precis som en god vin är han bara bättre med åren och arbetar stenhårt för att se till att alla kunder är nöjda.",
      },
      {
        name: "Anton Hedström",
        role: "Målare",
        email: "anton@hedstrommaleri.se",
        image: "src/assets/bilder/anton.jpg",
        description:
          "Anton kombinerar moderna metoder med traditionellt hantverk. Han ligger framåt på allt den senaste utveckling branschen har att erbjuda. Utöver att måla sjunger han fram stadens stolethet ÖSK och fantiserar om landet på andra sidan pölen. ",
      },
      {
        name: "Ulrika Hedström",
        role: "Administratör",
        email: "ulrika@hedstrommaleri.se",
        image: "src/assets/bilder/ulrika.jpg",
        description:
          "Ulrika stöttar upp den  adminsastriva delen och är den som ser till att allt flyter på. Hon är den som ser till att alla papper är i ordning och att alla kunder får korrekta fakturor.",
      },
    ];

    return (
      <>
        {/* Hero-section */}
        <header className="relative min-h-[60vh] w-full bg-[linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url('src/assets/bilder/slottet.jpg')] bg-no-repeat bg-center bg-cover flex items-center justify-center px-4 text-center">
          <h1 className="text-white text-3xl md:text-4xl font-semibold max-w-2xl">
            Kul att du vill veta mer om oss!
          </h1>
        </header>

        {/* Presentation */}
        <section className="w-11/12 md:w-4/5 mx-auto text-center py-16 px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-gray-600 text-2xl md:text-5xl font-semibold leading-tight">
              DITT MÅLERI MED FOKUS PÅ KVALITÉ OCH NÖJDA KUNDER
            </h1>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed pt-6">
              Välkommen till oss på Hedström Måleri, din helhetsleverantör för
              måleri. Baserade i Örebro, erbjuder vi hantverksskicklighet med hög
              kvalitet över hela Närkeslätten med omnejd. Oavsett om du representerar
              ett företag, arbetar inom offentlig sektor eller är privatperson, kan du
              räkna med ett resultat som lever upp till dina höga förväntningar.
            </p>
          </div>
        </section>

        {/* 1 Bild på vänster sida */}
        <div className="mt-[5%] flex flex-col md:flex-row px-4 md:px-40 justify-between items-stretch">
        <div className="basis-full md:basis-[40%] min-h-[400px] sm:h-auto aspect-[3/4] md:aspect-[2/3] lg:aspect-[4/3] bg-[url('src/assets/bilder/hedstrombil2.jpg')] rounded-[10px] mb-5 md:mb-0 py-1 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)] bg-no-repeat bg-left bg-cover flex items-center justify-center"></div>
      
          <div className="basis-full md:basis-[55%] min-h-[400px] h-full rounded-[10px] py-5 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)] text-center md:text-left flex flex-col justify-center">
            <h3 className="text-gray-600 text-3xl md:text-3xl  2xl:text-4xl font-semibold my-3">
              {"En väletablerad målerifirma"}
            </h3>
            <p className="text-gray-500 text-sm md:text-[14px]  2xl:text-base leading-relaxed">
              Hedström Måleri AB är ett familjeföretag med gedigen erfarenhet och ett starkt
              fokus på kundnöjdhet. Företaget grundades 2011 av Peter Hedström, som har över
              35 års erfarenhet i branschen. Efter att ha arbetat på flera olika firmor valde han
              att starta sin egen verksamhet, med visionen att skapa ett företag där kvalitet,
              service och nära kundsamarbeten står i centrum.
              <br /> <br />
              Idag drivs företaget av Peter Hedström tillsammans med Anton Hedström. Tillsammans
              kombinerar vi traditionellt hantverk med moderna metoder för att kunna erbjuda ett brett
              utbud av måleritjänster. Vi tar oss an allt från invändig och utvändig målning till
              tapetsering och specialanpassade uppdrag. På Hedström Måleri har vi ställning/liftutbildning
              och ID06. 
              <br /> <br />
              För oss är en bra kundrelation lika viktig som ett väl utfört arbete. Vi värdesätter tydlig
              kommunikation, trevlig service och respekt i varje projekt. Oavsett uppdrag strävar vi efter att
              leverera ett resultat vi och våra kunder kan vara stolta över.
              <br /> <br />
              Genom åren har Hedström Måleri AB byggt upp ett starkt varumärke och ett gott rykte. Vi är
              stolta över att ha många återkommande kunder – både privatpersoner och företag – vilket vi ser
              som ett kvitto på vår höga standard och pålitlighet. Vill du läsa mer våra projekt genom åren
              kan du klicka på knappen nedan.
            </p>
            <div className="mt-5">
              <a
                href="/projekt"
                className="inline-block text-black border border-black py-3 px-[34px] text-[13px] bg-transparent cursor-pointer hover:border-[#f44336] hover:bg-[#f44336] transition duration-500"
              >
                Läs mer om våra projekt genom åren!
              </a>
            </div>
          </div>
        </div>

        {/* Personalpresentation */}
        <section className="w-11/12 md:w-11/12 2xl:w-5/5 mx-auto text-center py-16 px-4 gap-7 overflow-hidden max-w-full">
        <h2 className="text-gray-600 text-3xl md:text-4xl font-semibold mb-8">
            Det är vi som är Hedström Måleri!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-16 px-4  justify-center items-center">
            {teamMembers.map((person, index) => (
              <TeamMember key={index} person={person} />
            ))}
          </div>
        </section>
      </>
    );
  };

  export default Om;
  // <section className="w-11/12 md:w-11/12 2xl:w-5/5 mx-auto text-center py-16 px-4 gap-7 flex justify-center items-center">
