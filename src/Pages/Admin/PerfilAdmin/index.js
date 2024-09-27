import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import Menu from '../../../Components/Menu';
import { FaHouse } from 'react-icons/fa6';
import { LuFileEdit } from 'react-icons/lu';
import Titulo from '../../../Components/Titulo';
import './perfil.css';

const PerfilAdmin = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [nome, setNome] = useState('Admin');
    const [email, setEmail] = useState('admin@example.com');
    const [endereco, setEndereco] = useState('Admin Street, 123');
    const [cnpj, setCnpj] = useState('12345678901234');

    const itensMenu = [
        { icone: <FaHouse size={19} color="white" />, to: '/painelGeralAdmin', campo: 'Painel Geral' },
    ];

    const botoes = [
        { evento: () => setIsEditing(true), icone: <LuFileEdit size={20} />, textoBtn: "Editar Perfil" }
    ];

    const handleSave = () => {
        setIsEditing(false);
        // Lógica para salvar as alterações
        console.log({ nome, email, endereco, cnpj });
    };

    return (
        <div>
            <Menu itens={itensMenu} botoes={botoes} />
            <Titulo className='titulo' titulo="Perfil do Administrador" subtitulo="" />
            {isEditing ? (
                <form className="formCadastro">
                    <TextField 
                        sx={{
                            backgroundColor: '#DADADA',
                            boxShadow: '0px 4px 4px 0px #00000040',
                            color: 'black',
                            width: '95%',
                            marginLeft: '30px',
                        }}
                        id="nome"
                        label="Nome"
                        variant="outlined"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField 
                        sx={{
                            backgroundColor: '#DADADA',
                            boxShadow: '0px 4px 4px 0px #00000040',
                            color: 'black',
                            width: '95%',
                            marginLeft: '30px',
                        }}
                        id="email"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField                 
                        sx={{
                            backgroundColor: '#DADADA',
                            boxShadow: '0px 4px 4px 0px #00000040',
                            color: 'black',
                            width: '95%',
                            marginLeft: '30px',
                        }}
                        id="endereco"
                        label="Endereço"
                        variant="outlined"
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField 
                        sx={{
                            backgroundColor: '#DADADA',
                            boxShadow: '0px 4px 4px 0px #00000040',
                            color: 'black',
                            width: '95%',
                            marginLeft: '30px',
                        }}
                        id="cnpj"
                        label="CNPJ"
                        variant="outlined"
                        value={cnpj}
                        onChange={(e) => setCnpj(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <div style={{ margin: '5px', display: 'flex', justifyContent: 'flex-end' }}>
                        <Button onClick={handleSave} sx={{ backgroundColor: '#00B15C', color: 'white', borderRadius: '50px', marginRight: '15px'}} variant="contained">Salvar</Button>
                    </div>
                </form>
            ) : (
                <div className='conteiner'>
                    <p className='name'><strong>Nome:</strong> {nome}</p>
                    <p className='email'><strong>Email:</strong> {email}</p>
                    <p className='endereco'><strong>Endereço:</strong> {endereco}</p>
                    <p className='cnpj'><strong>CNPJ:</strong> {cnpj}</p>
                </div>
            )}
        </div>
    );
};

export default PerfilAdmin;