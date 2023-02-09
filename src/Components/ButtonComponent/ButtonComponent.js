import React from 'react';

const ButtonComponent = ({children}) => {
    return (
        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">{children}</button>
    );
};

export default ButtonComponent;