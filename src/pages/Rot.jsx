import { Helmet } from "react-helmet";
import RotCalculator from "/src/components/RotCalculator"; // eller relativ sökväg beroende på din mappstruktur

export default function Rot() {

  return (
    <>
    <Helmet>
      <title>ROT-avdraget 2025 – Räkna ut din besparing | Hedström Måleri AB</title>
      <meta name="description" content="Läs vår guide om ROT-avdraget 2025. Räkna ut hur mycket du kan spara med vår ROT-beräknare. Hedström Måleri AB gör det enkelt!" />
      <meta name="keywords" content="ROT-avdrag 2025, ROT beräkning, ROT guide, Hedström Måleri, måleri med rot, arbetskostnad, rotavdrag kalkylator" />
      <link rel="canonical" href="https://www.hedstrommaleri.se/rot" />
      <link rel="preload" as="image" href="/images/fasad.webp" />
    </Helmet>

    <header
        style={{
          backgroundImage: `linear-gradient(rgba(4,9,30,0.7), rgba(4,9,30,0.7)), url("/images/fasad.webp")`,
        }}
        className="relative min-h-[60vh] w-full bg-no-repeat bg-center bg-cover flex items-center justify-center px-4 text-center"
      >
        <h1 className="text-white text-3xl md:text-4xl font-semibold max-w-2xl">
                    ROT <br /> 
          Reparation, Ombyggnad och Tillbyggnad
        </h1>
    </header>

      {/* Huvudinnehåll med statisk information */}
      <main className="relative py-16 px-4 bg-gradient-to-r from-gray-50 to-gray-200">
        <section className="max-w-5xl mx-auto bg-white p-12 rounded-2xl shadow-2xl animate-slideInUp">
          <h2 className="text-[var(--rubrik-color)] text-4xl font-bold text-center mb-8">
            På denna sida har vi sammanställt en guide om <br />ROT-avdraget som kan vara bra att veta.
          </h2>

              {/* ROT-beräknare */}
              <RotCalculator />

              {/*  Inforuta om regeringen */}
          <p className="text-xl leading-relaxed mb-10 text-center pt-9">
            Från Maj 2025 till December 2025 har regeringen beslutat om en tillfällig höjning av ROT-avdraget till 50% av arbetskostnaden. 
            Det innebär att du kan spara mer när du anlitar oss för dina måleriarbeten! <br />
            <a
                href="https://www.regeringen.se/rattsliga-dokument/departementsserien-och-promemorior/2025/03/tillfalligt-hojd-subventionsgrad-for-rotavdraget/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--detalj-color)] underline text-lg hover:text-red-800 transition-colors"
              >
                Läs mer om det tillfälliga ROT-avdraget på regeringens hemsida
              </a>
          </p> 
          
              {/*  Inforuta vänster sida */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[var(--detalj-color)]">
                Vad är ROT-avdraget?
              </h3>
              <p className="text-lg">
                ROT-avdraget är en skattereduktion som gör det mer ekonomiskt att anlita professionella hantverkare. Med den höjda subventionsgraden på 50% får du direkt halva arbetskostnaden avdragen.
              </p>
              <a
                href="https://www.skatteverket.se/privat/fastigheterochbostad/rotarbeteochrutarbete.4.2e56d4ba1202f95012080002966.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[14px] px-10 py-5 ml-[-18px] bg-[var(--detalj-color)] text-white lg:text-2xl rounded-full shadow-2xl transition-transform hover:scale-110 hover:bg-red-600 whitespace-nowrap mx-auto "
                >
                Läs mer på Skatteverkets hemsida
              </a>
            </div>

           
              {/*  Inforuta höger sida */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[var(--detalj-color)]">
                Så fungerar det hos Hedström Måleri 
              </h3>
              <ul className="list-disc list-inside text-lg space-y-3">
                <li>
                  <strong>Anlita oss:</strong> Vi utför både invändiga och utvändiga måleriarbeten som berättigar till ROT-avdrag.
                </li>
                <li>
                  <strong>Direkt avdrag:</strong> Från maj till december 2025 drar vi 50% av arbetskostnaden direkt på fakturan.
                </li>
                <li>
                  <strong>Enkel administration:</strong> Vi hanterar ansökan hos Skatteverket.  
                </li>
              </ul>
            </div>
          </div>

            {/*  Exempel på besparing*/}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-[var(--detalj-color)] text-center mb-4">
              Exempel på besparing
            </h3>
            <p className="text-lg text-center">
              Tänk dig att arbetskostnaden för ett projekt är <strong>30 000 kr</strong>. <br /> Med ROT-avdraget dras <strong>15 000 kr </strong>
                av summan – total kostnad att betala blir då <strong>15 000 kr</strong>
            </p>
          </div>
      
          {/*  Viktiga punkter att tänka på */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-[var(--detalj-color)] text-center mb-4">
              Viktiga punkter att tänka på
            </h3>
            <ul className="list-disc list-inside text-lg space-y-3">
              <li>
                <strong>Maximalt avdrag:</strong> 50 000 kr per person och år.
              </li>
              <li>
                <strong>Endast arbetskostnad:</strong> Material och utrustning ingår ej.
              </li>
              
            </ul>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www7.skatteverket.se/portal/mina-avdrag/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-[var(--detalj-color)] hover:bg-red-600 text-white text-[14px] lg:text-2xl rounded-full shadow-2xl transition-transform hover:scale-110"
            >
              Har du använt ROT-Avdrag i år? Kolla ditt ROT-utrymme hos Skatteverket här!
            </a>
          </div>
        </section>
      </main>
    </>
  );
}