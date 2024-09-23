import './ModalAlert.css'

const ModalAlert = ({ titulo, textBtn1, eventoBtn1, textBtn2, eventoBtn2, evento }) =>{

    return (
        <div className="modal-overlay">
            <div className='boxModal'>
                <span>{titulo}</span>

                <div className='btnsModal'>
                    <button onClick={eventoBtn1}>{textBtn1}</button>
                    <button onClick={eventoBtn2}>{textBtn2}</button>
                </div>

                <div className='btnVoltar'>
                    <button onClick={evento}>Voltar</button>
                </div>
            </div>
        </div>

    )
}

export default ModalAlert