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
        if (Array.isArray(data)) setItems(data);
        else console.error("Förväntade array, fick:", data);
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
    setItems(prev => [newItem, ...prev]);
  };

  // Spara alla (kan ta emot en lista att spara, annars sparar nuvarande state)
  const saveItems = async (customItems = items) => {
    setIsSaving(true);
    try {
      const payload = { [resourceName]: customItems };
      const res = await fetch(saveUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Save failed");
      console.log(`${resourceName} sparade!`);
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
