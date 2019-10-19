import * as React from "react";
import { Input, SearchBox } from "./UI";
import { AppointmentContext } from "../contexts";
import { retrieveClientFromDB } from "../dbutils";
import { useToasts } from 'react-toast-notifications'


export const ClientForm :React.FC = props => {
    const {addToast} = useToasts();
    const {form,setForm} = React.useContext(AppointmentContext);
    const searchHandler = async e => {
        try {
            const result = await retrieveClientFromDB(form.client.client_name);
            setForm({
                ...form,
                client: {
                    client_name:result.name,
                    ssn:result.ssn,
                    address:result.address,
                    phone:result.phone_number
                }
            });
            addToast(`Search was successfull and the form has been populated`,{appearance:'success',autoDismiss:true});
        }
        catch(e) {
            console.log(e);
            addToast(`Search was unsuccessfull as no such entry exists in database`,{appearance:'error',autoDismiss:true});
        }
    }
    return (
        <div className = "flex-display-col" >
                <h2>👨‍💼 Client Data</h2>
                <SearchBox searchHandler={searchHandler}
                    value={form.client.client_name} 
                    handleValueChange={event => setForm({
                        ...form,
                        client: {...form.client,client_name:event.target.value}
                    })} 
                label="Name" id="client_name" name="client_name"> 
                </SearchBox>
                <Input value={form.client.ssn} 
                    handleValueChange={event => setForm({
                        ...form,
                        client: {...form.client,ssn:event.target.value}
                    })} label="SSN" id="ssn" name="ssn">
                </Input>
                <Input value={form.client.address} 
                    handleValueChange={event => setForm({
                        ...form,
                        client: {...form.client,address:event.target.value}
                    })} label="Address" id="address" name="address">
                </Input>
                <Input value={form.client.phone} 
                    handleValueChange={event => setForm({
                        ...form,
                        client: {...form.client,phone:event.target.value}
                    })} label="Phone number" id="phone" name="phone">
                </Input>
        </div>
    );
}