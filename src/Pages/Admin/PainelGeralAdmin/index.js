import { FaHouse } from "react-icons/fa6"
import { MdAccountCircle } from "react-icons/md";
import { LuFileEdit } from "react-icons/lu";
import Menu from "../../../Components/Menu"
import DropDown from "../../../Components/DropDown";
import { useState } from "react";
import Titulo from "../../../Components/Titulo";
import TabelaAdmin from "../../../Components/TabelaAdmin";
import { useNavigate } from "react-router-dom";

const PainelGeralAdmin = () =>{

    const [subMenu, setSubMenu] = useState(false);
    const navigate = useNavigate();

    const itensMenu = [
        { icone: <FaHouse size={19} color="white" />, to: '/painelGeralAdmin', campo: 'Painel Geral'},
        { icone: <MdAccountCircle size={20} color="white" />, to: '/perfilAdmin', campo: 'Perfil', evento: () => navigate('./perfilAdmin')},
    ]

    const botoes = [
        {evento:abreSubMenu, icone: <LuFileEdit  size={20}/>, textoBtn:"Cadastro"}
    ]

    const rows = [
        {nome: 'Unidade 1', endereco: "Ribeirão Preto", dalasInstaladas: 6},
        {nome: 'Unidade 2', endereco: "Presidente Prudente", dalasInstaladas: 9},
        {nome: 'Unidade 3', endereco: "Ribeirão Preto", dalasInstaladas: 16},
        {nome: 'Unidade 4', endereco: "Ribeirão Preto", dalasInstaladas: 3},
        {nome: 'Unidade 5', endereco: "Ribeirão Preto", dalasInstaladas: 16},
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

            <div className="boxTabela">
                <TabelaAdmin rows={rows} cnpj={false} evento=""/>
            </div>
        </div>
    )

}

export default PainelGeralAdmin