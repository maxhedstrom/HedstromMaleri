import { useEffect, useState } from "react";
import "../styles/hem.css";
import InfoCard from "/src/components/ui/infoCard";
import fallBackTjanster from "../data/fallbacktjanster"; // Importera fallback

function Tjanster() {
  const [tjanster, setTjanster] = useState([]);

  useEffect(() => {
    // Hämta tjänster från backend
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/get-services");
        if (!res.ok) {
          throw new Error("Tjänster kunde inte hämtas från backend.");
        }
        const data = await res.json();
        setTjanster(data);
      } catch (error) {
        console.error("Kunde inte hämta tjänster:", error);
        setTjanster(fallBackTjanster); // Sätt fallback-tjänster om något går fel
      }
    };

    fetchData();

    // Scroll till sektion om hash finns i URL:en
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  return (
    <>
      <header className="relative min-h-[60vh] w-full bg-[linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url('src/assets/bilder/bakgrundsbil-tvamalare.jpg')] bg-no-repeat bg-center bg-cover flex items-center justify-center">
        <h1 className="text-white text-4xl font-semibold text-center">Tjänster</h1>
      </header>

      <section className="w-11/12 md:w-5/5 mx-auto text-center py-16 px-4">
        <h1 className="text-[var(--rubrik-color)] text-3xl md:text-4xl font-semibold text-center">
          Vi arbetar både åt byggföretag, bostadsrättföreningar och privatpersoner. <br /><br />
        </h1>
        <h2 className="text-black text-2xl font-extralight text-center">
          Nedan kan du läsa mer om vilka tjänster vi erbjuder och hur vi kan hjälpa dig.
        </h2>

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

        <h2 className="text-black text-2xl font-extralight text-center mt-10">
          Har du frågor eller vill ha en offert? <br /> Tveka inte att kontakta oss!
        </h2>
        <a href="/kontakt" className="text-[var(--rubrik-color)] text-xl font-semibold mt-5 inline-block">
          Kontakta oss
        </a>
      </section>
    </>
  );
}

export default Tjanster;
