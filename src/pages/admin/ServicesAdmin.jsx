import React from "react";
import { useAdminResource } from "../../hooks/useAdminResource";
import ListEditor from "../../components/admin/ListEditor";

export default function ServicesAdmin() {
  const {
    items: services,
    isSaving,
    handleChange,
    addItem,
    deleteItem,
    saveItems,
  } = useAdminResource({
    fetchUrl: "http://localhost:5000/api/get-services",
    saveUrl:  "http://localhost:5000/api/save-services",
    defaultItem: { name: "", description: "" },
    resourceName: "services",
  });

  const fields = [
    { name: "name", placeholder: "Tjänstens namn" },
    { name: "description", placeholder: "Beskrivning av tjänsten", type: "textarea" },
  ];

  return (
    <div className="p-8">
      <ListEditor
        title="Redigera Services"
        description="Lägg till, ändra eller ta bort tjänster som visas under fliken 'Services'."
        items={services}
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
