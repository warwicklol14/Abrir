import * as React from 'react'
import { AppointmentContext } from '../../contexts';
import Select from 'react-select'

export const StatusSelect: React.FC<StatusSelectProps> = () => {
    const {form,setForm} = React.useContext(AppointmentContext);
    const handleChange = (newValue: any, actionMeta: any) => {
        setForm({...form,status:newValue});
    };
    return (
        <div>
            <label>Select the status of the order</label>
            <Select options={form.status_options} 
                value={form.status} 
                onChange ={handleChange}
            />
        </div>
    );
}

interface StatusSelectProps {

}