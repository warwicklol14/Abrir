import * as  React from 'react';
import './ListItem.css'

export const ListItem : React.FC<IListItemProps> = (props) => {
    return (
        <div className={props.hasPercentage ? "item_container_red clearfix" : "item_container clearfix"}>
            <div className="item_text">{ props.description }</div>
            <div className={props.hasPercentage ? "right clearfix" : "right"}>
                <div className="item_value">+ {props.value}</div>
                { props.hasPercentage ? 
                <div className="item_percentage">19%</div> : <div></div>
                }
            </div>
        </div>
    );
}

interface IListItemProps {
    description: string,
    value: number,
    hasPercentage:boolean
}