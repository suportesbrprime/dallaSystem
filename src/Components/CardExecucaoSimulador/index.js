import { useState } from 'react'
import './CardExecucaoSimulador.css'
import { useNavigate } from 'react-router-dom';

const CardExecucaoSimulador = ({ titulo, status, evento }) => {

    const [cameraConectada, setCameraConectada] = useState(false);
    const [dalaConectada, setDalaConectada] = useState(false);

    const [loteTrocado, setLoteTrocado] = useState(false);

    const navegar = useNavigate();

    function conectaCamera(){
        setCameraConectada(!cameraConectada);
    }

    function conectaDala(){
        setDalaConectada(!dalaConectada);
    }

    
    function trocaLote(){
        setLoteTrocado(!loteTrocado)
    }

    function voltaPainel(){
        navegar('/painelGeral');
    }

    return (

        <div className='container'>
            <div className= "boxCardSimulador">
                <div className='titleCard'>
                    {titulo}
                </div>

                <div className='btnsConexaoSimulador'>
                    <button onClick={conectaCamera} className="btnsLigadoSimulador">Iniciar</button>
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
                    <button onClick={() => trocaLote}>Trocar lote</button>
                    <button onClick={voltaPainel}>Finalizar Processo</button>
                </div>

                <div className='downBtns'>
                    <span>Faltou produto no lote?</span>
                    <button className='trocaDeLoteSimulador' onClick={() => trocaLote}>Trocar lote</button>
                    <button className='finalizarSimulador' onClick={voltaPainel}>Finalizar Processo</button>
                </div>
                
            </div>
        </div>

    );
}

export default CardExecucaoSimulador