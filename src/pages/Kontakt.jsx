  import { useState, useEffect, useRef } from "react";
  import { Button } from "/src/components/ui/button";
  import { Input } from "/src/components/ui/input";
  import { Textarea } from "/src/components/ui/textarea";
  import { Card, CardContent } from "/src/components/ui/card";
  import { useLocation } from "react-router-dom";

  //KONTAKT FORMULÄR - ej kopplat ill backend i nuläget endast demonstration av komponenter
  // Lägg högst upp i filen, ovanför ContactForm-komponenten
  const fallbackKontakt = {
  name: "Hedström Måleri AB",
  orgNumber: "556123-4567",
  phone: "070-123 45 67",
  email: "info@hedstrommaleri.se",
  address: "Exempelgatan 1, 123 45 Örebro"
};
  export default function ContactForm() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
      subject: ""
    });

    const [info, setInfo] = useState(null);
    const [usingFallback, setUsingFallback] = useState(false); // <- Nytt

    // State för att hantera om formuläret har skickats
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Här skulle man normalt skicka formuläret till backend eller e-post
      console.log("Formuläret skickat!", formData);
  
      // Nollställ formulär och visa tack-meddelande
      setFormData({
        name: "",
        email: "",
        message: "",
        subject: ""
      });
      setFormSubmitted(true);
    };

    // Variabler och funktion för att scrolla till Google Maps-kartan från både länk i footern och lokalt på denna sida
    const location = useLocation();
    const mapRef = useRef(null);

    // Scrolla till Google Maps-kartan när adress trycks
      useEffect(() => {
      const params = new URLSearchParams(location.search);
      const shouldScroll = params.get("scrollTo") === "map";
      if (shouldScroll && mapRef.current) {
        mapRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, [location]);

useEffect(() => {
  fetch("http://localhost:5000/api/get-kontakt")
    .then((res) => {
      if (!res.ok) throw new Error("Nätverksfel eller icke-OK status");
      return res.json();
    })
    .then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        setInfo(data[0]);
      } else {
        console.warn("Tom data – använder fallback");
        setInfo(fallbackKontakt);
        setUsingFallback(true);
      }
    })
    .catch((err) => {
      console.error("Fel vid hämtning av företagsinfo:", err);
      setInfo(fallbackKontakt);
      setUsingFallback(true);
    });
}, []);

   
      

    const scrollToMap = () => {
      if (mapRef.current) {
        mapRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="relative min-h-[60vh] w-full bg-[linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url('src/assets/bilder/grabakgrund.webp')] bg-no-repeat bg-center bg-cover flex items-center justify-center">
        <h1 className="text-white text-4xl font-semibold text-center">
          Kontakta oss
        </h1>
      </header>

      {/* Kontaktformulär */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 p-4 max-w-6xl mx-auto">
            <Card className="w-full max-w-lg shadow-lg rounded-2xl p-6 bg-white">
              <CardContent>
            {/* Formulär med Tack meddelande */}
            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-center text-[var(--rubrik-color)] mb-6">
                      Fyll i kontaktformuläret så hör vi av oss inom 24 timmar.
                  </h2>
                  <label className="block text-[var(--rubrik-color)] font-medium">Vad gäller ditt meddelande?</label>
                  <div className="border p-2 rounded-md">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border-gray-300 rounded-md cursor-pointer p-2 text-[var(--text-color)]"
                      required
                    >
                      <option value="">Välj ett alternativ</option>
                      <option value="Tapetsering">Tapetsering</option>
                      <option value="Målning och Tapetsering">Målning och Tapetsering</option>
                      <option value="Invändig målning">Invändig målning</option>
                      <option value="Utvändig målning">Utvändig målning</option>
                      <option value="Fasadmålning">Fasadmålning</option>
                      <option value="Våtrumsmålning">Våtrumsmålning</option>
                      <option value="Övrigt">Övrigt</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[var(--rubrik-color)] font-medium">Namn</label>
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
                  <label className="block text-[var(--rubrik-color)] font-medium">E-post</label>
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
                  <label className="block text-[var(--rubrik-color)] font-medium">Meddelande</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Beskriv vad du behöver hjälp med här..."
                    rows="4"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Skicka</Button>
              </form>
            ) : (
              <h3 className="text-center text-4xl text-[var(--rubrik-color)]">
                Tack för ditt meddelande <br /><br /> ✅ <br /><br />Vi återkommer så snart vi kan.
              </h3>
              
            )}
          </CardContent>
        </Card>
        

        {/* Företagsinfo + Faktura */}
        <Card className="w-full lg:w-1/2 shadow-xl rounded-2xl p-6 bg-white">
        <CardContent>
            <h2 className="text-3xl font-bold text-[var(--rubrik-color)] mb-6 flex items-center gap-2">
              🏢 Företagsinformation
            </h2>
          <h2 className="text-3xl font-bold text-[var(--rubrik-color)] mb-6 flex items-center gap-2">
            🏢 Företagsinformation
          </h2>

    {info ? (
  <>
    <ul className="space-y-3 text-gray-700 text-base">
      <li><strong>📛 Företag:</strong> {info.name}</li>
      <li><strong>🧾 Org.nr:</strong> {info.orgNumber}</li>
      <li><strong>📞 Telefon:</strong> {info.phone}</li>
      <li>
        <strong>✉️ E-post:</strong>{" "}
        <a
          href={`mailto:${info.email}`}
          className="text-[var(--detalj-color)] hover:bg-[var(--rutor-color)] hover:underline"
        >
          {info.email}
        </a>
      </li>
      <li>
        <strong>📍 Adress:</strong>{" "}
        <button
          onClick={scrollToMap}
          className="text-[var(--detalj-color)] hover:underline"
        >
          {info.address}
        </button>
      </li>
    </ul>

    {usingFallback && (
      <p className="text-sm text-yellow-600 mt-4">
        ⚠️ Visar reservinformation – kunde inte hämta data från servern. 
        <br />
        För att vara säker på att du har den senaste informationen, vänligen kontakta oss direkt eller via formuläret på denna sida.
      </p>
    )}
  </>
) : (
  <p>Laddar företagsinformation...</p>
)}



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
        <div ref={mapRef} className="flex justify-center items-center p-4 mt-10">
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