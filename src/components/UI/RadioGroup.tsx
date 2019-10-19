import * as React from 'react'

export const RadioGroup: React.FC<RadioProps> = props => {
    return (
        <div>
            <input type="radio" checked={props.checkedValue === "annually"}
                name="date-picker" value="annually" 
                onChange={props.handleValueChange}/>Annually
            <input type="radio" checked={props.checkedValue === "montly"}
                name="date-picker" value="monthly" 
                onChange={props.handleValueChange}/>Monthly
            <input type="radio" checked={props.checkedValue === "weekly"}
                name="date-picker" value="weekly"
                onChange={props.handleValueChange}/>Weekly
            <input type="radio" checked={props.checkedValue === "all"}
                name="date-picker" value="historic" 
                onChange={props.handleValueChange}/>Historic
        </div>
    );
}

interface RadioProps {
    checkedValue:string;
    handleValueChange:any;
}