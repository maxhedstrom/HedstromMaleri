import { useState, useRef } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function Rot() {
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

  // Simulera konfetti-effekt, ta bort?
  const handleConfetti = () => {
    alert('🎉 Konfetti! ROT-avdraget firas med stil! 🎉');
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
    <div className="relative font-sans text-gray-800 overflow-hidden">
      {/* Header med video-bakgrund och dynamiska animationer */}
      <header className="relative min-h-[60vh] w-full bg-[linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url('src/assets/bilder/fasad.jpg')] flex items-center justify-center overflow-hidden">
        <h1 className="text-white text-3xl md:text-4xl font-semibold max-w-2xl">
          Utnyttja ROT-Avdraget!
        </h1>
      </header>

      {/* Huvudinnehåll med statisk information */}
      <main className="relative z-10 py-16 px-4 bg-gradient-to-r from-gray-50 to-gray-200">
        <section className="max-w-5xl mx-auto bg-white p-12 rounded-2xl shadow-2xl animate-slideInUp">
          <h2 className="text-4xl font-bold text-gray-600 text-center mb-8">
            På denna sida har vi sammanställt en guide om ROT-avdraget som kan vara bra att veta.
          </h2>

              {/* ROT-beräknare */}
              <div className="mt-12 p-6 bg-red-50 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-red-500 text-center mb-4">
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
                className="w-64 p-2 border border-red-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
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
          <p className="text-xl leading-relaxed mb-10 text-center pt-9">
            Från Maj 2025 till December 2025 har regeringen beslutat om en tillfällig höjning av ROT-avdraget till 50% av arbetskostnaden. Det innebär att du kan spara mer när du anlitar oss för dina måleriarbeten! <br />
            <a
                href="https://www.regeringen.se/rattsliga-dokument/departementsserien-och-promemorior/2025/03/tillfalligt-hojd-subventionsgrad-for-rotavdraget/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 underline text-lg hover:text-red-800 transition-colors"
              >
                Läs mer om det tillfälliga ROT-avdraget på regeringens hemsida
              </a>
          </p> 
          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-red-500">
                Vad är ROT-avdraget?
              </h3>
              <p className="text-lg">
                ROT-avdraget är en skattereduktion som gör det mer ekonomiskt att anlita professionella hantverkare. Med den höjda subventionsgraden på 50% får du direkt halva arbetskostnaden avdragen!
              </p>
              <a
              href="https://www.skatteverket.se/privat/fastigheterochbostad/rotarbeteochrutarbete.4.2e56d4ba1202f95012080002966.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-red-600 text-white text-xl rounded-full shadow-2xl transition-transform hover:scale-110"
            >
              Läs mer på Skatteverkets hemsida
            </a>
           
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-red-500">
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
                  <strong>Enkel administration:</strong> Vi hanterar all ansökan hos Skatteverket åt dig.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-red-500 text-center mb-4">
              Exempel på besparing
            </h3>
            <p className="text-lg text-center">
              Tänk dig att arbetskostnaden för ett projekt är <strong>30 000 kr</strong>. Med ROT-avdraget dras <strong>15 000 kr</strong> direkt av – du betalar alltså bara <strong>15 000 kr</strong>!
            </p>
          </div>

      

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-red-500 text-center mb-4">
              Viktiga punkter att tänka på
            </h3>
            <ul className="list-disc list-inside text-lg space-y-3">
              <li><strong>Maximalt avdrag:</strong> Upp till 50 000 kr per år.</li>
              <li><strong>Endast arbetskostnad:</strong> Material och utrustning ingår ej.</li>
              <li><strong>Elektronisk betalning:</strong> Digital betalning krävs för att kvalificera.</li>
            </ul>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www7.skatteverket.se/portal/mina-avdrag/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-red-600 text-white text-xl rounded-full shadow-2xl transition-transform hover:scale-110"
            >
              Har du använt ROT-Avdrag i år? Kolla ditt ROT-utrymme hos Skatteverket här!
            </a>
          </div>

          {/* <div className="mt-12 text-center">
            <button
              onClick={handleConfetti}
              className="mt-8 px-10 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full shadow-xl transition-transform transform hover:scale-110 animate-bounce"
            >
              Fira ROT-Avdraget!
            </button>
          </div> */}
        </section>
      </main>
    </div>
  );
}