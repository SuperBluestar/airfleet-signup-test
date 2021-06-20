import React from 'react';
import './Button.scss';

interface IButtonProps {
    children?: any;
    value?: string;
    style?: object;
    bgColor: string;
    textColor: string;
    className: string;
    onClickTrigger?: any;
}

function Button(props: IButtonProps): React.ReactElement {
    return (
        <button 
            onClick={props.onClickTrigger}
            style={props.style ? props.style : {}} 
            className={`
                pointer my-button bg-${props.bgColor ? props.bgColor : "white"} 
                text-${props.textColor ? props.textColor : "white"}
                ${props.className ? props.className : ""}
            `}>
            {props.children}
        </button>
    );
};

export default Button;
