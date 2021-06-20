import React, { useState } from 'react';
import './ValidInput.scss';

import IconError from "../IconError";

interface IValidInputProps {
    inputValue?: string;
    errorMessage?: string;
    inputValueHandler?: any,
    name?: string;
    type?: string;
    // validate?: boolean;
    validation?: any;
    required?: boolean;
    placeholder?: string;
}

const ValidInput: React.FunctionComponent<IValidInputProps> = (props) => {
    const [inputFocus, setInputFocus] = useState(false);

    return (
        <div className="mb-2">
            <div className={`valid-input ${props.errorMessage ? "error-input" : ""} ${inputFocus ? "active" : ""}`}>
                <input 
                    onFocus={() => setInputFocus(true)} 
                    onBlur={() => setInputFocus(false)} 
                    className="valid-input-inputbox"
                    onChange={(e) => {
                        props.inputValueHandler(e.target.value);
                        if (props.validation) {
                            props.validation("")
                        }
                    }}
                    value={props.inputValue}
                    type={props.type ? props.type : "text"}
                    placeholder={props.placeholder}
                ></input>
                <div className="err-status cur-pointer" title={`${props.errorMessage}`}>
                    <IconError show={props.errorMessage ? true : false}></IconError>
                </div>
            </div>
            <div className={`error-message mb-3`}>
                {props.errorMessage}
            </div>
        </div>
    );
};

export default ValidInput;
