import * as React from "react"
import './SearchBox.css'
import { Input } from "./Input";

interface SearchBoxProps {
    label:string;
    id: string;
    value:any;
    handleValueChange: any;
    name:string;
    searchHandler:any;    
}

export const SearchBox :React.FC<SearchBoxProps> = props => {
    const {searchHandler,...inputProps} = {...props};
    return (
        <div className="search">
            <Input {...inputProps} ></Input>
            <button className="searchButton" onClick={searchHandler}>
                <svg version="1.1" id="Capa_1"  x="0px" y="0px" viewBox="0 0 489.713 489.713">
                    <g>
	                    <path d="M483.4,454.444l-121.3-121.4c28.7-35.2,46-80,46-128.9c0-112.5-91.5-204.1-204.1-204.1S0,91.644,0,204.144s91.5,204,204.1,204c48.8,0,93.7-17.3,128.9-46l121.3,121.3c8.3,8.3,20.9,8.3,29.2,0S491.8,462.744,483.4,454.444z M40.7,204.144c0-90.1,73.2-163.3,163.3-163.3s163.4,73.3,163.4,163.4s-73.3,163.4-163.4,163.4S40.7,294.244,40.7,204.144z"/>
                    </g>
                </svg>
            </button>
        </div>
    );
}