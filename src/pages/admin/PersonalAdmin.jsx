import React, { useEffect, useState } from "react";

export default function PersonalAdmin() {
  const [staff, setStaff] = useState([]);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/personal")
      .then((res) => res.json())
      .then((data) => setStaff(data))
      .catch((err) => console.error("Fel vid hämtning av personal:", err));
  }, []);

  const handleChange = (e, index, field) => {
    const updated = [...staff];
    updated[index][field] = e.target.value;
    setStaff(updated);
  };

  const addPerson = () => {
    setStaff([
      {
        id: Date.now(),
        name: "",
        role: "",
        email: "",
        image: "",
        description: "",
      },
      ...staff,
    ]);
  };

  const deletePerson = (id) => {
    const confirmed = window.confirm("Vill du verkligen ta bort den här personen?");
    if (confirmed) {
      setStaff(staff.filter((p) => p.id !== id));
    }
  };

  const saveStaff = async () => {
    setIsSaving(true);
    try {
      const res = await fetch("http://localhost:5000/api/personal/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ staff }),
      });

      if (!res.ok) throw new Error("Kunde inte spara personaldata");
      console.log("Personaldata sparad");
    } catch (err) {
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Redigera Personal</h2>
      
      <div className="flex gap-4 mt-6">
        <button
          onClick={addPerson}
          className="bg-[var(--text-color)] text-white px-5 py-2 rounded hover:bg-[var(--rubrik-color)] cursor-pointer"
        >
          Lägg till person
        </button>

        <button
          onClick={saveStaff}
          disabled={isSaving}
          className={`px-5 py-2 rounded cursor-pointer text-white transition ${
            isSaving ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {isSaving ? "Sparar..." : "Spara ändringar"}
        </button>
      </div>
      {staff.map((person, index) => (
        <div key={person.id} className="bg-white p-4 rounded shadow relative space-y-2 ">
          <button
            onClick={() => deletePerson(person.id)}
            className="absolute top-2 right-2 cursor-pointer"
            title="Ta bort"
          >
            🗑️
          </button>
          <input
            className="w-full border px-3 py-2 rounded"
            placeholder="Namn"
            value={person.name}
            onChange={(e) => handleChange(e, index, "name")}
          />
          <input
            className="w-full border px-3 py-2 rounded"
            placeholder="Titel"
            value={person.role}
            onChange={(e) => handleChange(e, index, "role")}
          />
          <input
            className="w-full border px-3 py-2 rounded"
            placeholder="E-post eller telefon"
            value={person.email}
            onChange={(e) => handleChange(e, index, "email")}
          />
          <input
            className="w-full border px-3 py-2 rounded"
            placeholder="Bildens sökväg"
            value={person.image}
            onChange={(e) => handleChange(e, index, "image")}
          />
          <textarea
            className="w-full border px-3 py-2 rounded"
            placeholder="Beskrivning"
            value={person.description}
            onChange={(e) => handleChange(e, index, "description")}
          />
        </div>
      ))}

    </div>
  );
}
