import React from 'react'
import './css/tarjeta.css'

const Tarjeta = props => {

  const player = props.player
  return (

    <div className="tarjeta">
      <img className="shield-player" src={player.shield} alt={player.teamName}/>
      <div className="img-player">
        <img className="img-player" src={player.img || player.url}/>
      </div>
      <div className="content-player">
        <p className="name-player">{player.name}</p>
        <p className="team-player">{player.teamName}</p>
      </div>
    </div>
  )
}

export default Tarjeta
