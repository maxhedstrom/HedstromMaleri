// src/pages/admin/PersonalAdmin.jsx
import React from "react";
import { useAdminResource } from "../../hooks/useAdminResource";
import ListEditor from "../../components/admin/ListEditor";
import axios from "axios";
import ImageUploader from "../../components/admin/ImageUploader";

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
    defaultItem: {
      name: "",
      role: "",
      email: "",
      image: "",
      description: "",
    },
    resourceName: "personal",
  });

  const handleImageUpload = async (event, index) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/upload-image",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      const updated = [...items];
      updated[index].image = res.data.url;
      setItems(updated);
    } catch (err) {
      console.error(err);
      alert(
        "Kunde inte ladda upp bilden. Försök igen, eller kontakta Max om felet kvarstår."
      );
    }
  };

  const fields = [
    {
      name: "name",
      placeholder: "Namn",
      render: (item, index) => (
        <input
          type="text"
          value={item.name}
          onChange={(e) => handleChange(index, "name", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Namn"
        />
      ),
    },
    {
      name: "role",
      placeholder: "Titel / Roll",
      render: (item, index) => (
        <input
          type="text"
          value={item.role}
          onChange={(e) => handleChange(index, "role", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Titel / Roll"
        />
      ),
    },
    {
      name: "email",
      placeholder: "E-post eller telefon",
      render: (item, index) => (
        <input
          type="text"
          value={item.email}
          onChange={(e) => handleChange(index, "email", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="E-post eller telefon"
        />
      ),
    },
    {
      name: "image",
      type: "file",
      customRender: (item, index) => (
        <ImageUploader
          src={item.image}
          id={`personal-image-${index}`}
          onChange={(e) => handleImageUpload(e, index)}
        />
      ),
    },
    {
      name: "description",
      type: "textarea",
      render: (item, index) => (
        <textarea
          value={item.description}
          onChange={(e) => handleChange(index, "description", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
          rows={3}
          placeholder="Beskrivning"
        />
      ),
    },
  ];

  return (
    <div>
      <div className="flex-1 flex flex-col">
      <ListEditor
        title="📝 Redigera Personal"
        description="Här kan du uppdatera befintlig personal, lägga till nya eller ta bort befintliga poster. Denna information används på sidan 'Om oss'."
        items={items}
        isSaving={isSaving}
        handleChange={handleChange}
        addItem={addItem}
        deleteItem={deleteItem}
        saveItems={saveItems}
        fields={fields}
        // Här kan du skicka in en egen klass för varje “kort”
        itemWrapperClassName="bg-gray-50 p-4 mb-4 rounded-xl shadow-inner"
      />
      </div>
    </div>
  );
}
