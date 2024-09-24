import { FaHouse } from "react-icons/fa6";
import DropDown from "../../../Components/DropDown";
import Menu from "../../../Components/Menu"
import { MdAccountCircle } from "react-icons/md";
import { LuFileEdit } from "react-icons/lu";
import { useState } from "react";
import Titulo from "../../../Components/Titulo";
import InputTextoAdmin from "../../../Components/InputTextoAdmin";
import InputNumber from "../../../Components/InputNumber";
import { Button } from "@mui/material";
import TabelaAdmin from "../../../Components/TabelaAdmin";

const CadastroDeUnidade = () => {

    const [subMenu, setSubMenu] = useState(false);

    const itensMenu = [
        { icone: <FaHouse size={19} color="white" />, to: '/painelGeralAdmin', campo: 'Painel Geral'},
        { icone: <MdAccountCircle size={20} color="white" />, to: '/perfil', campo: 'Perfil'},
    ]

    const botoes = [
        {evento:abreSubMenu, icone: <LuFileEdit size={20}/>, textoBtn:"Cadastro"}
    ]

    function abreSubMenu(){
        setSubMenu(!subMenu);
    }

    return (
        <div>
            <Menu itens={itensMenu} botoes={botoes}/>

            <div className={subMenu ? "block" : "none"}>
                <DropDown />  
            </div> 

            <Titulo titulo="Cadastro De Unidade" subtitulo=""/>

            <form className="formCadastro">
                <InputTextoAdmin label="Nome"/>
                <InputTextoAdmin label="Endereço"/>
                <InputTextoAdmin label="CNPJ"/>
                <InputNumber />
                <div style={{ margin: '20px', display: 'flex', justifyContent: 'flex-end' }}>
                    <Button sx={{ backgroundColor: '#00B15C', color: 'white', borderRadius: '50px', marginRight: '15px' }} variant="contained">Salvar</Button>
                </div>
            </form>

            <TabelaAdmin cnpj={true}/>
        </div> 
    )

}

export default CadastroDeUnidade