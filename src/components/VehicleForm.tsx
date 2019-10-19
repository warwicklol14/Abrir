import * as React from "react";
import { Input } from "./UI";
import { AppointmentContext } from "../contexts";

export const VehicleForm :React.FC = props => {
    const {form,setForm} = React.useContext(AppointmentContext);
    return (
        <div className="flex-display-col">
            <h2>🚗 Vehicle Data</h2>
            <Input
                value={form.vehicle.license} 
                handleValueChange={event => setForm({
                    ...form,
                    vehicle: {...form.vehicle,license:event.target.value}
                })} 
                label="License Plate No" id="license" name="license"> 
            </Input>
            <Input value={form.vehicle.ttno} 
                handleValueChange={event => setForm({
                    ...form,
                    vehicle: {...form.vehicle,ttno:event.target.value}
                })}
                label="Tow Truck No" id="ttno" name ="ttno">
            </Input>
            <Input value={form.vehicle.vin} 
                handleValueChange={event => setForm({
                    ...form,
                    vehicle: {...form.vehicle,vin:event.target.value}
                })} label="VIN" id="vin" name ="vin">

            </Input>
            <Input value={form.vehicle.year} 
                handleValueChange={event => setForm({
                    ...form,
                    vehicle: {...form.vehicle,year:event.target.value}
                })} label="Year of Manufacture" id="year" name ="year">
            </Input> 
        </div>
    );
}
