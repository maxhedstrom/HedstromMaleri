import { useState, useEffect } from "react";

/**
 * useAdminResource
 * @param {{ fetchUrl: string, saveUrl: string, defaultItem: object }}
 */
export function useAdminResource({ fetchUrl, saveUrl, defaultItem }) {
  const [items, setItems] = useState([]);         // listan vi jobbar med
  const [isSaving, setIsSaving] = useState(false); // flagga när vi sparar

  // 1) Hämta data från API:t
  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Fetch error");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) setItems(data);
        else console.error("Förväntade array, fick:", data);
      })
      .catch((err) => console.error("Fel vid hämtning:", err));
  }, [fetchUrl]);

  // 2) Uppdatera ett fält på ett objekt
  const handleChange = (index, field, value) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    setItems(updated);
  };

  // 3) Lägg till nytt objekt överst
  const addItem = () => {
    const newItem = { id: Date.now(), ...defaultItem };
    setItems([newItem, ...items]);
  };

  // 4) Ta bort objekt
  const deleteItem = (id) => {
    if (window.confirm("Är du säker på att du vill ta bort?")) {
      setItems(items.filter((i) => i.id !== id));
    }
  };

  // 5) Spara hela listan
  const saveItems = async () => {
    setIsSaving(true);
    try {
      const res = await fetch(saveUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      if (!res.ok) throw new Error("Save failed");
      console.log("Sparat!");
    } catch (err) {
      console.error("Fel vid sparande:", err);
    } finally {
      setIsSaving(false);
    }
  };

  return { items, isSaving, handleChange, addItem, deleteItem, saveItems };
}
