import React from "react";
import "./Formulario/Formulario.css"

const Button = ({type, children}) => {
    return (
        <button type={type} className="subimit-button">
            {children}
        </button>
    );
}

export default Button;