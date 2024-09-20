import './CardListaDeLeitura.css'

const CardsListaDeLeitura = ({ titulo, qrCodes}) => {
    return (
        <div className='container'>
            <div className='boxCard'>
                <div className='titleCard'>
                    {titulo}
                </div>

                <div className='qrCode'>
                    {qrCodes.map((qrCode, index) => (
                        <p key={index}>{qrCode.codigo}</p>
                    ))}
                </div> 

            </div>
        </div>
    );
}

export default CardsListaDeLeitura;
