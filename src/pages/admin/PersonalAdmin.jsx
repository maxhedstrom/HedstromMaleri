// src/pages/admin/PersonalAdmin.jsx
import React from "react";
import { useAdminResource } from "../../hooks/useAdminResource";
import ListEditor from "../../components/admin/ListEditor";
import axios from "axios";

export default function AdminPersonal() {
  const {
    items,
    isSaving,
    handleChange,
    addItem,
    deleteItem,
    saveItems,
    setItems,
  } = useAdminResource({
    fetchUrl: "http://localhost:5000/api/personal",
    saveUrl: "http://localhost:5000/api/save-personal",
    defaultItem: { name: "", role: "", email: "", image: "", description: "" },
    resourceName: "personal",
  });

  // Specialhantering av bildfil
  const handleImageUpload = async (event, index) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post("http://localhost:5000/api/upload-image", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Uppdatera bara den berörda personens bild-URL
      const updatedItems = [...items];
      updatedItems[index].image = res.data.url;
      setItems(updatedItems);
    } catch (error) {
      console.error("Fel vid uppladdning av bild:", error);
      alert("Kunde inte ladda upp bilden. Försök igen.");
    }
  };

  // Redefiniera fälten
  const fields = [
    { name: "name", placeholder: "Namn" },
    { name: "role", placeholder: "Titel / Roll" },
    { name: "email", placeholder: "E-post eller telefon" },
    {
      name: "image",
      type: "file",
      customRender: (item, index) => (
        <div>
          {item.image && (
            <img
              src={item.image}
              alt="Uppladdad"
              style={{ width: "100px", marginBottom: "0.5rem" }}
            />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, index)}
          />
        </div>
      ),
    },
    { name: "description", placeholder: "Beskrivning", type: "textarea" },
  ];

  return (
    <ListEditor
      title="Redigera Personal"
      description="Här kan du uppdatera befintlig personal, lägga till nya eller ta bort befintliga poster. Denna information används på sidan 'Om oss'."
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
