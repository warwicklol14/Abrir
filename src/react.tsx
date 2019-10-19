import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "reflect-metadata";
import {FormPage,EquipmentForm,Toast,MainPage, AppointmentSetup, EditOrder, ReportsPage} from "./components"
import {AppointmentProvider} from "./contexts"
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.css'
import "@kenshooui/react-multi-select/dist/style.css"
import { ToastProvider } from 'react-toast-notifications'
import establishDB from "./establishdb";

const App: React.FC = props => {
  return (
    <ToastProvider autoDismissTimeout="2000" components={{ Toast: Toast }} placement="bottom-center">
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage></MainPage>
          </Route>
          <Route exact path="/AppointmentSetup">
            <AppointmentSetup></AppointmentSetup>
          </Route>
          <Route exact path="/EditOrder">
            <EditOrder></EditOrder>
          </Route>
          <Route exact path="/AppointmentForm/:id">
            <AppointmentProvider>
              <FormPage></FormPage>
            </AppointmentProvider> 
          </Route>
          <Route exact path="/EquipmentForm">
            <EquipmentForm></EquipmentForm>
          </Route> 
          <Route exact path="/ReportsPage">
            <ReportsPage></ReportsPage>
          </Route> 
        </Switch>
      </Router>
    </ToastProvider>
  );
}

establishDB()
.then(x => ReactDOM.render(<App></App>, document.getElementById('app')));