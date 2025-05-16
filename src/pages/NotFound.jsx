// src/pages/NotFound.jsx
import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-white px-4 text-center">
      <h1 className="text-6xl font-extrabold text-blue-700 mb-6">404</h1>
      <p className="text-xl mb-4 text-gray-700 max-w-md">
        Oj då! Det verkar som att väggen du försöker måla inte finns här...
      </p>
      <p className="mb-8 text-gray-600 max-w-md">
        Men misströsta inte! Hos Hedström Måleri har vi alltid rätt färg och
        lösning för att få ditt hem att glänsa. Vill du gå tillbaka och hitta rätt
        sida? Klicka på knappen nedan!
      </p>
      <a
        href="/"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow font-semibold transition"
      >
        Tillbaka till startsidan
      </a>
      <footer className="mt-16 text-sm text-gray-400">
        Hedström Måleri – Vi målar ditt liv i färg! 🎨
      </footer>
    </div>
  );
}
