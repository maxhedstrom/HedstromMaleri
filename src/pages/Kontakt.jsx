import { useState, useEffect, useRef } from "react";
import { Button } from "/src/components/ui/button";
import { Input } from "/src/components/ui/input";
import { Textarea } from "/src/components/ui/textarea";
import { Card, CardContent } from "/src/components/ui/card";
import { useLocation } from "react-router-dom";

const fallbackKontakt = {
  name: "Hedström Måleri AB",
  orgNumber: "556123-4567",
  phone: "070-123 45 67",
  email: "info@hedstrommaleri.se",
  address: "Exempelgatan 1, 123 45 Örebro"
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [info, setInfo] = useState(null);
  const [usingFallback, setUsingFallback] = useState(false);

  const location = useLocation();
  const mapRef = useRef(null);

  // Hantera input-ändringar och rensa fel för det fältet
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
    setErrors((f) => ({ ...f, [name]: "" }));
  };

  // Validering
  const validateForm = () => {
    const newErrors = {};
    if (!formData.subject) newErrors.subject = "Välj ett ärende.";
    if (!formData.name.trim()) newErrors.name = "Namn krävs.";
    if (!formData.email.trim()) {
      newErrors.email = "E-post krävs.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ogiltig e-postadress.";
    }
    if (!formData.message.trim()) newErrors.message = "Meddelande krävs.";
    setErrors(newErrors);
    return newErrors;
  };

  // Skicka formuläret
  const handleSubmit = async (e) => {
    e.preventDefault();
    const valErr = validateForm();
    if (Object.keys(valErr).length) {
      // sätt fokus på första felande fält
      const first = Object.keys(valErr)[0];
      document.querySelector(`[name="${first}"]`)?.focus();
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setFormSubmitted(true);
        setFormData({ subject: "", name: "", email: "", message: "" });
        setErrors({});
      } else {
        alert("Kunde inte skicka. Försök senare.");
      }
    } catch {
      alert("Mailet kunde inte skickas, kvarstår problemet så kan du skicka ett mail direkt till oss på: hedstrom@info.se");
    } finally {
      setIsLoading(false);
    }
  };

  // Hämta företagsinfo med fallback
  useEffect(() => {
    fetch("http://localhost:5000/api/get-kontakt")
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length) {
          setInfo(data[0]);
        } else {
          setInfo(fallbackKontakt);
          setUsingFallback(true);
        }
      })
      .catch(() => {
        setInfo(fallbackKontakt);
        setUsingFallback(true);
      });
  }, []);

  // Scroll-to-map från URL
  useEffect(() => {
    if (location.search.includes("scrollTo=map")) {
      mapRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const scrollToMap = () => mapRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero */}
      <header className="relative min-h-[60vh] w-full bg-[linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url('src/assets/bilder/grabakgrund.webp')] bg-no-repeat bg-center bg-cover flex items-center justify-center">
        <h1 className="text-white text-4xl font-semibold text-center">Kontakta oss</h1>
      </header>

      <main className="flex flex-col lg:flex-row gap-8 p-6 max-w-6xl mx-auto">
        {/* Formulär */}
        <Card className="w-full max-w-lg">
          <CardContent>
            {!formSubmitted ? (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <h2 className="text-2xl font-bold text-center text-[var(--rubrik-color)] mb-6">
                  Fyll i kontaktformuläret så hör vi av oss inom 24 timmar.
                </h2>
                {/* Ärende */}
                <div>
                  <label className="block font-medium text-[var(--rubrik-color)]">Ärende</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full border px-3 py-2 rounded ${errors.subject ? "border-red-500" : ""}`}
                  >
                    <option value="">Välj...</option>
                    <option>Tapetsering</option>
                    <option>Målning och Tapetsering</option>
                    <option>Invändig målning</option>
                    <option>Utvändig målning</option>
                    <option>Fasadmålning</option>
                    <option>Våtrumsmålning</option>
                    <option>Övrigt</option>
                  </select>
                  {errors.subject && <p className="text-red-600 text-sm">{errors.subject}</p>}
                </div>

                {/* Namn */}
                <div>
                  <label className="block font-medium text-[var(--rubrik-color)]">Namn</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ditt namn"
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
                </div>

                {/* E-post */}
                <div>
                  <label className="block font-medium text-[var(--rubrik-color)]">E-post</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Din e-post"
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                </div>

                {/* Meddelande */}
                <div>
                  <label className="block font-medium text-[var(--rubrik-color)]">Meddelande</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Skriv ditt meddelande här..."
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
                </div>

                {/* Skicka-knapp */}
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Meddelandet skickas... lämna inte sidan" : "Skicka"}
                </Button>
              </form>
            ) : (
             <h3 className="text-center text-4xl text-[var(--rubrik-color)]">
                Tack för ditt meddelande <br /><br /> ✅ <br /><br />Vi återkommer så snart vi kan.
              </h3>
            )}
          </CardContent>
        </Card>

 {/* Företagsinfo */}
 
        <Card className="w-full lg:w-1/2 shadow-xl rounded-2xl p-6 bg-gray-100">
        
            <CardContent className="-mt-10">
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
                    <a href={`mailto:${info.email}`} className="text-[var(--detalj-color)] hover:underline">
                      {info.email}
                    </a>
                  </li>
                  <li>
                    <strong>📍 Adress:</strong>{" "}
                    <button onClick={scrollToMap} className="text-[var(--detalj-color)] hover:underline">
                      {info.address}
                    </button>
                  </li>
                </ul>

                {usingFallback && (
                  <p className="text-sm text-yellow-600 mt-4">
                    ⚠️ Visar reservinformation – kunde inte hämta data från servern. <br />
                    Kontakta oss direkt eller via formuläret för att vara säker på att du har den senaste informationen.
                  </p>
                )}
              </>
            ) : (
              <p>Laddar företagsinformation...</p>
            )}

            <div className="mt-8 space-y-4">
              <a href="/Faktureringsunderlag-Privatperson.docx" className="inline-flex items-center gap-2 bg-[var(--detalj-color)] text-white px-4 py-2 rounded-lg hover:bg-red-700 transition hover:underline" download>
                📥 Ladda ner fakturaunderlag Privat (docx)
              </a>
              <a href="/Faktureringsunderlag-Företag.docx" className="inline-flex items-center gap-2 bg-[var(--detalj-color)] text-white px-4 py-2 rounded-lg hover:bg-red-700 transition hover:underline" download>
                📥 Ladda ner fakturaunderlag Företag (docx)
              </a>
            </div>
          </CardContent>
        </Card> 
        
      </main>

      {/* Google Maps */}
      <section ref={mapRef} className="p-4">
        <div className="w-full max-w-4xl mx-auto h-[400px]">
          <iframe
            className="w-full h-full rounded-2xl shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2038.7678437657532!2d15.22228237649802!3d59.27002757458561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465c14fc4e3f1c91%3A0xc7d6ca23e573e096!2sEngelbrektsgatan%2027%2C%20702%2013%20Örebro!5e0!3m2!1ssv!2ses!4v1744365960019!5m2!1ssv!2ses"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
