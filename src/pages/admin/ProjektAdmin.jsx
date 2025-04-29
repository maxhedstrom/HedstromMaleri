import React from "react";
import { useAdminResource } from "../../hooks/useAdminResource";
import ListEditor from "../../components/admin/ListEditor";

export default function ProjektAdmin() {
  const {
    items: projekt,
    isSaving,
    handleChange,
    addItem,
    deleteItem,
    saveItems,
  } = useAdminResource({
    fetchUrl: "http://localhost:5000/api/get-projekt",
    saveUrl:  "http://localhost:5000/api/save-projekt",
    defaultItem: { name: "", description: "" },
    resourceName: "projekt",
  });

  const fields = [
    { name: "name", placeholder: "Projektets namn" },
    { name: "description", placeholder: "Beskrivning av projektet", type: "textarea" },
  ];

  return (
    <div className="p-8">
      <ListEditor
        title="Redigera projekt"
        description="Lägg till, ändra eller ta bort tjänster som visas under fliken 'Våra projekt'."
        items={projekt}
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
