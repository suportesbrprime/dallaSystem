import { FaHouse } from "react-icons/fa6"
import { MdAccountCircle } from "react-icons/md";
import { LuFileEdit } from "react-icons/lu";
import Menu from "../../../Components/Menu"
import DropDown from "../../../Components/DropDown";
import { useState } from "react";
import Titulo from "../../../Components/Titulo";
import BasicTable from "../../../Components/TabelaAdmin";

const PainelGeralAdmin = () =>{

    const [subMenu, setSubMenu] = useState(false);

    const itensMenu = [
        { icone: <FaHouse size={19} color="white" />, to: '/painelGeral', campo: 'Painel Geral'},
        { icone: <MdAccountCircle size={20} color="white" />, to: '/testes', campo: 'Testes'},
    ]

    const botoes = [
        {evento:abreSubMenu, icone: <LuFileEdit  size={20}/>, textoBtn:"Cadastro"}
    ]

    function abreSubMenu(){
        setSubMenu(!subMenu);
    }
    
    return(
        <div>
             <Menu itens={itensMenu} botoes={botoes}/>
            
            <div className={subMenu ? "block" : "none"}>
                <DropDown />  
            </div>  

            <Titulo titulo="Painel Geral" subtitulo="Acompanhe todas as unidades cadastradas Selecione a unidade para obter mais detalhes"/>

            <BasicTable />
        </div>
    )

}

export default PainelGeralAdmin