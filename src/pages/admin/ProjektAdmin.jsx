import React from "react";
import { useAdminResource } from "../../hooks/useAdminResource";
import ListEditor from "../../components/admin/ListEditor";

export default function ProjektAdmin() {
  const {
    items: timeline,
    isSaving,
    handleChange,
    addItem,
    deleteItem,
    saveItems,
  } = useAdminResource({
    fetchUrl: "http://localhost:5000/api/get-projekt",
    saveUrl: "http://localhost:5000/api/save-projekt",
    defaultItem: { year: "", text: "" },
    resourceName: "projekt",
  });

  const fields = [
    { name: "year", placeholder: "År" },
    { name: "text", placeholder: "Beskrivning av händelsen", type: "textarea" },
  ];

  return (
    <div className="p-8">
      <ListEditor
        title="Redigera tidslinje"
        description="Lägg till, ändra eller ta bort milstolpar i tidslinjen. Milstolparna visas i ordning efter årtal automatiskt."
        items={timeline}
        isSaving={isSaving}
        handleChange={handleChange}
        addItem={addItem}
        deleteItem={deleteItem}
        saveItems={saveItems}
        fields={fields}
      />
    </div>
  );
}
