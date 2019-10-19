import * as React from "react";
import MultiSelect from "@kenshooui/react-multi-select";
import { retrieveAllEquipmentFromDB } from "../dbutils/equipmentcrud";
import './EquipmentSelect.css'
import { AppointmentContext } from "../contexts";

export const EquipmentSelect :React.FC = props => {
    const {form,setForm} = React.useContext(AppointmentContext);
    React.useEffect(() => {
        retrieveAllEquipmentFromDB()
        .then(equipment => equipment.map(eq => {
                return {id:eq.id,label:`${eq.equipment_name} (${eq.cost})`}
            })
        )
        .then(items_array => setForm({...form,items:items_array}));
    }, []);
    return (
        <div className="multiselect">
            <MultiSelect items={form.items} 
                selectedItems={form.selectedItems} 
                onChange={items => setForm({...form,selectedItems:items})} />
        </div>
    );
}