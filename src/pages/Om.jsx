import React from "react";
import "../styles/hem.css";

const Om = () => {
  return (
    <>
      {/* Hero-section */}
      <section className="relative min-h-[60vh] w-full bg-[linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url('src/assets/bilder/fasad.jpg')] bg-no-repeat bg-center bg-cover flex items-center justify-center px-4 text-center">
        <h1 className="text-white text-3xl md:text-4xl font-semibold max-w-2xl">Kul att du vill veta mer om oss!</h1>
      </section>
      
      {/* Presentation */}
      <section className="w-11/12 md:w-4/5 mx-auto text-center py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-gray-600 text-2xl md:text-5xl font-semibold leading-tight">
            DITT MÅLERI MED FOKUS PÅ KVALITÉ OCH NÖJDA KUNDER
          </h1>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed pt-6">
            Välkommen till oss på Hedström Måleri, din helhetsleverantör för måleri. Baserade i Örebro, erbjuder vi hantverksskicklighet med hög kvalitet över hela Närkeslätten med omnejd. Oavsett om du representerar ett företag, arbetar inom offentlig sektor eller är privatperson, kan du räkna med ett resultat som lever upp till dina höga förväntningar.
          </p>
        </div>
      </section>

      {/* Tjänster-sektion */}
      <section className="w-11/12 md:w-4/5 mx-auto px-4 py-10 flex flex-wrap justify-center md:justify-between items-center gap-8">
        {/* Bildcontainer */}
        <div className="w-full md:w-2/5 h-[300px] md:h-[400px] bg-[url('src/assets/bilder/spackling.webp')] bg-no-repeat bg-center bg-cover rounded-lg shadow-md"></div>
        
        {/* Textcontainer */}
        <div className="w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left px-2 md:px-6">
          <h3 className="text-gray-600 text-2xl md:text-4xl font-semibold leading-tight">
            En väletablerad målerifirma
          </h3>
          <p className="text-gray-500 text-lg leading-relaxed pt-6 max-w-2xl">
            Vi är en väletablerad målerifirma som har varit verksamma i branschen i många år. Vi har en bred erfarenhet av att utföra måleriarbeten av alla dess slag och vi är stolta över att kunna erbjuda våra kunder ett brett utbud av tjänster.
            Vi har en stor kunskap om färg och form och vi kan hjälpa dig att hitta den perfekta lösningen för ditt hem eller din arbetsplats.
            Vi är extra stolta över att flertalet av våra kunder är återvändande. Det ser vi som ett kvitto på ett gott samarbete och vi uppskattar förtroendet att få återkommande uppdrag.
          </p>
          <div className="mt-5">
            <a href="/kontakt" className="inline-block text-black border border-black py-3 px-6 text-sm bg-transparent cursor-pointer hover:border-[#f44336] hover:bg-[#f44336] transition duration-500 rounded-md">
              Kontakta oss för en offert!
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Om;
