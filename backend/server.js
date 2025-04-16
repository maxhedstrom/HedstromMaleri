const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors()); // Tillåt förfrågningar från frontend
app.use(express.json()); // Tolka inkommande JSON

// POST: Spara data till services.json
app.post("/api/save", (req, res) => {
  fs.writeFile("../data/services.json", JSON.stringify(req.body, null, 2), (err) => {
    if (err) {
      console.error("Fel vid skrivning:", err);
      return res.status(500).send("Fel vid sparande");
    }
    res.send("Tjänster sparade!");
  });
});

// Starta servern
app.listen(PORT, () => {
  console.log(`✅ Servern körs på http://localhost:${PORT}`);
});
