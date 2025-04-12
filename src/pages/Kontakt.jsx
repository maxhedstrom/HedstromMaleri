import { useState } from "react";
import { Button } from "/src/components/ui/button";
import { Input } from "/src/components/ui/input";
import { Textarea } from "/src/components/ui/textarea";
import { Card, CardContent } from "/src/components/ui/card";
import { useRef } from "react";

  

//KONTAKT FORMULÄR - ej i användning i nuläget endast demonstration av komponenter

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  // Scrolla till Google Maps-kartan när adress trycks
  const mapsRef = useRef(null);
  const scrollToMap = () => {
    mapsRef.current?.scrollIntoView({ behavior: "smooth" });
  };  

 return (
  <div className="bg-gray-100 min-h-screen">
      
    {/* Header */}
    <header className="relative min-h-[60vh] w-full bg-[linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url('src/assets/bilder/grabakgrund.webp')] bg-no-repeat bg-center bg-cover flex items-center justify-center">
      <h1 className="text-white text-4xl font-semibold text-center">
        Kontakta oss
      </h1>
    </header>

    {/* Kontaktformulär */}
    <div className="flex flex-col lg:flex-row justify-center items-start gap-8 p-4 max-w-6xl mx-auto">
      <Card className="w-full max-w-lg shadow-lg rounded-2xl p-6 bg-white">
        <CardContent>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Fyll i kontaktformuläret så hör vi av oss inom 24 timmar.</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Ny dropdown för ämnesval */}
            <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Vad gäller ditt meddelande?</label>
              <div className="border p-2 rounded-md">
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-md p-2 text-gray-700"
                  required

                >
                  <option value="">Välj ett alternativ</option>
                  <option value="Tapetsering">Tapetsering</option>
                  <option value="Målning och Tapetsering">Tapetsering och målning</option>
                  <option value="Invändig målning">Invändig målning</option>
                  <option value="Utvändig målning">Utvändig målning</option>
                  <option value="Fasadmålning">Fasadmålning</option>
                  <option value="Våtrumsmålning">Våtrumsmålning</option>
                  <option value="Övrigt">Övrigt</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Namn</label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ditt namn"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">E-post</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Din e-post"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Meddelande</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Beskriv vad du behöver hjälp med här..."
                rows="4"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Skicka
            </Button>
          </form>
        </CardContent>
      </Card>
      

      {/* Företagsinfo + Faktura */}
      <Card className="w-full lg:w-1/2 shadow-xl rounded-2xl p-6 bg-white">
      <CardContent>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          🏢 Företagsinformation
        </h2>
        <ul className="space-y-3 text-gray-700 text-base">
          <li>
            <strong>📛 Företag:</strong> Hedström Måleri AB
          </li>
          <li>
            <strong>🧾 Org.nr:</strong> 556123-4567
          </li>
          <li>
            <strong>📞 Telefon:</strong> 073–600 20 47  
          </li>
          <li>
            <strong>✉️ E-post:</strong> <a href="mailto:info@hedstrommaleri.se" className="text-[var(--detalj-color)] hover:bg-[var(--rutor-color)] hover:underline">info@hedstrommaleri.se</a>
          </li>
          <li>
          <strong>📍 Adress:</strong>{" "}
              <button
                onClick={scrollToMap}
                className="text-[var(--detalj-color)] hover:underline"
              >
                Engelbrektsgatan 27, 702 13 Örebro
              </button>
            </li>
        </ul>

        <div className="mt-8 space-y-4">
          <a 
            href="/Faktureringsunderlag-Privatperson.docx" 
            className="inline-flex items-center gap-2 bg-[var(--detalj-color)] text-white px-4 py-2 rounded-lg hover:bg-red-700 transition hover:underline"
            download
          >
            📥 Ladda ner fakturaunderlag Privat (docx)
          </a>
          <a 
            href="/Faktureringsunderlag-Företag.docx" 
            className="inline-flex items-center gap-2 bg-[var(--detalj-color)] text-white px-4 py-2 rounded-lg hover:bg-red-700 transition hover:underline"
            download
          >
            📥 Ladda ner fakturaunderlag Företag (docx)
          </a>
        </div>
      </CardContent>
      </Card>
    </div>


          {/* Google Maps-karta */}
          <div ref={mapsRef} className="flex justify-center items-center p-4 mt-10">
          <div className="w-full max-w-4xl h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2038.7678437657532!2d15.22228237649802!3d59.27002757458561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465c14fc4e3f1c91%3A0xc7d6ca23e573e096!2sEngelbrektsgatan%2027%2C%20702%2013%20%C3%96rebro%2C%20Sverige!5e0!3m2!1ssv!2ses!4v1744365960019!5m2!1ssv!2ses&zoom=10"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}