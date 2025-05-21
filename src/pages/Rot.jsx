import { useState, useRef } from 'react';
import { Helmet } from "react-helmet";

export default function Rot() {
  //Logik för att hantera inmatning av kostnad och formatering till rotberäknaren, bryta upp i en egen komponent?
  
  const [cost, setCost] = useState('');
  // rawCost kommer alltid att innehålla den formaterade strängen, t.ex. "30 000 kr"
  const [rawCost, setRawCost] = useState('');
  const inputRef = useRef(null);

  const formatCurrency = (value) => {
    // Tar bort alla icke-siffror
    const numericValue = value.replace(/\D/g, "");
    if (!numericValue) return "";
    // Formaterar med mellanslag var tredje siffra och lägger på " kr"
    return Number(numericValue).toLocaleString("sv-SE") + " kr";
  };

  function handleInputChange(e) {
    const selectionStart = e.target.selectionStart;
    const currentValue = e.target.value;

    // Räkna antalet siffror före markören i den nuvarande strängen
    const digitsBeforeCursor = currentValue.slice(0, selectionStart).replace(/\D/g, "").length;

    // Ta bort alla icke-siffror för att få ut den "råa" siffran
    const unformatted = currentValue.replace(/\D/g, "");
    setCost(Number(unformatted));

    // Skapa den formaterade strängen med " kr"
    let formatted = "";
    if (unformatted) {
        formatted = Number(unformatted).toLocaleString("sv-SE") + " kr";
    }
    setRawCost(formatted);

    // Beräkna var markören ska hamna i den formaterade strängen
    let newCursorPos = 0;
    let digitCount = 0;
    for (let i = 0; i < formatted.length; i++) {
        if (/\d/.test(formatted[i])) {
            digitCount++;
        }
        if (digitCount >= digitsBeforeCursor) {
            newCursorPos = i + 1;
            break;
        }
    }

    // Förhindra att markören hamnar i suffixet " kr"
    const numericPartEnd = formatted.length - 3; // " kr" är 3 tecken
    if (newCursorPos > numericPartEnd) {
        newCursorPos = numericPartEnd;
    }

    setTimeout(function () {
        if (inputRef.current) {
            inputRef.current.setSelectionRange(newCursorPos, newCursorPos);
        }
    }, 0);
}


  const handleBlur = () => {
    // Vid blur är det redan formaterat med " kr", så inget extra behövs här
    if (!rawCost) {
      setRawCost('');
    }
  };

  // ROT-beräknare: ROT-avdraget ger 50% rabatt på arbetskostnaden.
  let savings;
  let message = "";
  if (cost > 100000) {
    savings = 50000;
    message = "Taket för ROT-Avdrag går vid 50 000 kr inom ett år.";
  } else if (cost) {
    savings = cost / 2;
  } else {
    savings = 0;
  }

  // !!!OBS!!! Koden nedan gäller för 30% ROT-avdrag, avkommentera koden nedan 1 JANUARI 2026! Ta bort koden ovan! SE ÄVEN ÖVER ALLA TEXTSTRÄNGAR OCH LÄNKAR!
    //  let savings;
    // let message = "";
    // if (cost > 100000) {
    //   savings = 30000;
    //   message = "Taket för ROT-Avdrag går vid 50 000 kr inom ett år.";
    // } else if (cost) {
    //   savings = cost * 0.3;
    // } else {
    //   savings = 0;
    // }

  // Ny totalsumma = arbetskostnad - ROT-avdraget
  const newTotal = cost - savings;

  return (
    <>
    <Helmet>
      <title>ROT-avdraget 2025 – Räkna ut din besparing | Hedström Måleri AB</title>
      <meta name="description" content="Läs vår guide om ROT-avdraget 2025. Räkna ut hur mycket du kan spara med vår ROT-beräknare. Hedström Måleri AB gör det enkelt!" />
      <meta name="keywords" content="ROT-avdrag 2025, ROT beräkning, ROT guide, Hedström Måleri, måleri med rot, arbetskostnad, rotavdrag kalkylator" />
      <link rel="canonical" href="https://www.hedstrommaleri.se/rot" />
    </Helmet>

    <header
        style={{
          backgroundImage: `linear-gradient(rgba(4,9,30,0.7), rgba(4,9,30,0.7)), url("/images/fasad.jpg")`,
        }}
        className="relative min-h-[60vh] w-full bg-no-repeat bg-center bg-cover flex items-center justify-center px-4 text-center"
      >
        <h1 className="text-white text-3xl md:text-4xl font-semibold max-w-2xl">
                    ROT <br /> Reparation, Ombyggnad och Tillbyggnad

        </h1>
      </header>



      {/* Huvudinnehåll med statisk information */}
      <main className="relative py-16 px-4 bg-gradient-to-r from-gray-50 to-gray-200">
        <section className="max-w-5xl mx-auto bg-white p-12 rounded-2xl shadow-2xl animate-slideInUp">
          <h2 className="text-[var(--rubrik-color)] text-4xl font-bold text-center mb-8">
            På denna sida har vi sammanställt en guide om <br />ROT-avdraget som kan vara bra att veta.
          </h2>

              {/* ROT-beräknare */}
          <div className="mt-12 p-6 bg-red-50 rounded-xl shadow-md">
            <h3 className="text-[var(--detalj-color)] text-2xl font-semibold  text-center mb-4">
              ROT-Beräknare
            </h3>
            <div className="flex flex-col items-center">
              <label htmlFor="cost" className="mb-2 text-lg">
                Ange arbetskostnad (kr):
              </label>
              <input
                ref={inputRef}
                type="text"
                id="cost"
                value={rawCost}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="t.ex. 30 000 kr"
                pattern="\d*"
                inputMode="numeric"
                className="w-64 p-2 border border-red-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[var(--detalj-color)]"
              />

              <p className="text-center text-[13px] md:text-[18px] md:text-lg">
                Vad du sparar i ROT-avdrag (50%): <span className="font-bold">{formatCurrency(savings.toFixed(0))}</span>
              </p>
              <p className="text-left   md:text-lg">
                Vad du betalar: <span className="font-bold">{formatCurrency(newTotal.toFixed(0))}</span>
              </p>
              {message && <p className="text-red-500">{message}</p>}
            </div>
          </div>

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