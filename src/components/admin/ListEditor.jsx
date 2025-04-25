// src/components/admin/ListEditor.jsx
import React from "react";

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
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
      {description && <p className="text-gray-600 mb-6">{description}</p>}

      <div className="flex gap-4 mb-6">
        <button
          onClick={addItem}
          className="bg-[var(--text-color)] text-white px-5 py-2 rounded hover:bg-[var(--rubrik-color)] transition cursor-pointer"
        >
          Lägg till ny
        </button>
        <button
          onClick={saveItems}
          disabled={isSaving}
          className={`px-5 py-2 rounded text-white transition ${
            isSaving ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {isSaving ? "Sparar..." : "Spara ändringar"}
        </button>
      </div>

      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={item.id} className="relative bg-white rounded-xl shadow-md p-6 space-y-4">
            <button
              onClick={() => deleteItem(item.id)}
              className="absolute top-3 right-3 font-bold cursor-pointer"
              title="Ta bort"
            >
              🗑️
            </button>

            {fields.map((field) => {
              const FieldTag = field.type === "textarea" ? "textarea" : "input";
              return (
                <FieldTag
                  key={field.name}
                  value={item[field.name]}
                  onChange={(e) => handleChange(index, field.name, e.target.value)}
                  placeholder={field.placeholder}
                  rows={field.type === "textarea" ? 3 : undefined}
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
