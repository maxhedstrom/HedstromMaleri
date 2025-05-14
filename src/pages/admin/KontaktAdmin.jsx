import React from "react";
import { useAdminResource } from "../../hooks/useAdminResource";
import ListEditor from "../../components/admin/ListEditor";

export default function KontaktAdmin() {
  const {
    items: kontakt = [{}],
    isSaving,
    handleChange,
    saveItems,
  } = useAdminResource({
    fetchUrl: "http://localhost:5000/api/get-kontakt",
    saveUrl: "http://localhost:5000/api/save-kontakt",
    defaultItem: {
      name: "",
      orgNumber: "",
      phone: "",
      email: "",
      address: "",
    },
    resourceName: "kontakt",
    isArray: true,
  });

  const fields = [
    { name: "name", placeholder: "Företagsnamn" },
    { name: "orgNumber", placeholder: "Organisationsnummer" },
    { name: "phone", placeholder: "Telefonnummer" },
    { name: "email", placeholder: "E-postadress" },
    { name: "address", placeholder: "Adress" },
  ];

  return (
    <ListEditor
      title="📝 Företagsinformation"
      description="Uppdatera kontaktuppgifter som visas på hemsidan."
      items={kontakt}
      isSaving={isSaving}
      handleChange={handleChange}
      saveItems={saveItems}
      fields={fields}
      addItem={null}        // ej tillämpligt för kontaktinfo
      deleteItem={null}     // ej tillämpligt för kontaktinfo
    />
  );
}
