import * as React from "react";

export const AppointmentContext = React.createContext<ContextObject>({} as ContextObject);

export const AppointmentProvider :React.FC = props => {

    const [form, setForm] = React.useState<RootObject>(initialState);
    return (
        <AppointmentContext.Provider value={{form,setForm}}>
            {props.children}
        </AppointmentContext.Provider>
    );
}

const initialState = {
    step: 1,
    appointmentID:0,
    createdDate: new Date(),
    client: {
        client_name:'',
        ssn:'',
        address:'',
        phone:''
    },
    vehicle: {
        license:'',
        ttno:'',
        vin:'',
        year:''
    },
    service: '',
    status_options: [
        {value: "opened", label:"OPENED"},
        {value: "closed", label:"CLOSED"},
        {value: "cancelled", label:"CANCELLED"}
    ],
    status: {value: "opened", label:"OPENED"},
    items:[],
    selectedItems:[],
    appointmentDate: new Date(),
    total:0
};


interface ContextObject {
    form: RootObject,
    setForm:React.Dispatch<React.SetStateAction<RootObject>>
}

export interface RootObject {
    step: number;
    appointmentID:number;
    createdDate: object;
    client: Client;
    vehicle: Vehicle;
    service: string;
    status_options: Statusoption[];
    status: Statusoption;
    items: any[];
    selectedItems: any[];
    appointmentDate: object;
    total: number;
  }
  
export interface Statusoption {
    value: string;
    label: string;
}
  
export interface Vehicle {
    license: string;
    ttno: string;
    vin: string;
    year: string;
}
  
export interface Client {
    client_name: string;
    ssn: string;
    address: string;
    phone: string;
}