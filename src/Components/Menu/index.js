import OpcMenu from '../OpcMenu'
import './Menu.css'

const Menu = ({itens}) =>{

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
                        />
                    ))}
                </ul>
            </nav>
        </header>
    )

}

export default Menu