import { useState } from 'react'
import './CardExecucao.css'
import { useNavigate } from 'react-router-dom';

const CardExecucao = ({ titulo, status, evento }) => {

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
        navegar('/');
    }

    return (

        <div className='container'>
            <div className={evento ? "boxCard" : "boxCard opacity"}>
                <div className='titleCard'>
                    {titulo}
                </div>

                <div className='btnsConexao'>
                    <button disabled={!evento} onClick={conectaCamera} className={cameraConectada ? "btnsLigado" : "btnsDesligado" }>{cameraConectada ? "Desconectar Câmera" : "Conectar Câmera" }</button>
                    <button disabled={!evento} onClick={conectaDala} className={dalaConectada ? "btnsLigado" : "btnsDesligado" }>{dalaConectada ? "Desconectar Dala" : "Conectar Dala" }</button>
                </div>

                <div className='status'>    
                    <span>Status do processo:</span>
                    {status.map((item, index) => (
                        <div key={index}>
                            <p>{item.status}</p>
                            <p>{loteTrocado ? "Lote trocado" : ""}</p>
                        </div>
                    ))} 
                </div>

                <div className='trocaDeLote'>
                    <span>Faltou produto no lote?</span>
                    <button disabled={!evento} onClick={() => trocaLote}>Trocar lote</button>
                    <button disabled={!evento} onClick={voltaPainel}>Voltar ao painel geral</button>
                </div>
                
            </div>
        </div>

    );
}

export default CardExecucao