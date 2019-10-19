import * as React from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import {AppointmentContext} from "../contexts"
import {retrieveAllOrdersFromDB} from "../dbutils"

export const AppointmentPicker :React.FC = props => {
    const {form, setForm} = React.useContext(AppointmentContext);
    const [excludedDates,setExcludedDates] = React.useState<Date[]>([]);
    const [excludedTimes,setExcludedTimes] = React.useState<Date[]>([]);
    const handleChange = (date :Date) => {
        const excludedDays = excludedDates.filter(day => day.toDateString() === date.toDateString());
        excludedDays.length ? setExcludedTimes(excludedDays) : setExcludedTimes([]);
        setForm({...form,appointmentDate:date});
    };
    React.useEffect(() => {
        retrieveAllOrdersFromDB()
        .then(orders => { 
                const dates = orders.map(order => order.appointment_date);
                setExcludedDates(dates);
                const times = dates.filter(day => day.toDateString() === new Date().toDateString());
                times.length ? setExcludedTimes(times) : setExcludedTimes([]);
            }
        );
    },[]);
    return (
        <div>
            <h3>What day and time is the appointment:</h3>
            <DatePicker selected={form.appointmentDate} 
                onChange={handleChange}
                inline
                showTimeSelect
                minDate = {form.createdDate}
                excludeTimes = {excludedTimes}
            />
        </div>
    );
}