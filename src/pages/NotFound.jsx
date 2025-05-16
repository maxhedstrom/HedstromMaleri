import React from "react";

export default function NotFound() {
  return (
    <div
      className="
        min-h-screen 
        flex flex-col items-center justify-center 
        bg-gradient-to-b from-blue-200 to-white 
        px-4 
        text-center
        py-12 md:py-24
      "
    >
      <h1
        style={{ fontSize: "clamp(2rem, 10vw, 5rem)" }}
        className="font-extrabold text-[var(--detalj-color)] mb-6"
      >
        404
      </h1>

      <p className="text-xl mb-4 text-gray-700 max-w-md">
        Oj då! Det verkar som att vi inte hunnit måla upp den här sidan än.
      </p>

      <div className="mb-4 text-gray-700 max-w-md text-left">
        Det kan finnas flera anledningar till detta:
        <ul className="list-disc list-inside mt-2">
          <li>En länk som inte fungerar</li>
          <li>En sida som har flyttats eller tagits bort</li>
          <li>En felaktig webbadress</li>
        </ul>
      </div>

      <p>
        Men oroa dig inte – vi har massor av andra tjänster och inspiration som kan hjälpa dig att
        förvandla ditt hem.
        <br /> <br />
      </p>

      <p className="mb-4 text-gray-600 max-w-md">
        Prova att använda menyn för att hitta det du söker, eller klicka på knappen nedan för att gå tillbaka till startsidan och börja om.
      </p>

      <a
        href="/"
        className="bg-[var(--detalj-color)] hover:bg-red-700 text-white px-6 py-3 rounded shadow font-semibold transition"
      >
        Tillbaka till startsidan
      </a>

      <footer className="mt-16 text-sm text-gray-400 max-w-md">
        Om problemet kvarstår får du gärna felanmäla det till oss på{" "}
        <a
          href="mailto:info@hedstrommaleri.se"
          className="text-[var(--detalj-color)] underline hover:text-bg-red-900"
        >
          info@hedstrommaleri.se
        </a>
        .
      </footer>
    </div>
  );
}
