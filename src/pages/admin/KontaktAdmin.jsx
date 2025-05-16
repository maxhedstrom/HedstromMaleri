import { useAdminResource } from "../../hooks/useAdminResource";
import ListEditor from "../../components/admin/ListEditor";
import { getUrl } from "../../utils/api";

export default function KontaktAdmin() {
  const {
    items: kontakt = [{}],
    isSaving,
    handleChange,
    saveItems,
  } = useAdminResource({
    fetchUrl: getUrl("/api/get-kontakt"),
    saveUrl:  getUrl("/api/save-kontakt"),
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
