import * as React from 'react'
import { Button } from './UI'
import { RouteComponentProps, withRouter } from 'react-router'
import { synchronizeDatabase } from '../dbutils'
import { useToasts } from 'react-toast-notifications'

const MainPageBase: React.FC<MainPageProps> = props => {
    const {addToast} = useToasts();
    const handleClearDB = async e => {
        await synchronizeDatabase();
        addToast(`Database is cleared`,{appearance:'success',autoDismiss:true});
    }
    return (
        <div className="flex-display-col">
            <Button onClick={e => props.history.push("/AppointmentSetup")}>
                Order Details
            </Button>
            <Button onClick={e => props.history.push("/EquipmentForm")}>
                Manage Equipment Details
            </Button>
            <Button onClick={e => props.history.push("/ReportsPage")}>
                Reports
            </Button>
            <Button onClick={handleClearDB}>
                Clear Database
            </Button>
        </div>
    );
}

interface MainPageProps extends RouteComponentProps {}

export const MainPage = withRouter(MainPageBase);