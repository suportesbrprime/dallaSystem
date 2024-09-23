import './Execucao.css'
import { FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";
import Menu from "../../../Components/Menu";
import Titulo from "../../../Components/Titulo";
import CardsDados from "../../../Components/Cardsdados";
import CardExecucao from "../../../Components/CardExecucao";
import CardHistorico from '../../../Components/CardHistorico';
import ModalAlert from '../../../Components/ModalAlerts';
import { useState } from 'react';

const Execucao = () => {    

    const [cancelarOrdem, setCancelarOrdem] = useState(false);
    const [iniciarOrdem, setIniciarOrdem] = useState(false);

    const botoes = [
         {evento: iniciar, icone: <FaRegPlayCircle size={20}/>, textoBtn: "Iniciar"},
         {evento: pausar, icone: <FaRegPauseCircle size={20}/>, textoBtn: "Pausar"},
         {evento: cancelar, icone: <FaRegCircleXmark size={20}/>, textoBtn: "Cancelar"}
    ];

    const listaClientes = [
        {nome: "Maicon Tomasi", order: "43423452"},
        {nome: "Maicon Wasmann", order: "543543"},
    ];

    const listaProdutos = [
        {nome: "Produto 1", codigo: "1234566", quantidade: 58, peso: 90},
        {nome: "Produto 1", codigo: "1234566", quantidade: 58, peso: 90}, 
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

    function iniciar(){
        setIniciarOrdem(true)
    }

    function pausar(){  
        setIniciarOrdem(false)
    }

    function cancelar(){
        setCancelarOrdem(!cancelarOrdem)
    }

    return (
        <section> 
            <Menu botoes={botoes}/>

            <Titulo titulo="Execução" subtitulo="Clique em Iniciar para dar inicio a execução"/>

            <div className="containerCards">
                <CardsDados
                    titulo="Dados"
                    clientes={listaClientes}
                    produtos={listaProdutos}
                />

                <CardExecucao 
                    titulo="Execução"
                    status={listStatus}
                    evento={iniciarOrdem}
                />

                <CardHistorico
                    titulo="Histórico"
                    erros={listErros}
                    evento={iniciarOrdem}
                />
            </div>


            <div className={cancelarOrdem ? "block" : "none"}>
                <ModalAlert 
                    titulo="Tem certeza que deseja cancelar o processo?" 
                    textBtn1="Cancelar e não salvar alterações" textBtn2="Cancelar e salvar alterações" 
                    evento={cancelar}
                />
            </div>
            
        </section>

    )

}

export default Execucao