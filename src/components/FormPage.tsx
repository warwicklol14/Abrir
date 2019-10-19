import * as React from "react"
import {ClientForm,VehicleForm,EquipmentSelect,AppointmentPicker,CostComponent,SaveOrder} from "."
import { Button,CheckBoxGroup,StatusSelect } from './UI'
import { AppointmentContext } from "../contexts"
import { withRouter, RouteComponentProps } from "react-router"
import * as moment from "moment"
import { loadOrder } from "../dbutils"

const FormPageBase: React.FC<FormPageProps> = props => {
  const {form,setForm} = React.useContext(AppointmentContext);
  const form_length = 5;
  const handleStep = step => {
    setForm({...form,step: (form.step % form_length) + step})
  }
  React.useEffect(() => {
    if (props.match.params.id !== "-1") {
      const appointmentID = parseInt(props.match.params.id);
      loadOrder(appointmentID,form,setForm).then(x => console.log("Loaded"));
    }
  },[]);
  switch(form.step) {
    case 1:
      return (
        <div>
          <p>Date: {moment(form.createdDate).format('MMMM Do YYYY')}</p>
          <ClientForm></ClientForm>
          <VehicleForm></VehicleForm>
          <Button onClick={e => props.history.push("/")}>&larr;</Button>
          <Button onClick={e => handleStep(1)}>&rarr;</Button>
        </div>
      );
    case 2:
      return (
        <div>
          <CheckBoxGroup></CheckBoxGroup>
          <StatusSelect></StatusSelect>
          <Button onClick={e => handleStep(-1)}>&larr;</Button>
          <Button onClick={e => handleStep(1)}>&rarr;</Button>
        </div>
      );
    case 3:
      return (
        <div>
          <EquipmentSelect></EquipmentSelect>
          <Button onClick={e => handleStep(-1)}>&larr;</Button>
          <Button onClick={e => handleStep(1)}>&rarr;</Button>
        </div>
      )
    case 4:
      return (
        <div>
          <AppointmentPicker></AppointmentPicker>
          <CostComponent></CostComponent>
          <Button onClick={e => handleStep(-1)}>&larr;</Button>
          <Button onClick={e => handleStep(1)}>Save to Database</Button>
        </div>
      )
    case 5:
      return (
        <SaveOrder></SaveOrder>
      );
    default:
      return null;
  }
}

interface FormPageProps extends RouteComponentProps<{id:string}> {}

export const FormPage = withRouter(FormPageBase);