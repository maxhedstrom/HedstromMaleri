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
    saveUrl: "http://localhost:5000/api/save-services",
    defaultItem: {
      title: "",
      description: "",
      image: "",
      link: "/kontakt",
      reverse: false,
    },
    resourceName: "services",
  });

  const fields = [
    { name: "title", placeholder: "Tjänstens namn" },
    { name: "description", placeholder: "Beskrivning av tjänsten", type: "textarea" },
    { name: "image", placeholder: "Sökväg till bild (t.ex. /src/assets/bilder/exempel.jpg)" },
    {
      name: "reverse",
      type: "checkbox",
      label: "Visa bild till höger av texten istället för vänster?",
    },
  ];

  return (
    <div className="p-8">
      <ListEditor
        title="Redigera tjänster"
        description="Lägg till, ändra eller ta bort tjänster som visas under fliken 'Tjänster'."
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
