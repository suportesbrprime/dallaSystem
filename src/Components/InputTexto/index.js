import React from "react";
import './InputTexto.css';

function Input({ nome, type, value, onChange, style }) {
  return (
    <div className="input-container">
      <label className={style} htmlFor={nome}>{nome}</label>
      <input
        type={type}
        id={nome}
        value={value}
        onChange={onChange}
        required
        className={`input-field ${type}`}
      />
    </div>
  );
}

export default Input;