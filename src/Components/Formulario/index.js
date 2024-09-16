import Input from '../InputTexto';
import '../Formulario/Formulario.css';
import React, { useState } from 'react';

const Formulario = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div class ='estrutura_login'>
      <form onSubmit={handleSubmit}>
        <div class ='style_email'>
            <Input 
              nome="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            
            />
        </div>
        <div class ='style_senha'>
            <Input 
              nome="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

         </div>
         <div class ='style_botao'>
            <button type='submit'>
              Entrar
            </button>
         </div>
       
      </form>
    </div>
  );
};

export default Formulario;