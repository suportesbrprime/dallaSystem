import { useState } from 'react'
import './CardExecucao.css'
import { Link } from 'react-router-dom';

const CardExecucao = ({ titulo, status }) => {

    const [cameraConectada, setCameraConectada] = useState(false);
    const [dalaConectada, setDalaConectada] = useState(false);

    function conectaCamera(){
        setCameraConectada(!cameraConectada);
    }

    function conectaDala(){
        setDalaConectada(!dalaConectada);
    }

    
    function trocaLote(){
        console.log("funfo")
    }

    function voltaPainel(){
        console.log("funfo")
    }

    return (

        <div className='container'>
            <div className='boxCard'>
                <div className='titleCard'>
                    {titulo}
                </div>

                <div className='btnsConexao'>
                    <button onClick={conectaCamera} className={cameraConectada ? "btnsLigado" : "btnsDesligado" }>{cameraConectada ? "Desconectar Câmera" : "Conectar Câmera" }</button>
                    <button onClick={conectaDala} className={dalaConectada ? "btnsLigado" : "btnsDesligado" }>{dalaConectada ? "Desconectar Dala" : "Conectar Dala" }</button>
                </div>

                <div className='status'>
                    <span>Status do processo:</span>
                    {status.map((item, index) => (
                        <div index={index}>
                            <p>{item.status}</p>
                        </div>
                    ))}
                </div>

                <div className='trocaDeLote'>
                    <span>Faltou produto no lote?</span>
                    <button onClick={() => trocaLote}>Trocar lote</button>
                    <button onClick={() => voltaPainel}>Voltar ao painel geral</button>
                </div>
                
            </div>
        </div>

    );
}

export default CardExecucao