import OpcMenu from '../OpcMenu'
import './Menu.css'

const Menu = ({itens, icone, textoBtn, evento}) =>{

    return (
        <header>  
            <nav>
                <ul className='menu'>
                    {itens.map((item, index) => (
                        <OpcMenu 
                            key={index}
                            icone={item.icone}
                            to={item.to}
                            campo={item.campo}
                            evento={item.evento}
                        />
                    ))}

                    <div className={evento ? "btns" : "none"}>
                        <button onClick={evento}><span>{icone}</span> {textoBtn}</button>
                    </div>

                </ul>
            </nav>
        </header>
    )

}

export default Menu