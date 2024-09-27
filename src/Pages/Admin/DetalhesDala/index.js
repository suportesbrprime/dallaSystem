import { useState } from "react";
import { FaHouse } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { LuFileEdit } from "react-icons/lu";
import DropDown from "../../../Components/DropDown";
import Menu from "../../../Components/Menu";
import PaginaDala from "../../../Components/PaginaDala";

const DetalhesDala = () => {

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
            <Menu itens={itensMenu} botoes={botoes}/>
            
            <div className={subMenu ? "block" : "none"}>
                <DropDown />  
            </div>  

            <PaginaDala />

            
    
        </div>

    )

}

export default DetalhesDala