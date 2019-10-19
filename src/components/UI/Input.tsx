import * as React from 'react'
import './Input.css'

interface InputProps {
    label:string;
    id: string;
    value:any;
    handleValueChange: any;
    name:string;
}

export const Input: React.FC<InputProps> = props => {
    return (
        <div className = "Input">
            <label htmlFor={props.id}>{props.label}</label>
            <input type="text" value={props.value} name={props.name} onChange={props.handleValueChange} id = {props.id}></input>
        </div>
    );
}
