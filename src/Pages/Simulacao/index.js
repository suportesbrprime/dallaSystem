import { FaHouse } from 'react-icons/fa6'
import Menu from '../../Components/Menu'
import './Simulacao.css'
import { FaRegCheckCircle } from 'react-icons/fa'
import { LuRefreshCw } from 'react-icons/lu'
import { SlControlPlay } from "react-icons/sl";
import CardsListaDeLeitura from '../../Components/CardsListaDeLeitura'
import Titulo from '../../Components/Titulo'
import CardExecucaoSimulador from '../../Components/CardExecucaoSimulador'
import CardHistorico from '../../Components/CardHistorico'
import { useState } from 'react'
import ModalAlert from '../../Components/ModalAlerts'
import { useNavigate } from 'react-router-dom'
import InputFile from '../../Components/InputFile'

const Simulacao = () => {

    const [iniciarOrdem, setIniciarOrdem] = useState(true);
    const [cancelarOrdem, setCancelarOrdem] = useState(false);

    const navegar = useNavigate();

    const itensMenu = [
        { icone: <FaHouse size={19} color="white" />, to: '/painelGeral', campo: 'Painel Geral'},
        { icone: <FaRegCheckCircle size={20} color="white" />, to: '/testes', campo: 'Testes'},
        { icone: <SlControlPlay size={20} color="white" />, to: '/simulacao', campo: 'Simulação'},
    ]

    const botoes = [
        {evento:sincronizar, icone: <LuRefreshCw  size={20}/>, textoBtn:"Sincronizar"}
    ]

    const codigos = 
    [
        {codigo: "Qr Code 1"},
        {codigo: "Qr Code 1"},
        {codigo: "Qr Code 1"},
        {codigo: "Qr Code 1"},
        {codigo: "Qr Code 1"},
        {codigo: "Qr Code 1"},
        {codigo: "Qr Code 1"},
        {codigo: "Qr Code 1"},
        {codigo: "Qr Code 1"},
        {codigo: "Qr Code 1"},
    ];

    const listStatus = [
        {status: "Câmera Conectada"},
        {status: "Dala Conectada"},
        {status: "Inicio da ordem"},
        {status: "Leitura do Qr code realizada"},
        {status: "Leitura não realizada"},
        {status: "Leitura do Qr code realizada"},
        {status: "Leitura não realizada"},
        {status: "Leitura do Qr code realizada"},
        {status: "Leitura não realizada"},
        {status: "Leitura do Qr code realizada"},
        {status: "Leitura não realizada"},
        {status: "Leitura do Qr code realizada"}
    ];

    const listErros = [
        {erroQrCode: 2, erroProduto: 5, erroLote: 10}
    ];

    function sincronizar(){
        window.location.reload()
    }

    function voltaPainel(){
        navegar('/painelGeral');
    }

    function cancelar(){
        setCancelarOrdem(!cancelarOrdem)
    }

    return(

        <section>
            <Menu itens={itensMenu} botoes={botoes}/>


            <Titulo titulo="Simular" subtitulo="Simule o processo utilizando o Picking Up sem os módulos externos (Câmera e Dala)"/>

            <div className='uploadPlanilha'>
                <InputFile />
            </div>

                <div className="containerCards">
                    <CardsListaDeLeitura
                        titulo="Lista de Qr Codes"
                        qrCodes={codigos}
                    />  

                    <CardExecucaoSimulador 
                        titulo="Execução"
                        status={listStatus}
                        evento={cancelar}
                    />

                    <CardHistorico
                    titulo="Histórico"
                    erros={listErros}
                    evento={iniciarOrdem}
                />
                </div>

                <div className={cancelarOrdem ? "block" : "none"}>
                    <ModalAlert
                        titulo="Deseja finalizar o processo?"
                        textBtn1="Cancelar e salvar as alterações"
                        eventoBtn1={voltaPainel}
                        textBtn2="Cancelar e não salvar as alterações"
                        eventoBtn2={voltaPainel}
                        evento={voltaPainel}
                    />
                </div>
        </section>
    )
}


export default Simulacao