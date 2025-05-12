const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); // För att kunna läsa JSON i request-body

const homeServicesFilePath = path.join(__dirname, "data", "homeServices.json");
const personalFilePath = path.join(__dirname, "data", "personal.json");
const servicesFilePath = path.join(__dirname, "data", "services.json");
const projektFilePath = path.join(__dirname, "data", "projekt.json");
const kontaktFilePath = path.join(__dirname, "data", "kontakt.json");

 
// ==============================
// Hämta tjänster [Hem.jsx]
// ==============================
app.get("/api/get-home-services", (req, res) => {
  fs.readFile(homeServicesFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading homeServices.json:", err);
      return res.status(500).json({ error: "Fel vid hämtning av hem-tjänster" });
    }
    try {
      const homeServices = JSON.parse(data);
      res.json(homeServices);
    } catch (parseError) {
      console.error("Error parsing homeServices.json:", parseError);
      res.status(500).json({ error: "Fel vid bearbetning av hem-tjänster" });
    }
  });
});

// ==============================
// Hämta personal [Om.jsx]
// ==============================
app.get("/api/personal", (req, res) => {
  fs.readFile(personalFilePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Kunde inte läsa personalfilen." });
    }
    res.json(JSON.parse(data));
  });
});

// ==============================
// Hämta services [Tjänster.jsx]
// ==============================

app.get("/api/get-services", (req, res) => {
  fs.readFile(servicesFilePath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Fel vid hämtning av services" });
    try {
      res.json(JSON.parse(data));
    } catch {
      res.status(500).json({ error: "Fel vid bearbetning av services" });
    }
  });
});

// ==============================
// Hämta projekt [Projekt.jsx]
// ==============================
app.get("/api/get-projekt", (req, res) => {
  fs.readFile(projektFilePath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Fel vid hämtning av projekt" });
    try {
      res.json(JSON.parse(data));
    } catch {
      res.status(500).json({ error: "Fel vid bearbetning av projekt" });
    }
  });
});

// ==============================
// Hämta kontakt [Kontakt.jsx]
// ==============================
app.get("/api/get-kontakt", (req, res) => {
  fs.readFile(kontaktFilePath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Fel vid hämtning av kontakt" });
    try {
      res.json(JSON.parse(data));
    } catch {
      res.status(500).json({ error: "Fel vid bearbetning av kontaktinfo" });
    }
  });
});


// ==============================
// Spara tjänster [Hem.jsx]
// ==============================
app.post("/api/save-home-services", (req, res) => {
  const homeServices = req.body.homeServices;
  if (!Array.isArray(homeServices)) {
    console.error("Hem-tjänsterna är inte en array:", homeServices);
    return res.status(400).json({ error: "Hem-tjänsterna måste vara en array" });
  }

  fs.writeFile(homeServicesFilePath, JSON.stringify(homeServices, null, 2), "utf8", (err) => {
    if (err) {
      console.error("Error saving homeServices:", err);
      return res.status(500).json({ error: "Fel vid sparande av hem-tjänster" });
    }
    res.json({ message: "Hem-tjänster sparade!" });
  });
});

// ==============================
// Spara personal [Om.jsx]
// ==============================
app.post("/api/save-personal", (req, res) => {
  const personal = req.body.personal;
  if (!Array.isArray(personal)) {
    return res.status(400).json({ error: "Personal måste vara en array." });
  }

  fs.writeFile(personalFilePath, JSON.stringify(personal, null, 2), "utf8", (err) => {
    if (err) {
      return res.status(500).json({ error: "Kunde inte spara personalfilen." });
    }
    res.json({ success: true });
  });
});

// ==============================
// Spara services [Tjänster.jsx]
// ==============================
app.post("/api/save-services", (req, res) => {
  const services = req.body.services;
  if (!Array.isArray(services)) {
    return res.status(400).json({ error: "Services måste vara en array" });
  }
  fs.writeFile(servicesFilePath, JSON.stringify(services, null, 2), "utf8", err => {
    if (err) return res.status(500).json({ error: "Fel vid sparande av services" });
    res.json({ message: "Services sparade!" });
  });
});

// ==============================
// Spara projekt [Projekt.jsx]
// ==============================
app.post("/api/save-projekt", (req, res) => {
  const projekt = req.body.projekt;         // 1) Läs rätt namn
  if (!Array.isArray(projekt)) {
    return res.status(400).json({ error: "Projekt måste vara en array" });
  }
  fs.writeFile(projektFilePath,             // 2) Skriv till rätt fil
               JSON.stringify(projekt, null, 2),
               "utf8",
               err => {
    if (err) return res.status(500).json({ error: "Fel vid sparande av projekt" });
    res.json({ message: "Projekt sparat!" });
  });
});


// ==============================
// Spara services [Kontakt.jsx]
// ==============================
app.post("/api/save-kontakt", (req, res) => {
  const kontakt = req.body.kontakt;
  if (typeof kontakt !== "object" || kontakt === null) {
    return res.status(400).json({ error: "Kontakt måste vara ett objekt" });
  }

  fs.writeFile(kontaktFilePath, JSON.stringify(kontakt, null, 2), "utf8", err => {
    if (err) return res.status(500).json({ error: "Fel vid sparande av kontakt" });
    res.json({ message: "Kontaktinfo sparad!" });
  });
});

// ==============================
// Starta servern
// ==============================
app.listen(port, () => {
  console.log(`Servern körs på http://localhost:${port} din jävla grävlign`);
});

// ==============================
// Global felhantering
// ==============================
app.use((err, req, res, next) => {
  console.error("Ett okänt fel inträffade:", err);
  res.status(500).json({ error: "Ett okänt fel inträffade på servern" });
});
