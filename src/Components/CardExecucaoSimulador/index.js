import { useState } from 'react'
import './CardExecucaoSimulador.css'

const CardExecucaoSimulador = ({ titulo, status, evento }) => {

    const [iniciar, setIniciar] = useState(false)
    const [dalaConectada, setDalaConectada] = useState(false);

    const [loteTrocado, setLoteTrocado] = useState(false);


    function inicar(){
        setIniciar(!iniciar);

        

    }

    function conectaDala(){
        setDalaConectada(!dalaConectada);
    }

    
    function trocaLote(){
        setLoteTrocado(!loteTrocado)
    }

    return (

        <div className='container'>
            <div className= "boxCardSimulador">
                <div className='titleCard'>
                    {titulo}
                </div>

                <div className='btnsConexaoSimulador'>
                    <button onClick={inicar} className={iniciar ? "btnsLigadoSimulador" : "btnsLigadoSimulador"}>{iniciar ? "Pausar" : "Iniciar"}</button>
                    <button onClick={conectaDala} className="btnsLigadoSimulador">Próximo Item</button>
                </div>

                <div className='statusSimulador'>    
                    <span>Status do processo:</span>
                    {status.map((item, index) => (
                        <div index={index}>
                            <p>{item.status}</p>
                            <p>{loteTrocado ? "Lote trocado" : ""}</p>
                        </div>
                    ))} 
                </div>

                <div className='middleBtns'>
                    <button onClick={() => trocaLote}>Editar Item Atual</button>
                    <button>Testar Item Novamente</button>
                </div>

                <div className='downBtns'>
                    <span>Faltou produto no lote?</span>
                    <button className='trocaDeLoteSimulador' onClick={() => trocaLote}>Trocar lote</button>
                    <button className='finalizarSimulador' onClick={evento}>Finalizar Processo</button>
                </div>
                
            </div>
        </div>

    );
}

export default CardExecucaoSimulador