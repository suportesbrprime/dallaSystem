import OpcMenu from '../OpcMenu'
import './Menu.css'

const Menu = ({itens, botoes}) =>{

    return (
        <header>  
            <nav>
                <ul className='menu'>
                    {itens ?  itens.map((item, index) => (
                        <OpcMenu 
                            key={index}
                            icone={item.icone}
                            to={item.to}
                            campo={item.campo}
                            evento={item.evento}
                        />
                    )) : ""}
                    {botoes.map((botao, index) => (
                        <div key={index} className={botoes ? "btns" : "none"}>
                            <button onClick={botao.evento}><span>{botao.icone}</span> {botao.textoBtn}</button>
                        </div>
                    ))}
                    

                </ul>
            </nav>
        </header>
    )

}

export default Menu