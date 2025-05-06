import { useState, useEffect } from "react";
/**
 * useAdminResource
 * @param {{
 *   fetchUrl: string,
 *   saveUrl: string,
 *   defaultItem: object,
 *   resourceName: string
 * }}
 */

// Parsar tex "2025 - pågående" till ett tal 2025
function parseYear(yearStr) {
  const m = yearStr.match(/\d{4}/);
  return m ? parseInt(m[0], 10) : 0;
}

// Sorterar array efter årfältet
function sortByYear(arr) {
  return [...arr].sort((a, b) => parseYear(a.year) - parseYear(b.year));
}

export function useAdminResource({ fetchUrl, saveUrl, defaultItem, resourceName }) {
  const [items, setItems] = useState([]);
  const [isSaving, setIsSaving] = useState(false);

  // Hämta data vid mount / url-ändring
  useEffect(() => {
    fetch(fetchUrl)
      .then(res => {
        if (!res.ok) throw new Error("Fetch error");
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          // sortera innan du sätter state
          setItems(sortByYear(data));
        } else console.error("Förväntade array, fick:", data);
      })
      .catch(err => console.error("Fel vid hämtning:", err));
  }, [fetchUrl]);
  

  // Uppdatera fält
  const handleChange = (index, field, value) => {
    setItems(prev => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: value };
      return copy;
    });
  };

  // Lägg till nytt objekt överst
  const addItem = () => {
    const newItem = { id: Date.now(), ...defaultItem };
    setItems(prev => {
      const withNew = [...prev, newItem];
      return sortByYear(withNew);
    });
  };
    

  // Spara alla (kan ta emot en lista att spara, annars sparar nuvarande state)
  const saveItems = async (customItems = items) => {
    setIsSaving(true);
    try {
      const sorted = sortByYear(customItems);
      const payload = { [resourceName]: sorted };
      console.log("Payload som skickas:", JSON.stringify(payload, null, 2));
      const res = await fetch(saveUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Save failed");
      console.log(`${resourceName} sparade!`);
      // uppdatera även state med sorterad lista
      setItems(sorted);
    } catch (err) {
      console.error("Fel vid sparande:", err);
    } finally {
      setIsSaving(false);
    }
  };
  

  const deleteItem = id => {
    setItems(prev => {
      const updated = prev.filter(i => i.id !== id);
      saveItems(updated); // spara den nya listan direkt
      return updated;
    });
  };
  

  return { items, isSaving, handleChange, addItem, deleteItem, saveItems };
}
