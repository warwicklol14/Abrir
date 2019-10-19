import * as React from 'react'
import { Input, Button, SearchBox } from './UI'
import { useToasts } from 'react-toast-notifications'
import { useForm } from '../hooks';
import {retrieveEquipmentFromDB,saveEquipmentToDB, updateEquipmentInDB, removeEquipmentFromDB, logAllEquipment} from "../dbutils"
import { RouteComponentProps, withRouter } from 'react-router';

const EquipmentFormBase:React.FC<EquipmentFormProps> = props => {
    const {addToast} = useToasts();
    const [value,handleValueChange,setForm] = useForm({equipment_name :'',cost:''});
    const [isSearchSuccessfull, setisSearchSuccessfull] = React.useState(false);
    const [resultID,setResultID] = React.useState(-1);
    const addHandler = async e => {
        await saveEquipmentToDB(value.equipment_name,value.cost);
        addToast(`Added equipment ${value.equipment_name} of cost ${value.cost} to the database`,{appearance:'success',autoDismiss:true});
    }
    const searchHandler = async e => {
        try {
            const result = await retrieveEquipmentFromDB(value.equipment_name);
            setForm({equipment_name:result.equipment_name,cost:result.cost});
            setResultID(result.id);
            addToast(`Search was successfull and the form has been populated`,{appearance:'success',autoDismiss:true});
            setisSearchSuccessfull(true);
        }
        catch(e) {
            console.log(e);
            addToast(`Search was unsuccessfull as no such entry exists in database`,{appearance:'error',autoDismiss:true});
        }
    }
    const updateHandler = async e => {
        await updateEquipmentInDB(resultID,value.equipment_name,value.cost);
        addToast(`Successfully updated the database`,{appearance:'success',autoDismiss:true});
    }
    const deleteHandler = async e => {
        await removeEquipmentFromDB(resultID);
        addToast(`Successfully deleted from the database`,{appearance:'success',autoDismiss:true});
        setisSearchSuccessfull(false);
        setForm({equipment_name:'',cost:''});
        setResultID(-1);
    }
    if(isSearchSuccessfull) {
        return (
            <div>
                <Button onClick={e => props.history.push("/")}>&larr;</Button>
                <h2>⚙️ Equipment Details</h2>
                <SearchBox name="equipment_name" value={value.equipment_name} handleValueChange={handleValueChange} label="Equipment Name" id="equipment_name" searchHandler={searchHandler}> </SearchBox>
                <Input name="cost" value={value.cost} handleValueChange={handleValueChange} label="Cost" id="cost"></Input>
                <Button onClick={updateHandler}>Update</Button>
                <Button onClick={deleteHandler}>Delete</Button>
            </div>
        );
    }
    else {
        return (
            <div>
                <Button onClick={e => props.history.push("/")}>&larr;</Button>
                <h2>⚙️ Equipment Details</h2>
                <SearchBox name="equipment_name" value={value.equipment_name} handleValueChange={handleValueChange} label="Equipment Name" id="equipment_name" searchHandler={searchHandler}> </SearchBox>
                <Input name="cost" value={value.cost} handleValueChange={handleValueChange} label="Cost" id="cost"></Input>
                <Button onClick={addHandler}>Add</Button>
            </div>
        );
    }
}

interface EquipmentFormProps extends RouteComponentProps {}

export const EquipmentForm = withRouter(EquipmentFormBase);
