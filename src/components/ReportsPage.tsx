import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { Button,RadioGroup, DatePicker } from './UI';

const ReportsPageBase: React.FC<ReportsPageProps> = props => {
    const initialState = {
        menu:"first",
        radioOption:""
    } 
    const [form,setForm] = React.useState(initialState);
    if(form.menu === "first") {
        return (
            <div className="flex-display-col">
                <Button onClick={e => setForm(form => { return {...form,menu:"date-picker"} })}>
                    Client Reports
                </Button>
                <Button onClick={e => setForm(form => { return {...form,menu:"date-picker"} })}>
                    Service Reports
                </Button>
                <Button onClick={e => setForm(form => { return {...form,menu:"second"} })}>
                    Other Reports
                </Button>
            </div>
        );
    }
    else if(form.menu === "second") {
        return (
            <div className="flex-display-col">
                <Button 
                    onClick={e => setForm(form => { return {...form,menu:"date-picker"} })}>
                    Tow Truck Reports
                </Button>
                <Button 
                    onClick={e => setForm(form => { return {...form,menu:"date-picker"} })}>
                    Model Reports
                </Button>
                <Button 
                    onClick={e => setForm(form => { return {...form,menu:"date-picker"} })}>
                    Equipment Reports
                </Button>
                <Button 
                    onClick={e => setForm(form => { return {...form,menu:"date-picker"} })}>
                    Income Reports
                </Button>
            </div>
        );
    }
    else if(form.menu === "date-picker") {
        return (
            <div>
                <RadioGroup checkedValue = {form.radioOption}
                    handleValueChange={e => setForm(form => { return {...form,radioOption:e.target.value} })}>
                </RadioGroup>
                <DatePicker timePeriod={form.radioOption}></DatePicker>
                <Button onClick={e => setForm(form => { return {...form,menu:"first"} })}>
                    Go Back
                </Button>
            </div>
        );
    }

}

interface ReportsPageProps extends RouteComponentProps {}

export const ReportsPage = withRouter(ReportsPageBase);