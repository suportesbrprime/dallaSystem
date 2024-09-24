import { FaHouse } from "react-icons/fa6";
import { TextField } from "@mui/material"
import Menu from "../../../Components/Menu"
import { MdAccountCircle } from "react-icons/md";
import Tabela from "../../../Components/Tabela";
import { LuFileEdit } from "react-icons/lu";
import { useState } from "react";
import InputTextoAdmin from "../../../Components/InputTextoAdmin";
import InputNumber from "../../../Components/InputNumber";
const CadastroDeOperador = () => {

    const [subMenu, setSubMenu] = useState(false);

    const itensMenu = [
        { icone: <FaHouse size={19} color="white" />, to: '/painelGeralAdmin', campo: 'Painel Geral'},
        { icone: <MdAccountCircle size={20} color="white" />, to: '/perfil', campo: 'Perfil'},
    ]
    const botoes = [
        {evento:abreSubMenu, icone: <LuFileEdit  size={20}/>, textoBtn:"Cadastro"}
    ]

    function abreSubMenu(){
        setSubMenu(!subMenu);
    }
    return (

        <div>
            <Menu itens={itensMenu} botoes={botoes} />
            <form className="formCadastro">
                <InputTextoAdmin label='Nome'/>
                <InputTextoAdmin label='email'/>
                <div style={{display:'flex', alignItems:'center', marginTop:'-50px'}}>
                    <InputNumber label='Dala'/>
                    <TextField label='Unidade' type='number' sx={{ width: '45%' }}/>
                    <TextField sx={{width:'25%', marginTop: '15%', margin:'5%'}} label='Senha'/>
                    <TextField sx={{width:'25%', marginTop: '15%', margin:'5%'}} label='Confirme a senha'/>
                </div>
            </form>
            <Tabela/>
        </div>

    )

}


export default CadastroDeOperador