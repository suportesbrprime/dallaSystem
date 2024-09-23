import Menu from "../../../Components/Menu"
import { FaHouse } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { SlControlPlay } from "react-icons/sl";
import Tabela from "../../../Components/Tabela";
import './PainelGeral.css'

const PainelGeral = () =>{

    const itensMenu = [
        { icone: <FaHouse size={19} color="white" />, to: '/painelGeral', campo: 'Painel Geral'},
        { icone: <FaRegCheckCircle size={20} color="white" />, to: '/testes', campo: 'Testes'},
        { icone: <SlControlPlay size={20} color="white" />, to: '/simulacao', campo: 'Simulação'},
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
        <h2 className="painel">Painel Geral</h2>
        <p className="text_line"> Acompanhe todas as ordens pendentes <div>Selecione a ordem de carregamento</div>
        </p>
        <div className="tabela">
            <Tabela />
        </div>
        
    </div>
    )
}


export default PainelGeral