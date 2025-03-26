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

       {/* 1 Bild på vänster sida */}
        {/* Fasadmålning */}
        <div className="mt-[5%] flex flex-col md:flex-row px-4 md:px-40 justify-between items-stretch">
          {/* Bildcontainer */}
          <div className="basis-full md:basis-[40%] min-h-[400px] md:min-h-[auto] aspect-[3/4] md:aspect-[4/3] lg:h-[500px] xl:h-[600px] bg-[url('src/assets/bilder/hedstrombil.jpg')] rounded-[10px] mb-5 md:mb-0 py-1 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)] bg-no-repeat bg-left bg-cover flex items-center justify-center">
          </div>

          {/* Textcontainer */}
          <div className="basis-full md:basis-[55%] min-h-[400px] h-full rounded-[10px] py-5 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)] text-center md:text-left flex flex-col justify-center">
            <h3 className="text-gray-600 text-3xl md:text-4xl font-semibold my-3"> 
              En väletablerad målerifirma
            </h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Hedström Måleri AB är ett familjeföretag med gedigen erfarenhet och ett starkt fokus på kundnöjdhet. Företaget grundades 2011 av Peter Hedström, som har över 30 års erfarenhet i branschen.
             Efter att ha arbetat på flera olika firmor valde han att starta sin egen verksamhet, med visionen att skapa ett företag där kvalitet, service och nära kundsamarbeten står i centrum. 
              <br /> <br />
              Idag drivs företaget av Peter Hedström tillsammans med Anton Hedström. Tillsammans kombinerar vi traditionellt hantverk med moderna metoder för att kunna erbjuda ett brett utbud av måleritjänster. 
              Vi tar oss an allt från invändig och utvändig målning till tapetsering och specialanpassade uppdrag. På Hedström Måleri har vi liftutbildning och ID06.
              <br /> <br />
              För oss är en bra kundrelation lika viktig som ett väl utfört arbete. Vi värdesätter tydlig kommunikation, trevlig service och respekt i varje projekt. 
              Oavsett uppdrag strävar vi efter att leverera ett resultat vi och våra kunder kan vara stolta över.
              <br /> <br />
              Genom åren har Hedström Måleri AB byggt upp ett starkt varumärke och ett gott rykte. Vi är stolta över att ha många återkommande kunder 
              – både privatpersoner och företag – vilket vi ser som ett kvitto på vår höga standard och pålitlighet. Vill du läsa mer våra projekt genom åren kan du klicka på knappen nedan.
            </p>
            <div className="mt-5">
              <a
                href="/projekt"
                className="inline-block text-black border border-black py-3 px-[34px] text-[13px] bg-transparent cursor-pointer hover:border-[#f44336] hover:bg-[#f44336] transition duration-500">
                Läs mer om våra projekt genom åren!
              </a>  
            </div>
          </div>
        </div>

              {/*Presentation med urval av tjänster i röda block - sektion: Tjänster */}
      <section className="w-4/5 mx-auto text-center pt-[100px]">
        <h1 className="text-gray-600 text-2xl md:text-5xl font-semibold leading-tight">
          Det är vi som är Hedström Måleri!
        </h1>
        <p className="text-gray-500 text-lg md:text-xl leading-relaxed pt-6">
          Vårt eminenta team står redo för dig som privatperson eller företagare
        </p>
        <div className="mt-[5%] flex flex-col md:flex-row justify-between">
          <div className="basis-[31%] bg-[#fff3f3] rounded-[10px] mb-[5%] py-5 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)]">
            <h3 className="text-center font-semibold my-[10px]">Spackling</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
          </div>
          <div className="basis-[31%] bg-[#fff3f3] rounded-[10px] mb-[5%] py-5 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)]">
            <h3 className="text-center font-semibold my-[10px]">Fasadmålning</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
          </div>
          <div className="basis-[31%] bg-[#fff3f3] rounded-[10px] mb-[5%] py-5 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)]">
            <h3 className="text-center font-semibold my-[10px]">Våtrum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Om;
