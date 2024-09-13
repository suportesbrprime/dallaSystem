import './Titulo.css'

const Titulo = ({titulo, subtitulo}) =>{
    return (

        <div className='titulo'>
            <h2>{titulo}</h2>
            <p>{subtitulo}</p>
        </div>

    )
}


export default Titulo