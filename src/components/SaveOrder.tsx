import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router';
import { Button } from './UI';
import { AppointmentContext } from "../contexts"
import { saveOrder } from '../dbutils';

const SaveOrderBase: React.FC<SaveOrderProps> = props => {
    const {form,setForm} = React.useContext(AppointmentContext);
    React.useEffect(() => {
      saveOrder(form).then(id => setForm({...form,appointmentID:id}));
    },[]);
    return (
        <div>
          <p>Saved to database with ID: {form.appointmentID}</p>
          <Button onClick={e => props.history.push("/")}>Go to main menu</Button>
        </div>
    );
}

interface SaveOrderProps extends RouteComponentProps {}

export const SaveOrder = withRouter(SaveOrderBase);