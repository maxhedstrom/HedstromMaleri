import { useEffect } from "react";
import { FaShieldAlt, FaEnvelope, FaLock, FaClock, FaCookieBite } from 'react-icons/fa';

const Integritetspolicy = () => {
  useEffect(() => {
    // Funktionalitet för att ta emot länkar från Footern. Om en hash finns i URL:en, scrolla till motsvarande sektion
    if (window.location.hash) {
      const id = window.location.hash.substring(1); // ta bort "#"
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  return (
    <>
          <header
            style={{
              backgroundImage: `linear-gradient(rgba(4,9,30,0.7), rgba(4,9,30,0.7)), url("images/slottet.jpg")`,
            }}
            className="relative min-h-[60vh] w-full bg-no-repeat bg-center bg-cover flex items-center justify-center px-4 text-center"
          >
            <h1 className="text-white text-3xl md:text-4xl font-semibold max-w-2xl">
              Vi värnar om din data
            </h1>
          </header>

      <div className="max-w-6xl mx-auto p-6 bg-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
            <FaShieldAlt className="text-red-500" size={32} />
            Integritetspolicy för Hedström Måleri AB
          </h1>
          <p className="text-gray-500">Senast uppdaterad: 2025-04-14</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section className="bg-white p-6 shadow-lg rounded transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <FaEnvelope className="text-red-500" size={24} />
              1. Vilka uppgifter vi samlar in
            </h2>
            <p className="mb-4">
              När du använder vårt kontaktformulär kan vi samla in följande information:
            </p>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>Namn</li>
              <li>E-postadress</li>
              <li>Telefonnummer</li>
              <li>Meddelandet du skriver till oss</li>
            </ul>
            <p>Vi samlar inte in några andra personuppgifter automatiskt.</p>
          </section>

          <section className="bg-white p-6 shadow-lg rounded transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <FaLock className="text-[var(--detalj-color)]" size={24} />
              2. Hur vi använder informationen
            </h2>
            <p className="mb-4">Uppgifterna du skickar in används enbart för att:</p>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>Svara på din arbetsförfrågan</li>
              <li>Ta kontakt med dig i samband med offert eller uppdrag</li>
            </ul>
            <p>Vi vidarebefordrar inte dina uppgifter till tredje part.</p>
          </section>

          <section className="bg-white p-6 shadow-lg rounded transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <FaClock className="text-[var(--detalj-color)]" size={24} />
              3. Hur länge sparas informationen?
            </h2>
            <p>
              Vi sparar dina uppgifter så länge det är nödvändigt för att slutföra kommunikationen eller det aktuella
              uppdraget. Du kan när som helst begära att vi raderar dina uppgifter.
            </p>
          </section>

          <section className="bg-white p-6 shadow-lg rounded transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <FaShieldAlt className="text-[var(--detalj-color)]" size={24} />
              4. Dina rättigheter
            </h2>
            <p className="mb-4">Du har rätt att:</p>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>Begära utdrag över vilka personuppgifter vi har om dig</li>
              <li>Rätta felaktiga uppgifter</li>
              <li>Begära att vi raderar dina uppgifter</li>
            </ul>
            <p>
              Kontakta oss via{' '}
              <a href="mailto:info@hedstrommaleri.se" className="text-[var(--detalj-color)] hover:underline">
                info@hedstrommaleri.se
              </a>{' '}
              för att utöva dessa rättigheter.
            </p>
          </section>

          <section id="cookies" className="bg-white p-6 shadow-lg rounded transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <FaCookieBite className="text-amber-400" size={24} />
              5. Cookies
            </h2>
            <p>
              Vår webbplats använder endast tekniska cookies som krävs för att sidan ska fungera korrekt. Vi sparar inte
              cookies för analys eller marknadsföring.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Integritetspolicy;
