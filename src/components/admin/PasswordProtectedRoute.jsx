import { useState, useEffect } from "react";
import AdminPanel from "./AdminPanel";
import { FaQuestionCircle } from "react-icons/fa";
import { getUrl } from "@/utils/api";

export default function PasswordProtectedRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [input, setInput] = useState("");
  const [showHelp, setShowHelp] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
        const res = await fetch(getUrl("/admin"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: input }),
      });

      if (!res.ok) {
        console.log("Login failed:", res.status, res.statusText);
        setError("Fel lösenord. Försök igen.");
        return;
      }

      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true);
        localStorage.setItem("isAdminAuthenticated", "true");
        setError(""); // Nollställ ev. gammalt fel
        window.location.reload(); // Ladda om sidan för att visa adminpanelen navbar korrekt
      }
    } catch (err) {
      console.error("Inloggningsfel:", err);
      setError("Serverfel vid inloggning. Försök igen senare.");
    }
  };

  useEffect(() => {
    // Kolla om användaren redan är inloggad i localStorage vid mount
    const savedAuth = localStorage.getItem("isAdminAuthenticated");
    if (savedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  if (isAuthenticated) {
    return <AdminPanel />;
  }

  return (
    <>
      <header className="relative min-h-[60vh] w-full bg-[linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url('src/assets/bilder/slottet.jpg')] bg-no-repeat bg-center bg-cover flex items-center justify-center px-4 text-center">
        <h1 className="text-white text-3xl md:text-4xl font-semibold max-w-2xl drop-shadow-lg">
          Välkommen till adminpanelen
        </h1>
      </header>
      <div className="min-h-screen flex flex-col items-center bg-gray-100 relative pt-32">
        {/* Frågetecken-ikon */}
        <div className="absolute top-4 right-4 text-gray-500 cursor-pointer">
          <FaQuestionCircle size={22} onClick={() => setShowHelp(!showHelp)} />
          {showHelp && (
            <div className="absolute right-0 mt-2 w-64 p-3 bg-white border rounded shadow text-sm z-10">
              Kontakta{" "}
              <span className="font-semibold">info@hedstrommaleri.se</span> för att
              få tillgång till adminpanelen.
            </div>
          )}
        </div>

        {/* Inloggningsruta */}
        <div className="bg-white p-6 rounded shadow w-80">
          <h1 className="text-xl font-bold mb-4 text-center">Admininloggning</h1>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Lösenord"
            className="w-full border p-2 rounded mb-4"
          />
          {error && (
            <div className="text-red-600 text-sm mb-3">{error}</div>
          )}
          <button
            onClick={handleLogin}
            className="w-full bg-[var(--text-color)] text-white p-2 rounded hover:bg-[var(--rubrik-color)] cursor-pointer"
          >
            Logga in
          </button>
        </div>
      </div>
    </>
  );
}
