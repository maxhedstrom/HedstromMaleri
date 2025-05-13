import React, { useState } from "react";
import { useAdminResource } from "../../hooks/useAdminResource";

export default function KontaktAdmin() {
  const { items: kontakt = [{}], isSaving, handleChange, saveItems } = useAdminResource({
    fetchUrl: "http://localhost:5000/api/get-kontakt",
    saveUrl:  "http://localhost:5000/api/save-kontakt",
    defaultItem: {
      name: "",
      orgNumber: "",
      phone: "",
      email: "",
      address: ""
    },
    resourceName: "kontakt",
    isArray: true
  });

  const [showConfirm, setShowConfirm] = useState(false);

  const handleSave = async () => {
    await saveItems();
    setShowConfirm(true);
    setTimeout(() => setShowConfirm(false), 3000);
  };

  const fields = [
    { name: "name", placeholder: "Företagsnamn" },
    { name: "orgNumber", placeholder: "Organisationsnummer" },
    { name: "phone", placeholder: "Telefonnummer" },
    { name: "email", placeholder: "E-postadress" },
    { name: "address", placeholder: "Adress" }
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-2">📝 Företagsinformation</h2>
      <p className="text-gray-600 mb-6">Uppdatera kontaktuppgifter som visas på hemsidan.</p>

      <div className="grid gap-4 max-w-xl">
        {fields.map((field) => (
          <label key={field.name} className="block">
            <span className="block font-medium mb-1">{field.placeholder}</span>
            <input
              type="text"
              name={field.name}
              value={kontakt[0]?.[field.name] || ""}
              onChange={(e) => handleChange(0, field.name, e.target.value)}
              className="w-full border rounded p-2"
            />
          </label>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-6">
        <button
          onClick={handleSave}
          disabled={isSaving}
          className={`px-4 py-2 rounded cursor-pointer text-white transition ${
            isSaving
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {isSaving ? "Sparar..." : "Spara ändringar"}
        </button>
        {showConfirm && !isSaving && (
          <span className="text-green-600">✔️ Sparat!</span>
        )}
      </div>
    </div>
  );
}
