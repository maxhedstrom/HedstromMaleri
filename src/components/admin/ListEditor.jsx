// src/components/admin/ListEditor.jsx
import React from "react";

/**
 * En återanvändbar lista-editor med enhetlig design
 *
 * Props:
 * - title: rubrik för editorn
 * - description: beskrivningstext under rubriken
 * - items: array av objekt att rendera
 * - isSaving: boolean, visar om sparning pågår
 * - handleChange: funktion (index, field, value) för att uppdatera fält
 * - addItem: funktion för att lägga till nytt objekt
 * - deleteItem: funktion (id) för att ta bort objekt
 * - saveItems: funktion för att spara alla objekt
 * - fields: array med fälldefinitioner [{ name, placeholder, type? }]
 */
export default function ListEditor({
  title,
  description,
  items,
  isSaving,
  handleChange,
  addItem,
  deleteItem,
  saveItems,
  fields,
}) {
  return (
    <main className="flex-1 overflow-auto p-6">
      {/* Rubrik och beskrivning */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
      {description && <p className="text-gray-600 mb-8">{description}</p>}

      {/* Knappar */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <button
          onClick={addItem}
          className="bg-[var(--text-color)] text-white px-5 py-2 rounded hover:bg-[var(--rubrik-color)] transition cursor-pointer"
        >
          Lägg till ny
        </button>
        <button
          onClick={saveItems}
          disabled={isSaving}
          className={`px-5 py-2 rounded cursor-pointer text-white transition ${
            isSaving
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {isSaving ? "Sparar..." : "Spara ändringar"}
        </button>
      </div>

      {/* Lista med objekt */}
      <div className="space-y-6 mt-6">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div
              key={item.id}
              className="relative bg-white rounded-xl shadow-md p-6 space-y-4"
            >
              {/* Ta bort-knapp */}
              <button
                onClick={() => deleteItem(item.id)}
                className="absolute top-3 right-3 font-bold cursor-pointer"
                title="Ta bort"
              >
                🗑️
              </button>

              {/* Fält */}
              {fields.map((field) => {
                const Tag = field.type === "textarea" ? "textarea" : "input";
                return (
                  <Tag
                    key={field.name}
                    type={field.type === "textarea" ? undefined : field.type || "text"}
                    value={item[field.name] || ""}
                    onChange={(e) => handleChange(index, field.name, e.target.value)}
                    placeholder={field.placeholder}
                    rows={field.type === "textarea" ? 3 : undefined}
                    className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                );
              })}
            </div>
          ))
        ) : (
          <p className="text-gray-500">Inga poster tillgängliga att visa.</p>
        )}
      </div>
    </main>
  );
}
