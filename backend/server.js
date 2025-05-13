// Importera nödvändiga moduler
const express = require("express");
const cors = require("cors");
const fs = require("fs/promises");
const path = require("path");

const app = express();
const port = 5000;
const nodemailer = require("nodemailer");

// Middleware
app.use(cors()); // Tillåter förfrågningar från andra domäner (t.ex. din frontend)
app.use(express.json()); // Gör att vi kan läsa JSON i inkommande requests

// Definiera sökvägar till JSON-filerna
const dataDir = path.join(__dirname, "data");
const filePaths = {
  homeServices: path.join(dataDir, "homeServices.json"),
  personal: path.join(dataDir, "personal.json"),
  services: path.join(dataDir, "services.json"),
  projekt: path.join(dataDir, "projekt.json"),
  kontakt: path.join(dataDir, "kontakt.json"),
};

// Se till att data-mappen finns (skapas om den saknas)
fs.mkdir(dataDir, { recursive: true }).catch(console.error);

// ==============================
// GET-routes för att läsa data
// ==============================

// Hämtar hem-tjänster (för startsidan)
app.get("/api/get-home-services", async (req, res) => {
  try {
    const data = await fs.readFile(filePaths.homeServices, "utf8");
    res.json(JSON.parse(data));
  } catch (err) {
    console.error("Fel vid hämtning av homeServices:", err);
    res.status(500).json({ error: "Fel vid hämtning av hem-tjänster" });
  }
});

// Hämtar personalinformation (för 'Om oss'-sidan)
app.get("/api/personal", async (req, res) => {
  try {
    const data = await fs.readFile(filePaths.personal, "utf8");
    res.json(JSON.parse(data));
  } catch (err) {
    console.error("Fel vid hämtning av personal:", err);
    res.status(500).json({ error: "Kunde inte läsa personalfilen." });
  }
});

// Hämtar tjänster (för tjänstesidan)
app.get("/api/get-services", async (req, res) => {
  try {
    const data = await fs.readFile(filePaths.services, "utf8");
    res.json(JSON.parse(data));
  } catch (err) {
    console.error("Fel vid hämtning av services:", err);
    res.status(500).json({ error: "Fel vid hämtning av services" });
  }
});

// Hämtar projekt (för referenser/projekt-sidan)
app.get("/api/get-projekt", async (req, res) => {
  try {
    const data = await fs.readFile(filePaths.projekt, "utf8");
    res.json(JSON.parse(data));
  } catch (err) {
    console.error("Fel vid hämtning av projekt:", err);
    res.status(500).json({ error: "Fel vid hämtning av projekt" });
  }
});

// Hämtar kontaktinformation (för kontaktsidan)
app.get("/api/get-kontakt", async (req, res) => {
  try {
    const data = await fs.readFile(filePaths.kontakt, "utf8");
    res.json(JSON.parse(data));
  } catch (err) {
    console.error("Fel vid hämtning av kontakt:", err);
    res.status(500).json({ error: "Fel vid hämtning av kontaktinfo" });
  }
});

// ==============================
// POST-routes för att spara data
// ==============================

// Sparar hem-tjänster
app.post("/api/save-home-services", async (req, res) => {
  const homeServices = req.body.homeServices;
  if (!Array.isArray(homeServices)) {
    return res.status(400).json({ error: "Hem-tjänsterna måste vara en array" });
  }

  try {
    await fs.writeFile(filePaths.homeServices, JSON.stringify(homeServices, null, 2), "utf8");
    res.json({ success: true, message: "Hem-tjänster sparade!" });
  } catch (err) {
    console.error("Fel vid sparande av homeServices:", err);
    res.status(500).json({ error: "Fel vid sparande av hem-tjänster" });
  }
});

