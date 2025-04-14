import React from 'react';

const Integritetspolicy = () => {
  return (
    <>
      <header className="relative min-h-[60vh] w-full bg-[linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url('src/assets/bilder/slottet.jpg')] bg-no-repeat bg-center bg-cover flex items-center justify-center px-4 text-center">
        <h1 className="text-white text-3xl md:text-4xl font-semibold max-w-2xl">
          Vi värnar om din data
        </h1>
      </header>

      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-2">
          🔐 Integritetspolicy för Hedström Måleri AB
        </h1>
        <p className="text-gray-500 mb-4">Senast uppdaterad: 2025-04-14</p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Vilka uppgifter vi samlar in</h2>
          <p>När du använder vårt kontaktformulär kan vi samla in följande information:</p>
          <ul className="list-disc list-inside ml-4 my-2">
            <li>Namn</li>
            <li>E-postadress</li>
            <li>Telefonnummer</li>
            <li>Meddelandet du skriver till oss</li>
          </ul>
          <p>Vi samlar inte in några andra personuppgifter automatiskt.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Hur vi använder informationen</h2>
          <p>Uppgifterna du skickar in används enbart för att:</p>
          <ul className="list-disc list-inside ml-4 my-2">
            <li>Svara på din arbetsförfrågan</li>
            <li>Ta kontakt med dig i samband med offert eller uppdrag</li>
          </ul>
          <p>Vi vidarebefordrar inte dina uppgifter till tredje part.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Hur länge sparas informationen?</h2>
          <p>
            Vi sparar dina uppgifter så länge det är nödvändigt för att slutföra kommunikationen eller det aktuella uppdraget.
            Du kan när som helst begära att vi raderar dina uppgifter.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Dina rättigheter</h2>
          <p>Du har rätt att:</p>
          <ul className="list-disc list-inside ml-4 my-2">
            <li>Begära utdrag över vilka personuppgifter vi har om dig</li>
            <li>Rätta felaktiga uppgifter</li>
            <li>Begära att vi raderar dina uppgifter</li>
          </ul>
          <p>
            Kontakta oss via{' '}
            <a href="mailto:info@hedstrommaleri.se" className="text-blue-500 hover:underline">
              info@hedstrommaleri.se
            </a>{' '}
            för att utöva dessa rättigheter.
          </p>
        </section>
      </div>
    </>
  );
};

export default Integritetspolicy;
