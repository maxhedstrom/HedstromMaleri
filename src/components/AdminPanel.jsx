import { useEffect, useState } from "react";

export default function AdminPanel() {
  const [services, setServices] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [newService, setNewService] = useState({ title: "", description: "" });

  // Ladda tjänster från services.json
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Kunde inte ladda tjänster:", err));
  }, []);

  const handleEdit = (index) => setEditingIndex(index);

  const handleSave = (index) => {
    setEditingIndex(null);
    // ev. spara till backend här sen!
  };

  const handleDelete = (index) => {
    const updated = [...services];
    updated.splice(index, 1);
    setServices(updated);
  };

  const handleAdd = () => {
    const updated = [...services, { ...newService, id: Date.now() }];
    setServices(updated);
    setNewService({ title: "", description: "" });
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6">Tjänster</h2>

      {services.map((service, index) => (
        <div key={service.id} className="bg-white border rounded p-4 mb-4">
          {editingIndex === index ? (
            <>
              <input
                value={service.title}
                onChange={(e) => {
                  const updated = [...services];
                  updated[index].title = e.target.value;
                  setServices(updated);
                }}
                className="w-full mb-2 p-2 border rounded"
              />
              <textarea
                value={service.description}
                onChange={(e) => {
                  const updated = [...services];
                  updated[index].description = e.target.value;
                  setServices(updated);
                }}
                className="w-full mb-2 p-2 border rounded"
              />
              <button onClick={() => handleSave(index)} className="bg-green-500 text-white px-3 py-1 rounded mr-2">
                Spara
              </button>
            </>
          ) : (
            <>
              <h3 className="font-semibold">{service.title}</h3>
              <p className="mb-2">{service.description}</p>
              <button onClick={() => handleEdit(index)} className="text-blue-600 mr-2">Redigera</button>
              <button onClick={() => handleDelete(index)} className="text-red-600">Ta bort</button>
            </>
          )}
        </div>
      ))}

      {/* Lägg till ny tjänst */}
      <div className="mt-10 p-4 bg-gray-100 rounded">
        <h3 className="font-semibold mb-2">Ny tjänst</h3>
        <input
          value={newService.title}
          onChange={(e) => setNewService({ ...newService, title: e.target.value })}
          placeholder="Titel"
          className="w-full mb-2 p-2 border rounded"
        />
        <textarea
          value={newService.description}
          onChange={(e) => setNewService({ ...newService, description: e.target.value })}
          placeholder="Beskrivning"
          className="w-full mb-2 p-2 border rounded"
        />
        <button onClick={handleAdd} className="bg-blue-600 text-white px-3 py-1 rounded">
          Lägg till
        </button>
      </div>
    </div>
  );
}
