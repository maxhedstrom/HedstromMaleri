import React from "react";
import "../styles/hem.css";
const Hem = () => {
  return (
    // Här börjar innehållet på startsidan
    <div>
      
      {/* Första sektionen med Bakgrundsbild - sektion: välkomstsida */}
      
      <section
        className="relative min-h-screen w-full bg-[linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url('src/assets/bilder/hedstrombil.jpg')] bg-no-repeat bg-top  md:bg-center bg-cover"
      ></section>

      <div className="w-[90%] lg:w-3/5 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className=" text-[var(--first-color)] text-[32px] md:text-[42px] lg:text-[42px]">
          Ett litet familjeföretag med fokus på kvalité och nöjda kunder.
        </h1>
        <p className="mt-[10px] mb-[40px] text-[18px] md:text-[24px] lg:text-[20px]">
          Vi har stor yrkesmässig kunskap inom både invändigt och utvändigt måleri.
        </p>
        <a
          href="/kontakt"
          className="inline-block no-underline text-white border border-white py-3 px-6 md:px-8 text-[19px] md:text-[24px] lg:text-[20px] bg-transparent cursor-pointer hover:border-[#f44336] hover:bg-[#f44336] transition duration-1000"
        >
          Kontakta oss för en offert!
        </a>
      </div>
      {/*Presentation med urval av tjänster i röda block - sektion: Tjänster */}
      <section className="w-4/5 mx-auto text-center pt-[100px]">
        <h1 className="text-[var(--rubrik-color)] text-4xl font-semibold">Tjänster vi erbjuder</h1>
        <p className="text-[var(--text-color)] text-[14px] font-light leading-[22px] p-[10px]">
          Vi erbjuder ett antal olika tjänster
        </p>
        <div className="mt-[5%] flex flex-col md:flex-row justify-between">
          <div className="basis-[31%] bg-[#fff3f3] rounded-[10px] mb-[5%] py-5 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)]">
            <h3 className="text-[var(--rubrik-color)] text-center font-semibold my-[10px]">Spackling</h3>
            <p className="text-[var(--text-color)]">
            Ge din fasad ett lyft med professionell målning! Vi på Hedström Måleri AB använder moderna metoder och lift för att nå 
            alla ytor smidigt och säkert. Med högkvalitativa färger och noggrant arbete skyddar vi din fasad och ger den ett fräscht, hållbart utseende.
            </p>
          </div>
          <div className="basis-[31%] bg-[#fff3f3] rounded-[10px] mb-[5%] py-5 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)]">
            <h3 className="text-[var(--rubrik-color)] text-center font-semibold my-[10px]">Fasadmålning</h3>
            <p className="text-[var(--text-color)]">
            Ge din fasad ett lyft med professionell målning! Vi på Hedström Måleri AB använder moderna metoder och lift för att nå 
            alla ytor smidigt och säkert. Med högkvalitativa färger och noggrant arbete skyddar vi din fasad och ger den ett fräscht, hållbart utseende.
            </p>
          </div>
          <div className="basis-[31%] bg-[#fff3f3] rounded-[10px] mb-[5%] py-5 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)]">
            <h3 className="text-[var(--rubrik-color)] text-center font-semibold my-[10px]">Våtrum</h3>
            <p className="text-[var(--text-color)]">
            Behöver ditt badrum eller liknande målas om krävs specialverktyg och kompetens kring hållbarhet. Våra våtrumstjänster garanterar hållbara, stilrena och fuktsäkra lösningar för ditt badrum eller tvättstuga. 
            Vi använder högkvalitativa material och följer branschstandarder för att skapa en säker och elegant miljö 
            </p>
          </div>
        </div>
      </section>

      {/*Bild på Örebro slott med lite text om företagets geografi - sektion: Geografisk plats */}
      <section className="w-4/5 mx-auto text-center pt-[100px]">
        <h1 className="text-[var(--rubrik-color)] text-4xl font-semibold">Var vi finns</h1>
        <p className="text-[var(--text-color)] text-[14px] font-light leading-[22px] p-[10px]">
        Hedström Måleri AB är baserat i Örebro, ett penseldrag från slottet. Vi utför arbeten i hela Närke med omnejd. 
       
        Vi erbjuder våra tjänster i både större städer och mindre orter i regionen.
        </p>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="basis-[200%] rounded-[10px] mb-[30px] relative overflow-hidden">
            <img
              src="src/assets/bilder/slottet.jpg"
              alt="Slottet"
              className="w-full h-[60vh] object-center md:h-auto md:object-right object-cover"
            />
            <div className="bg-[rgba(166,170,184,0.7)] h-full w-full absolute top-0 group">
              <h3 className="w-full text-white font-bold text-[30px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bottom-[49%]">
                ÖREBRO
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/*Referenser med bilder på uppdragsgivare - sektion: Referenser */}

      <section className="w-4/5 mx-auto text-center pt-[100px]">
        <div className="mb-8">
          <h1 className="text-[var(--rubrik-color)] text-4xl font-semibold">Utvalda uppdragsgivare</h1>
          <p className="text-[var(--text-color)] text-[14px] font-light leading-[22px] p-[10px]">
            Vi utför arbeten åt kunder, stora som små, och strävar alltid efter att leverera högsta kvalitet.
            <br />
            Vi har ett antal referenser!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-[10px] text-center">
            <a href="https://www.oru.se/">
              <img
                src="src/assets/bilder/kommun-logo.png"
                alt="Örebro Kommun"
                className="w-full h-[200px] object-contain rounded-[10px]"
              />
            </a>
            <h3 className="text-[var(--text-color)] mt-[10px] mb-[15px]">Örebro Kommun</h3>
          </div>
          <div className="rounded-[10px] text-center">
            <a href="https://www.oru.se/">
              <img
                src="src/assets/bilder/sorby-logo.png"
                alt="Sörbyskolan"
                className="w-full h-[200px] object-contain rounded-[10px]"
              />
            </a>
            <h3 className="text-[var(--text-color)] mt-[10px] mb-[15px]">Sörbyskolan</h3>
          </div>
          <div className="rounded-[10px] text-center">
            <a href="https://www.oru.se/">
              <img
                src="src/assets/bilder/universitetet-logo.png"
                alt="Örebro Universitet"
                className="w-full h-[200px] object-contain rounded-[10px]"
              />
            </a>
            <h3 className="text-[var(--text-color)] mt-[10px] mb-[15px]">Örebro Universitet</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hem;
