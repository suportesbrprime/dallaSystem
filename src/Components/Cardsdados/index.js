import './CardsDados.css'

const CardsDados = ({ titulo, ordem, veiculo, clientes, produtos }) => {
    return (
        <div className='container'>
            <div className='boxCard'>
                <div className='titleCard'>
                    {titulo}
                </div>

                <div className='dados'>
                    <span className='section-title'>ORDEM</span>
                    <span>Internal Code Ordem: {ordem}</span>
                    <span>Veículo: {veiculo}</span>
                </div> 

                <div className='dados'>
                    <span className='section-title'>CLIENTES</span>
                    {clientes.map((cliente, index) => (
                        <div key={index} className='cliente'>
                            <span>Nome do Cliente: {cliente.nome}</span>
                            <span>Client Order: {cliente.order}</span>
                        </div>
                    ))}
                </div>

                <div className='dados'>
                    <span className='section-title'>PRODUTOS</span>
                    {produtos.map((produto, index) => (
                        <div key={index} className='produto'>
                            <span>Produto: {produto.nome}</span>
                            <span>Código do Produto: {produto.codigo}</span>
                            <span>Quantidade: {produto.quantidade}</span>
                            <span>Peso: {produto.peso}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CardsDados;
