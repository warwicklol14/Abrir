import * as React from 'react'
import { ListItem } from './UI'
import { AppointmentContext } from '../contexts'

export const CostComponent = () => {
    const {form,setForm} = React.useContext(AppointmentContext);
    React.useEffect(() => {
        setForm({...form,total:computeTotal(form)});
    },[]);
    return (
        <div>
            <h3>The total cost with equipment is as below:</h3>
            <ListItem hasPercentage={false} description="Total Neto" value={form.total -((form.total * 0.19) / 1.19)}></ListItem>
            <ListItem hasPercentage description="IVA" value={(form.total * 0.19) / 1.19 }></ListItem>
            <ListItem hasPercentage={false} description="Total" value={form.total}></ListItem>
        </div>
    )
}

const computeTotal = form => {
    let total_cost = 0;
    switch (form.service) {
        case "warranty":
            total_cost = 0;
            break;
        case "maintenance":
            total_cost = 200;
            break;
        case "repair":
            total_cost = 1000;
            break;
        default:
            break;
    }
    for(let eq of form.selectedItems)
        total_cost += parseInt(eq.label.match(/\(([^)]+)\)/)[1])
    total_cost += (total_cost * 0.19);
    return parseFloat(total_cost.toFixed(2));
}
