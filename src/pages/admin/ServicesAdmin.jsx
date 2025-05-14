// src/pages/admin/ServicesAdmin.jsx
import React from "react";
import { useAdminResource } from "../../hooks/useAdminResource";
import ListEditor from "../../components/admin/ListEditor";
import axios from "axios";
import ImageUploader from "../../components/admin/ImageUploader";

export default function ServicesAdmin() {
  // Lägg in defaultItem så nya rader också får rätt struktur
  const defaultItem = {
    id: "",
    title: "",
    description: "",
    image: "",
    defaultImage: "",
    link: "/kontakt",
    reverse: false,
  };

  const {
    items: services,
    isSaving,
    handleChange,
    deleteItem,
    saveItems,
    setItems,
  } = useAdminResource({
    fetchUrl: "http://localhost:5000/api/get-services",
    saveUrl: "http://localhost:5000/api/save-services",
    defaultItem,
    resourceName: "services",
  });

  // Prepend-funktion: nya poster hamnar först i arrayen
  const addItem = () => {
    const newItem = {
      ...defaultItem,
      id: `tmp-${Date.now()}`, // unik temporär ID
    };
    setItems([newItem, ...services]);
  };

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
      const updated = [...services];
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
    { name: "title", placeholder: "Tjänstens namn" },
    {
      name: "description",
      placeholder: "Beskrivning av tjänsten",
      type: "textarea",
    },
    {
      name: "reverse",
      type: "checkbox",
      label: "Visa bild till höger av texten istället för vänster?",
    },
    {
      name: "image",
      type: "file",
      customRender: (item, index) => (
        <ImageUploader
          src={item.image}
          defaultSrc={item.defaultImage}
          id={`service-image-${index}`}
          onChange={(e) => handleImageUpload(e, index)}
        />
      ),
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
