import * as React from 'react'
import './Button.css'

interface ButtonProps {
    onClick?:any;
}

export const Button = props => {
    return (
        <button onClick={props.onClick} className="action-button shadow animate blue">{props.children}</button>
    )
}

