import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router';
import { Button } from './UI';

const AppointmentSetupBase: React.FC<AppointmentSetupProps> = props => {
    return (
        <div className="flex-display-col">
            <Button onClick={e => props.history.push("/AppointmentForm/-1")}>
                Create new Order 
            </Button>
            <Button onClick={e => props.history.push("/EditOrder")}>
                Edit Order
            </Button>
            <Button onClick={e => props.history.push("/")}>
                Go back to main menu
            </Button>
        </div>
    );
}

interface AppointmentSetupProps extends RouteComponentProps {}

export const AppointmentSetup = withRouter(AppointmentSetupBase);