import React from 'react';
import './Card.scss';

interface ICardProps {
    children?: any;
    bgColor?: string;
    textColor?: string;
    style?: object;
    className?: string;
}

function Card(props: ICardProps): React.ReactElement {
    return (
        <div 
            style={props.style ? props.style : {}} 
            className={`
                my-card bg-${props.bgColor ? props.bgColor : "white"} 
                text-${props.textColor ? props.textColor : "white"}
                ${props.className ? props.className : ""}
            `}>
            {props.children}
        </div>
    );
};

export default Card;
