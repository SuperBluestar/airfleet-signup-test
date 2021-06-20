import React from 'react';
import './IconError.scss';

import icon_error from './icon-error.svg';

interface IIconErrorProps {
    show?: boolean;
}

const IconError: React.FunctionComponent<IIconErrorProps> = (props) => {
    return (
        props.show ? <img src={icon_error} className="error-icon" alt="i" /> : <></>
    );
};

export default IconError;