// Sparar personalinformation
app.post("/api/save-personal", async (req, res) => {
  const personal = req.body.personal;
  if (!Array.isArray(personal)) {
    return res.status(400).json({ error: "Personal måste vara en array." });
  }

  try {
    await fs.writeFile(filePaths.personal, JSON.stringify(personal, null, 2), "utf8");
    res.json({ success: true, message: "Personal sparad!" });
  } catch (err) {
    console.error("Fel vid sparande av personal:", err);
    res.status(500).json({ error: "Kunde inte spara personalfilen." });
  }
});

// Sparar tjänster
app.post("/api/save-services", async (req, res) => {
  const services = req.body.services;
  if (!Array.isArray(services)) {
    return res.status(400).json({ error: "Services måste vara en array" });
  }

  try {
    await fs.writeFile(filePaths.services, JSON.stringify(services, null, 2), "utf8");
    res.json({ success: true, message: "Services sparade!" });
  } catch (err) {
    console.error("Fel vid sparande av services:", err);
    res.status(500).json({ error: "Fel vid sparande av services" });
  }
});

// Sparar projekt
app.post("/api/save-projekt", async (req, res) => {
  const projekt = req.body.projekt;
  if (!Array.isArray(projekt)) {
    return res.status(400).json({ error: "Projekt måste vara en array" });
  }

  try {
    await fs.writeFile(filePaths.projekt, JSON.stringify(projekt, null, 2), "utf8");
    res.json({ success: true, message: "Projekt sparade!" });
  } catch (err) {
    console.error("Fel vid sparande av projekt:", err);
    res.status(500).json({ error: "Fel vid sparande av projekt" });
  }
});

// Sparar kontaktinformation
app.post("/api/save-kontakt", async (req, res) => {
  const kontakt = req.body.kontakt;
  if (typeof kontakt !== "object" || kontakt === null) {
    return res.status(400).json({ error: "Kontakt måste vara ett objekt" });
  }

  try {
    await fs.writeFile(filePaths.kontakt, JSON.stringify(kontakt, null, 2), "utf8");
    res.json({ success: true, message: "Kontaktinfo sparad!" });
  } catch (err) {
    console.error("Fel vid sparande av kontakt:", err);
    res.status(500).json({ error: "Fel vid sparande av kontakt" });
  }
});

// ==============================
// Hälsokontroll (användbar för felsökning)
// ==============================
app.get("/", (req, res) => {
  res.send("Servern är igång! ✅");
});

// ==============================
// Global felhanterare
// ==============================
app.use((err, req, res, next) => {
  console.error("Ett okänt fel inträffade:", err);
  res.status(500).json({ error: "Ett okänt fel inträffade på servern" });
});

// ==============================
// POST-routes för att hantera mail
// ==============================
app.post("/api/send-email", async (req, res) => {
  const { name, email, message, subject } = req.body;

  if (!name || !email || !message || !subject) {
    return res.status(400).json({ error: "Alla fält måste fyllas i." });
  }

  try {
    // OBS! Du måste ersätta dessa uppgifter med din e-postinformation
    let transporter = nodemailer.createTransport({
      service: "icloud", // Exempel: Gmail, Outlook etc.
      auth: {
        user: "max.hedstrom@icloud.com",
        pass: "npkr-gjsi-cteb-cwto" // Använd *inte* ditt vanliga lösen – se nedan!
      }
    });

    let mailOptions = {
      from: "max.hedstrom@icloud.com",
      to: "max.hedstrom@icloud.com", // Din mottagaradress
      subject: `Kontaktförfrågan: ${subject}`,
      text: `Namn: ${name}\nE-post: ${email}\n\nMeddelande:\n${message}`
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "E-post skickat!" });

  } catch (error) {
    console.error("Fel vid skickande av e-post:", error);
    res.status(500).json({ error: "Misslyckades att skicka e-post." });
  }
});


// ==============================
// Starta servern
// ==============================
app.listen(port, () => {
  console.log(`Servern körs på http://localhost:${port}`);
});
