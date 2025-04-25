// src/pages/admin/PersonalAdmin.jsx
import React from "react";
import { useAdminResource } from "../../hooks/useAdminResource";
import ListEditor from "../../components/admin/ListEditor";

export default function AdminPersonal() {
  const {
    items,
    isSaving,
    handleChange,
    addItem,
    deleteItem,
    saveItems,
  } = useAdminResource({
    fetchUrl: "http://localhost:5000/api/personal",      // Hämta personaldata
    saveUrl: "http://localhost:5000/api/save-personal", // Spara personaldata
    defaultItem: { name: "", role: "", email: "", image: "", description: "" },
    resourceName: "personal",
  });

  // Definiera vilka fält ListEditor ska rendera
  const fields = [
    { name: "name", placeholder: "Namn" },
    { name: "role", placeholder: "Titel / Roll" },
    { name: "email", placeholder: "E-post eller telefon" },
    { name: "image", placeholder: "Bildens sökväg" },
    { name: "description", placeholder: "Beskrivning", type: "textarea" },
  ];

  return (
    <ListEditor
      title="Redigera Personal"
      description="Här kan du uppdatera befintlig personal, lägga till nya eller ta bort befintliga poster."
      items={items}
      isSaving={isSaving}
      handleChange={handleChange}
      addItem={addItem}
      deleteItem={deleteItem}
      saveItems={saveItems}
      fields={fields}
    />
  );
}
