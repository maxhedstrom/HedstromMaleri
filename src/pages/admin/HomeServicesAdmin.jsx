import { useAdminResource } from "../../hooks/useAdminResource";
import ListEditor from "../../components/admin/ListEditor";
import { getUrl } from "../../utils/api";

export default function HomeServicesAdmin() {
  const {
    items: services,
    isSaving,
    handleChange,
    addItem,
    deleteItem,
    saveItems,
  } = useAdminResource({
    fetchUrl: getUrl("/api/get-home-services"),
    saveUrl: getUrl("/api/save-homeservices"),
    defaultItem: { name: "", description: "" },
    resourceName: "homeServices",
  });

  const fields = [
    { name: "name", placeholder: "Tjänstens namn" },
    { name: "description", placeholder: "Beskrivning av tjänsten", type: "textarea" },
  ];

  return (
    <div>
      <div className="flex-1 flex flex-col">
        <ListEditor
          title="📝 Redigera Tjänster"
          description="Här kan du uppdatera befintliga tjänster som visas under sidan 'Hem', lägga till nya eller ta bort befintliga poster."
          items={services}
          isSaving={isSaving}
          handleChange={handleChange}
          addItem={addItem}
          deleteItem={deleteItem}
          saveItems={saveItems}
          fields={fields}
        />
      </div>
    </div>
  );
}
