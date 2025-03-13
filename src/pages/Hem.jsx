import React from "react";
import "../styles/hem.css";
const Hem = () => {
  return (
    // Här börjar innehållet på startsidan
    <div>
      
      {/* Första sektionen med Bakgrundsbild - sektion: välkomstsida */}
      
      <section
        className="relative min-h-screen w-full bg-[linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url('src/assets/bilder/hedstrombil.jpg')] bg-no-repeat bg-center bg-cover">
      </section>
      
      <div className="w-[90%] text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-[20px] md:text-[32px]">
          En liten målerifirma med fokus på kvalité och nöjda kunder
        </h1>
        <p className="mt-[10px] mb-[40px] text-[14px]">
          En liten målerifirma belägen i centrala Örebro som drivs av mig Peter Hedström och min son Anton Hedström.
          <br />
          Vårt fokus ligger på kvalité och nöjda kunder sedan starten 2011.
        </p>
        <a
          href="/kontakt"
          className="inline-block no-underline text-white border border-white py-3 px-[34px] text-[13px] bg-transparent relative cursor-pointer hover:border-[#f44336] hover:bg-[#f44336] transition duration-1000"
        >
          Kontakta oss för en offert!
        </a>
      </div>

      {/*Presentation med urval av tjänster i röda block - sektion: Tjänster */}
      <section className="w-4/5 mx-auto text-center pt-[100px]">
        <h1 className="text-4xl font-semibold">Tjänster vi erbjuder</h1>
        <p className="text-[#333] text-[14px] font-light leading-[22px] p-[10px]">
          Vi erbjuder ett antal olika tjänster
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

      {/*Bild på Örebro slott med lite text om företagets geografi - sektion: Geografisk plats */}
      <section className="w-4/5 mx-auto text-center pt-[100px]">
        <h1 className="text-4xl font-semibold">Var vi finns</h1>
        <p className="text-[#333] text-[14px] font-light leading-[22px] p-[10px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
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
          <h1 className="text-4xl font-semibold">Utvalda uppdragsgivare</h1>
          <p className="text-[#333] text-[14px] font-light leading-[22px] p-[10px]">
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
            <h3 className="mt-[10px] mb-[15px]">Örebro Kommun</h3>
          </div>
          <div className="rounded-[10px] text-center">
            <a href="https://www.oru.se/">
              <img
                src="src/assets/bilder/sorby-logo.png"
                alt="Sörbyskolan"
                className="w-full h-[200px] object-contain rounded-[10px]"
              />
            </a>
            <h3 className="mt-[10px] mb-[15px]">Sörbyskolan</h3>
          </div>
          <div className="rounded-[10px] text-center">
            <a href="https://www.oru.se/">
              <img
                src="src/assets/bilder/universitetet-logo.png"
                alt="Örebro Universitet"
                className="w-full h-[200px] object-contain rounded-[10px]"
              />
            </a>
            <h3 className="mt-[10px] mb-[15px]">Örebro Universitet</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hem;
