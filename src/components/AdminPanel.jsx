// src/components/AdminPanel.jsx
import { useState } from "react";

export default function AdminPanel() {
  const [currentTab, setCurrentTab] = useState("dashboard");

  return (
    <>    
        <header className="relative min-h-[60vh] w-full bg-[linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url('src/assets/bilder/grabakgrund.webp')] bg-no-repeat bg-center bg-cover flex items-center justify-center">
        <h1 className="text-white text-4xl font-semibold text-center">
          Välkommen till adminpanelen
        </h1>
      </header>
      <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex gap-4 mb-6">
        <button onClick={() => setCurrentTab("dashboard")} className="btn">
          Översikt
        </button>
        <button onClick={() => setCurrentTab("services")} className="btn">
          Tjänster
        </button>
        <button onClick={() => setCurrentTab("images")} className="btn">
          Bilder
        </button>
        <button onClick={() => setCurrentTab("contact")} className="btn">
          Kontakt
        </button>
      </div>

      <div className="bg-white p-6 rounded shadow">
        {currentTab === "dashboard" && <p>Välkommen till adminpanelen!</p>}
        {currentTab === "services" && <ServicesEditor />}
        {currentTab === "images" && <ImagesEditor />}
        {currentTab === "contact" && <ContactEditor />}
      </div>
    </div>
    </>

  );
}

// Dessa komponenter bygger vi upp var för sig i nästa steg:
function ServicesEditor() {
  return <div>Här kan du redigera tjänster</div>;
}
function ImagesEditor() {
  return <div>Här kan du ladda upp bilder</div>;
}
function ContactEditor() {
  return <div>Här kan du ändra kontaktinfo</div>;
}
