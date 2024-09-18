import React, { useState } from 'react';
import Input from '../InputTexto';
import './Formulario.css';

const Formulario = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Terms Accepted:', termsAccepted);
  };

  return (
    <section className="estrutura">
      <div className="estrutura_login">
        <form onSubmit={handleSubmit}>
          <div className="estrutura_login_email">
            <Input 
              nome="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              Style="email-label"
            />
          </div>
          <div className="estrutura_login_senha">
            <Input 
              nome="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              Style="password-label"
            />
          </div>
          <div className="estrutura_login_terms">
            <label>
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              <span className='nome_terms'>
                Aceito os <a>Termos de Uso</a> e <a>Política de Privacidade</a> da Plataforma
              </span>
            </label>
          </div>
          <div className="style_botao">
            <button type="submit" className="submit-button">
              Entrar
            </button>
          </div>
         
        </form>
      </div>
    </section>
  );
};

export default Formulario;