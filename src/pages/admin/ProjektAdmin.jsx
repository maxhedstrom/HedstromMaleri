import { getUrl } from "../../utils/api";
import { useAdminResource } from "../../hooks/useAdminResource";
import ListEditor from "../../components/admin/ListEditor";

export default function ProjektAdmin() {
  const {
    items: timeline,
    isSaving,
    handleChange,
    addItem,
    deleteItem,
    saveItems,
  } = useAdminResource({
    fetchUrl: getUrl("/api/get-projekt"),
    saveUrl: getUrl("/api/save-projekt"),
    defaultItem: { year: "", text: "" },
    resourceName: "projekt",
  });

  const fields = [
    { name: "year", placeholder: "År" },
    { name: "text", placeholder: "Beskrivning av händelsen", type: "textarea" },
  ];

  return (
    <div>
      <ListEditor
        title="📝 Redigera tidslinje"
        description="Lägg till, ändra eller ta bort milstolpar i tidslinjen. Milstolparna visas i ordning efter årtal automatiskt."
        items={timeline}
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
