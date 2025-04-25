const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); // För att kunna läsa JSON i request-body

const servicesFilePath = path.join(__dirname, "data", "services.json");
const personalFilePath = path.join(__dirname, "data", "personal.json");

// ==============================
// Hämta tjänster
// ==============================
app.get("/api/get", (req, res) => {
  fs.readFile(servicesFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading services.json:", err);
      return res.status(500).json({ error: "Fel vid hämtning av tjänster" });
    }
    try {
      const services = JSON.parse(data);
      res.json(services);
    } catch (parseError) {
      console.error("Error parsing services.json:", parseError);
      res.status(500).json({ error: "Fel vid bearbetning av tjänster" });
    }
  });
});

// ==============================
// Hämta personal
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
// Spara tjänster
// ==============================
app.post("/api/save", (req, res) => {
  const services = req.body.services;
  if (!Array.isArray(services)) {
    console.error("Tjänsterna är inte en array:", services);
    return res.status(400).json({ error: "Tjänsterna måste vara en array" });
  }

  fs.writeFile(servicesFilePath, JSON.stringify(services, null, 2), "utf8", (err) => {
    if (err) {
      console.error("Error saving services:", err);
      return res.status(500).json({ error: "Fel vid sparande av tjänster" });
    }
    res.json({ message: "Tjänster sparade!" });
  });
});

// ==============================
// Spara personal
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
