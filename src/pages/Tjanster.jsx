import React from "react";
import "../styles/hem.css";
import InfoCard from "/src/components/ui/InfoCard";
import tjanster from "../data/tjanster";

function Tjanster() {
  return (
    <>
      <header className="relative min-h-[60vh] w-full bg-[linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url('src/assets/bilder/bakgrundsbil-tvamalare.jpg')] bg-no-repeat bg-center bg-cover flex items-center justify-center">
        <h1 className="text-white text-4xl font-semibold text-center">Tjänster</h1>
      </header>

      <section className="w-11/12 md:w-5/5 mx-auto text-center py-16 px-4">
        <h1 className="text-[var(--rubrik-color)] text-3xl md:text-4xl font-semibold text-center">
          Vi arbetar både åt byggföretag, bostadsrättföreningar och privatpersoner. <br /> <br />
        </h1>
        <h2 className="text-black text-2xl font-extralight text-center">
          Nedan kan du läsa mer om vilka tjänster vi erbjuder och hur vi kan hjälpa dig.
        </h2>

         {/*...tjanst-snutten hämtar samtlig info från tjanster.js i en array under data foldern  */}
        {tjanster.map((tjanst, index) => (
          <InfoCard key={index} {...tjanst} className="border" />
        ))}
      </section>
    </>
  );
}

export default Tjanster;
