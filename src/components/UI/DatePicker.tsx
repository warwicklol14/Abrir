import * as React from 'react'
import Select from 'react-select'

export const DatePicker:React.FC<DatePickerProps> = props => {
    switch (props.timePeriod) {
        case "annually":
            return (
                <div>
                    <label>Year:</label>
                    <Select //options={form.status_options} 
                    //value={form.status} 
                    /* onChange ={handleChange} */ >
                    </Select>
                </div>
            );
        case "monthly":
            return (
                <div>
                    <Select //options={form.status_options} 
                    //value={form.status} 
                    /* onChange ={handleChange} */ >
                    </Select>
                    <Select //options={form.status_options} 
                    //value={form.status} 
                    /* onChange ={handleChange} */ >
                    </Select>
                </div>
            );
        case "weekly":
            return (
                <div>
                    <Select //options={form.status_options} 
                    //value={form.status} 
                    /* onChange ={handleChange} */ >
                    </Select>
                    <Select //options={form.status_options} 
                    //value={form.status} 
                    /* onChange ={handleChange} */ >
                    </Select>
                    <Select //options={form.status_options} 
                    //value={form.status} 
                    /* onChange ={handleChange} */ >
                    </Select>
                </div>
            );
        case "historic":
            return null;
        default:
            return null;
    }
}

interface DatePickerProps {
    timePeriod:string;
}