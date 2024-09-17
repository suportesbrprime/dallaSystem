import { useState } from 'react';
import './Card.css'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Card = ({ card }) => {

  const [equipamento, setEquipamento] = useState([]);
  const [direcoes, setDirecoes] = useState({});

  function liga(index) {  
    if(equipamento.includes(index)){
      setEquipamento(equipamento.filter(item => item !== index))
    } else {
      setEquipamento([...equipamento, index])
    }
  }

  function definirDirecao(index, novaDirecao) {  
    setDirecoes({
      ...direcoes,
      [index]: novaDirecao 
    });

    console.log("Teste")
  }

  return (
    <div className='container'>
      {card.map((item, index) => (
          <div key={index} className='boxCard'>
            <div className='titleCard'>
              {item.titulo}
            </div>

            <div className={equipamento.includes(index) ? "btnDesliga" : "btnLiga"} onClick={() => liga(index)}>
              <p>
                <span className='iconeBtnLiga'>
                  {equipamento.includes(index) ? <FaRegEyeSlash size={20}/> : <FaRegEye size={20} /> }
                </span>
                {equipamento.includes(index) ? "Desligar" : "Ligar "}
              </p>
            </div>

            <div className='boxInfo'>
              <p>{item.status}: {equipamento.includes(index) ? "Ligado" : "Desligado"}</p>
              <p>{item.leitura}</p>

              {item.dala && (
              <div className="btnsDala">
                <button onClick={() => definirDirecao(index, 'Dalla Picking')}>Saída de Produto</button>
                <button onClick={() => definirDirecao(index, 'Dalla Reverse')}>Entrada de Produto</button>
              </div>
            )}

              <p>{item.infoAdd} {direcoes[index] ? direcoes[index] : "Nenhuma"}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Card;
