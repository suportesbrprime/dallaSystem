import React from "react";




function Input({ nome, onChange }) {

    return (
        <div class='input-container'>
            <label className='style_imput' htmlFor={nome}>{nome}</label>
            <input
                type={nome}
                onChange={onChange}
                required
                className="input-field" 
            />
        </div>

    );
}


export default Input;