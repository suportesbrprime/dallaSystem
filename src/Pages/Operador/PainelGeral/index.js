import Menu from "../../../Components/Menu"
import { FaHouse } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import Tabela from "../../../Components/Tabela";
import './PainelGeral.css'
import { ApiProvider } from "../../../context/ContextApi";
import Titulo from "../../../Components/Titulo";


const PainelGeral = () =>{

    const itensMenu = [
        { icone: <FaHouse size={19} color="white" />, to: '/painelGeral', campo: 'Painel Geral'},
        { icone: <FaRegCheckCircle size={20} color="white" />, to: '/testes', campo: 'Testes'},
    ]

    const botoes = [
        {evento:sincronizar, icone: <LuRefreshCw  size={20}/>, textoBtn:"Sincronizar"}
    ]

    function sincronizar(){
        window.location.reload()
    }


    return (
    <div>
        <Menu itens={itensMenu} botoes={botoes}/>
        <Titulo titulo="Painel Geral" subtitulo="Acompanhe todas as ordens pendentes -- Selecione a ordem de carregamento" />
        <div className="tabela">
            <ApiProvider>
                <Tabela />
            </ApiProvider>
            
        </div>
        
    </div>
    )
}


export default PainelGeral