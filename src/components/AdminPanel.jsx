import React, { useState, useEffect } from "react";

function AdminPanel() {
  const [services, setServices] = useState([]);

  // Hämtar data från backend (services.json) när sidan laddas
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
          setServices(data); // Uppdaterar state med hämtad data
        } else {
          console.error("Felaktig dataformat från servern");
        }
      })
      .catch((error) => {
        console.error("Fel vid hämtning av tjänster:", error);
      });
  }, []);
  

  const handleInputChange = (e, index, field) => {
    const newServices = [...services];
    newServices[index][field] = e.target.value;
    setServices(newServices); // Uppdaterar state med den nya tjänsten
  };

  const saveServices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ services }), // Skickar alla tjänster till backend
      });

      if (response.ok) {
        console.log("Tjänster sparade!");
      } else {
        console.error("Fel vid sparande");
      }
    } catch (error) {
      console.error("Fel vid kommunikation med servern", error);
    }
  };

  return (
    <div>
      <header className="relative min-h-[60vh] w-full bg-[linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url('src/assets/bilder/slottet.jpg')] bg-no-repeat bg-center bg-cover flex items-center justify-center px-4 text-center">
        <h1 className="text-white text-3xl md:text-4xl font-semibold max-w-2xl drop-shadow-lg">
          Vi värnar om din data
        </h1>
      </header>
      <h1>Adminpanel för att Redigera Tjänster</h1>
      <p>Här kan du redigera de tillgängliga tjänsterna och spara dem till backend.</p>
      <div>
        {Array.isArray(services) && services.length > 0 ? (
          services.map((service, index) => (
            <div key={service.id} style={{ marginBottom: "10px" }}>
              <input
                type="text"
                value={service.name}
                onChange={(e) => handleInputChange(e, index, "name")}
                placeholder="Tjänstnamn"
                style={{ marginRight: "10px" }}
              />
              <input
                type="text"
                value={service.description}
                onChange={(e) => handleInputChange(e, index, "description")}
                placeholder="Beskrivning"
                style={{ marginRight: "10px" }}
              />
            </div>
          ))
        ) : (
          <p>Inga tjänster tillgängliga att visa</p>
        )}
      </div>
       {/* Spara knappen */}
       <button
        onClick={saveServices}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Spara Tjänster
      </button>    </div>
  );
}

export default AdminPanel;
