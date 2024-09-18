import React from "react";

function Text_img ({text, text1, text2, logo}){
    return (
        <div>
            <div className="welcome-text">
                <h1>{text1}</h1>
                <h2>{text2}</h2>
                <p className='welcome_text_text'>{text}</p> 
                <img src={logo} alt="Logo SBR" className="logo" />
            </div>
        </div>
    );
};
export default Text_img;