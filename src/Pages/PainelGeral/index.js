import Menu from "../../Components/Menu"
import { FaHouse } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";


const PainelGeral = () =>{

    const itensMenu = [
        { icone: <FaHouse size={19} color="white" />, to: '/painelGeral', campo: 'Painel Geral'},
        { icone: <FaRegCheckCircle size={20} color="white" />, to: '/testes', campo: 'Testes'},
        { icone: <LuRefreshCw size={20} color="white" />, to: '', campo: 'Sicronizar'},
    ]

    return (
    
    <Menu itens={itensMenu}/>
    )
}


export default PainelGeral