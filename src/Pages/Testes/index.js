import Menu from "../../Components/Menu"
import { FaHouse } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import Titulo from "../../Components/Titulo";
import Card from "../../Components/Card";



const Testes = () => {

    const itensMenu = [
        { icone: <FaHouse size={19} color="white" />, to: '/painelGeral', campo: 'Painel Geral'},
        { icone: <FaRegCheckCircle size={20} color="white" />, to: '/testes', campo: 'Testes'},
    ]

    const data = [
        { titulo: "Câmera", status: 'Status da câmera', leitura: 'Leitura de QR Code', dala: false, infoAdd: 'CÓDIGO QR CODE' },
        { titulo: "Dala" ,status: 'Status da dala', leitura: '', dala: true, infoAdd: 'Direção da Dala: ' },
      ];

    function sincronizar(){
        window.location.reload()
    }

    return (
        <section> 
            <Menu itens={itensMenu} icone={<LuRefreshCw  size={20}/>} textoBtn="Sincronizar" evento={sincronizar}/>

            <Titulo titulo="Testes" subtitulo="Testes os módulos externos do sistema"/>

            <div className="containerCards">
                <Card
                    card={data}
                    
                />
            </div>
        </section>

    )

}

export default Testes