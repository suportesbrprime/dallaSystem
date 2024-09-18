import React from 'react';
import Formulario from '../../Components/Formulario'
import Text_img from '../../Components/Text_img'
import './login.css';

const Login = () => {

  return ( 
  <section className="estrutura_login_img">
     <div className="estrutura_login_img_logo">
        <Text_img 
          text="Realize login com as credenciais de Operador para usar o serviço"
          text1="Bem Vindo!"
          text2="Dala Automatizada"
          logo="./assets/logo-sbr-prim.png"
        />
    </div>
    <div className="estrutura_login_img_form">
      <Formulario />
    </div>
  </section>
  );
};

export default Login;