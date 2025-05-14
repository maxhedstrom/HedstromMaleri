import React, { useState, useEffect } from "react";

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
 * - fields: array med fälldefinitioner [{ name, placeholder, type?, label?, customRender? }]
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
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  // Visa bekräftelse i 3 sek efter sparning
  useEffect(() => {
    let timer;
    if (showConfirm) {
      timer = setTimeout(() => setShowConfirm(false), 3000);
    }
    return () => clearTimeout(timer);
  }, [showConfirm]);

  const handleSave = async () => {
    await saveItems();
    setShowConfirm(true);
  };

  return (
    <main className="flex-1 overflow-auto p-6">
      {/* Rubrik och beskrivning */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
      {description && <p className="text-gray-600 mb-8">{description}</p>}

      {/* Lägg till-knapp */}
      <div className="ml-4 mb-4">
        <button
          onClick={addItem}
          className="px-5 py-2 rounded cursor-pointer text-white transition bg-[var(--text-color)] hover:bg-[var(--rubrik-color)]"
        >
          Lägg till ny
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
                onClick={() => setConfirmDeleteId(item.id)}
                className="absolute top-3 right-3 font-bold cursor-pointer"
                title="Ta bort"
              >
                🗑️
              </button>

              {/* Fält */}
              {fields.map((field) => {
                // Anpassad render-funktion (t.ex. för filuppladdning)
                if (typeof field.customRender === "function") {
                  return (
                    <div key={field.name}>
                      {field.label && (
                        <label className="block mb-1 font-semibold">
                          {field.label}
                        </label>
                      )}
                      {field.customRender(item, index)}
                    </div>
                  );
                }

                const value =
                  item[field.name] || (field.type === "checkbox" ? false : "");

                if (field.type === "textarea") {
                  return (
                    <div key={field.name}>
                      {field.label && (
                        <label className="block mb-1 font-semibold">
                          {field.label}
                        </label>
                      )}
                      <textarea
                        value={value}
                        onChange={(e) =>
                          handleChange(index, field.name, e.target.value)
                        }
                        placeholder={field.placeholder}
                        rows={3}
                        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  );
                }

                if (field.type === "checkbox") {
                  return (
                    <div key={field.name} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={(e) =>
                          handleChange(index, field.name, e.target.checked)
                        }
                      />
                      <label className="text-sm font-medium">
                        {field.label || field.placeholder}
                      </label>
                    </div>
                  );
                }

                // Standard-input
                return (
                  <div key={field.name}>
                    {field.label && (
                      <label className="block mb-1 font-semibold">
                        {field.label}
                      </label>
                    )}
                    <input
                      type="text"
                      value={value}
                      onChange={(e) =>
                        handleChange(index, field.name, e.target.value)
                      }
                      placeholder={field.placeholder}
                      className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                );
              })}

              {/* Spara-knapp per objekt */}
              <div className="flex items-center gap-4">
                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  className={`px-4 py-2 rounded cursor-pointer text-white transition ${
                    isSaving
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  {isSaving ? "Sparar..." : "Spara ändringar"}
                </button>
                {showConfirm && !isSaving && (
                  <span className="text-green-600">✔️ Sparat!</span>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Inga poster tillgängliga att visa.</p>
        )}
      </div>

      {/* Spara-knapp för hela listan */}
      {items.length > 0 && (
        <div className="mt-8 flex items-center gap-4">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className={`px-4 py-2 rounded cursor-pointer text-white transition ${
              isSaving
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {isSaving ? "Sparar..." : "Spara alla ändringar"}
          </button>
          {showConfirm && !isSaving && (
            <span className="text-green-600">✔️ Sparat!</span>
          )}
        </div>
      )}

      {/* Bekräftelsemodal för borttagning */}
      {confirmDeleteId !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full space-y-4 text-center">
            <p className="text-lg">
              Är du säker på att du vill ta bort? <br /> Detta går inte att ångra.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  deleteItem(confirmDeleteId);
                  setConfirmDeleteId(null);
                }}
                className="px-4 py-2 rounded cursor-pointer text-white bg-red-600 hover:bg-red-700"
              >
                Ja, ta bort
              </button>
              <button
                onClick={() => setConfirmDeleteId(null)}
                className="px-4 py-2 cursor-pointer rounded border"
              >
                Avbryt
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
