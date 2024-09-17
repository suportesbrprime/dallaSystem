import Menu from "../../Components/Menu"
import { FaHouse } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import Titulo from "../../Components/Titulo";
import Card from "../../Components/Card";

const Execucao = () => {
    
    const itensMenu = [
        { icone: <FaHouse size={19} color="white" />, to: '', campo: 'Painel Geral'},
        { icone: <FaRegCheckCircle size={20} color="white" />, to: '/testes', campo: 'Testes'},
        { icone: <LuRefreshCw size={20} color="white" />, to: '', campo: 'Sicronizar'},
    ];

    const data = [
        { titulo: "Câmera", status: 'Status da câmera', leitura: 'Leitura de QR Code', dala: false, infoAdd: 'CÓDIGO QR CODE' },
        { titulo: "Dala" ,status: 'Status da dala', leitura: '', dala: true, infoAdd: 'Direção da Dala: ' },
    ];

    return (
        <section> 
            <Menu itens={itensMenu}/>

            <Titulo titulo="Execução" subtitulo="Clique em Iniciar para dar inicio a execução"/>

            <div className="containerCards">
                <Card
                    card={data}
                
                />
            </div>
        </section>

    )

}

export default Execucao