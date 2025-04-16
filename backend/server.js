const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); // För att kunna läsa JSON i request-body

const servicesFilePath = path.join(__dirname, "data", "services.json");

// Hämtar tjänster från services.json
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

// Sparar tjänster till services.json
app.post("/api/save", (req, res) => {
  const services = req.body.services; // Tjänster som skickas från frontend
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

app.listen(port, () => {
  console.log(`Servern körs på http://localhost:${port}`);
});

app.use((err, req, res, next) => {
    console.error("Ett okänt fel inträffade:", err);
    res.status(500).json({ error: "Ett okänt fel inträffade på servern" });
  });
  