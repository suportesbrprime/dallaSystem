import './CardHistorico.css'

const CardHistorico = ({ titulo, total, erros, evento }) => {

    return(

        <div className='container'>
            <div className={evento ? "boxCard" : "boxCard opacity"}>
                <div className='titleCard'>
                    {titulo}
                </div>

                <div className='dados'>
                    <span className='section-title'>PRODUTOS LIDOS</span>
                    <span>Total: {total}</span>
                </div>

                <div className='dados'>
                    <span className='section-title'>ERROS DE LEITURA</span>
                    <span>Erro na leitura do Qr Code: {erros.erroQrCode}</span>
                    <span>Produto errado: {erros.erroProduto}</span>
                    <span>Lote errado: {erros.erroLote}</span>
                </div>

                <div className='dados'>
                    <span className='section-title'>HISTÓRICO DE ERROS</span>
                    <div className='histDiv'>
                        
                    </div>
                </div>

            </div>
        </div>

    )

}

export default CardHistorico