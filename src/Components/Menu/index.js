import OpcMenu from '../OpcMenu'
import './Menu.css'
import { FaHouse } from "react-icons/fa6";

const Menu = ({campo}) =>{

    return (
        <header>
            <nav>
                <ul className='lista'>
                    <OpcMenu campo="Painel Geral" to="/" icone={<FaHouse size={20} color='white'/>}/>
                    <OpcMenu campo="Painel Geral" to="/" icone={<FaHouse size={20} color='white'/>}/>
                    <OpcMenu campo="Painel Geral" to="/" icone={<FaHouse size={20} color='white'/>}/>
                </ul>
            </nav>
        </header>
    )

}

export default Menu