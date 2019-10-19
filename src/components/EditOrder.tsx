import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router';
import { Button } from './UI';
import Select from 'react-select'
import { retrieveAllOrdersWithClientFromDB } from '../dbutils';
import { useToasts } from 'react-toast-notifications'

const EditOrderBase: React.FC<EditOrderProps> = props => {
    const [form,setForm] = React.useState({options:[],selectedOption:null}); 
    const {addToast} = useToasts();
    const handleChange = (newValue: any, actionMeta: any) => {
        setForm({...form,selectedOption:newValue});
    };
    const goHandler = e => {
        if(isNaN(parseInt(form.selectedOption.id))) {
            addToast(`Please select a valid option`,{appearance:'error',autoDismiss:true});
        }
        else {
            props.history.push(`/AppointmentForm/${form.selectedOption.id}`);
        }
    }
    React.useEffect(() => {
        retrieveAllOrdersWithClientFromDB()
        .then(orders => orders.map(order => {
                return {id: `${order.id} `,client_name:`${order.client.name}`, status: `${order.status.toUpperCase()}`}
            })
        )
        .then(options_array => setForm({...form,options:options_array}));
    },[]);
    return (
        <div className="flex-display-col">
            <label>Find the order by ID or Client name:</label>
            <Select isSearchable isClearable menuIsOpen
                options = {form.options} value = {form.selectedOption}
                onChange = {handleChange}
                styles={{ menu: base => ({ ...base, position: 'relative' }) }}
                getOptionValue = {option => option.id}
                getOptionLabel = {option => `${option.id} | ${option.client_name} | ${option.status.toUpperCase()}`}
            />
            <Button onClick={goHandler} >
                Go to the order
            </Button>
            <Button onClick={e => props.history.push("/AppointmentSetup")}>
                &larr;
            </Button>
        </div>
    );
}

interface EditOrderProps extends RouteComponentProps {}

export const EditOrder = withRouter(EditOrderBase);