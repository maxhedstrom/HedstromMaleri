// src/components/AdminPanel.jsx
import React, { useState, useEffect } from "react";

export default function AdminPanel() {
  const [services, setServices] = useState([]);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/get")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fel vid hämtning av data från servern");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setServices(data);
        } else {
          console.error("Felaktig dataformat från servern");
        }
      })
      .catch((error) => {
        console.error("Fel vid hämtning av tjänster:", error);
      });
  }, []);

  const handleInputChange = (e, index, field) => {
    const updated = [...services];
    updated[index][field] = e.target.value;
    setServices(updated);
  };

  const addNewService = () => {
    const newService = {
      id: Date.now(),
      name: "",
      description: "",
    };
    setServices([newService, ...services]);
  };

  const deleteService = (id) => {
    const confirmed = window.confirm(
      "Är du säker på att du vill ta bort denna tjänst?"
    );
    if (confirmed) {
      setServices((prev) => prev.filter((service) => service.id !== id));
    }
  };

  const saveServices = async () => {
    setIsSaving(true);
    try {
      const response = await fetch("http://localhost:5000/api/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ services }),
      });

      if (!response.ok) {
        throw new Error("Fel vid sparande av tjänster");
      }
      console.log("Tjänster sparade!");
    } catch (error) {
      console.error("Fel vid kommunikation med servern", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex h-screen">
      
      {/* HUVUDINNEHÅLL */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-auto p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Redigera Tjänster
          </h2>
          <p className="text-gray-600 mb-8">
            Här kan du uppdatera befintliga tjänster som visas under sidan "Hem", lägga till nya eller ta
            bort.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={addNewService}
              className="bg-[var(--text-color)] text-white px-5 py-2 rounded hover:bg-[var(--rubrik-color)] transition cursor-pointer"
            >
              Lägg till ny tjänst
            </button>

            <button
              onClick={saveServices}
              disabled={isSaving}
              className={`px-5 py-2 rounded cursor-pointer text-white transition ${
                isSaving
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {isSaving ? "Sparar..." : "Spara ändringar"}
            </button>
          </div>

          <div className="space-y-6">
            {services.length > 0 ? (
              services.map((service, index) => (
                <div
                  key={service.id}
                  className="relative bg-white rounded-xl shadow-md p-6 space-y-4"
                >
                  {/* Ta bort-knapp */}
                  <button
                    onClick={() => deleteService(service.id)}
                    className="absolute top-3 right-3 font-bold cursor-pointer"
                    title="Ta bort tjänst"
                  >
                    🗑️
                  </button>

                  <input
                    type="text"
                    value={service.name}
                    onChange={(e) =>
                      handleInputChange(e, index, "name")
                    }
                    placeholder="Tjänstens namn"
                    className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <textarea
                    value={service.description}
                    onChange={(e) =>
                      handleInputChange(e, index, "description")
                    }
                    placeholder="Beskrivning av tjänsten"
                    rows={3}
                    className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-500">Inga tjänster tillgängliga att visa.</p>
            )}
          </div>

        </main>
      </div>
    </div>
  );
}
