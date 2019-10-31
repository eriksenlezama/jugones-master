import React from 'react'
import './css/modal.css'

const Modal = props => {

  let pichichis = []

  props.pichichis.map(pichichi => {
    let goals = parseInt(pichichi.goals || 0)
    let name = props.players
      .filter(player => player.id === pichichi.playerId ? player.name : null)
    pichichis.push({name: name[0].name, goals: goals })
  })

  return (
    <div className="modal">
      <div className="modal_inner">
        <div className="contenido">
          <ul>
            <li className="pichichi negrita">
              <span>Nombre</span>
              <span>Goles</span>
            </li>
            {
              pichichis.map((pichichi,i) => (
                <li 
                  className="pichichi" 
                  key={i}
                >
                  <span>{pichichi.name}</span>
                  <span>{pichichi.goals}</span>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="cerrar">
          <button className="button" onClick={ props.toggle }>Cerrar</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
