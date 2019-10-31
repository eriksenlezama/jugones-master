import './App.css'

import React, { PureComponent } from 'react'
import Tarjeta from './componentes/Tarjeta'
const domain = 'http://localhost:3001'

class App extends PureComponent {
  state = {
    teams: [],
    players: []
  }

  componentDidMount() {
    fetch(`${domain}/teams`)
      .then(response => {
        return response.json();
      })
      .then(teams => {
        this.setState({ teams })
      });
    fetch(`${domain}/players`)
      .then(response => {
        return response.json();
      })
      .then(players => {
        this.setState({ players })
      });
  }

  render() {
    const { teams, players } = this.state

    return <div className="App">
      <header className="App-heading App-flex">
        <h2>Jugadores</h2>
      </header>
      <div className="App-teams App-flex">
        {/* 
          TODO ejercicio 2
          Debes obtener los players en lugar de los equipos y pintar su nombre. 
          Borra todo el código que no sea necesario. Solo debe existir un título: Los jugadores
          y una lista con sus nombres. 
          ** Los comentarios de los ejercicios no los borres.
        */}
        <ul>
          {/* 
            TODO ejercicio 3
            Vamos a pasar a darle diseño. Crea el diseño propuesto en el readme con los requerimientos que se necesite.
            Guiate por las imágenes.
           */}
          {
            players.map(player => <Tarjeta key={player.id} player={player}></Tarjeta>)
          }
        </ul>
      </div>
    </div>
  }
}

export default App
