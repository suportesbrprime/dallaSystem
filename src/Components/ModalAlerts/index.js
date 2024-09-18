import './ModalAlert.css'

const ModalAlert = ({ titulo, textBtn1, textBtn2, evento }) =>{



    return (
        <div className="modal-overlay">
            <div className='boxModal'>
                <span>{titulo}</span>

                <div className='btnsModal'>
                    <button>{textBtn1}</button>
                    <button>{textBtn2}</button>
                </div>

                <div className='btnVoltar'>
                    <button onClick={evento}>Voltar</button>
                </div>
            </div>
        </div>

    )
}

export default ModalAlert