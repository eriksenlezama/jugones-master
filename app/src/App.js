import './App.css'

import React, { PureComponent } from 'react'
import Header from './componentes/Header'
import Tarjeta from './componentes/Tarjeta'
const domain = 'http://localhost:3001'

class App extends PureComponent {
  state = {
    teams: [],
    players: [],
    pichichis: []
  }

  componentDidMount() {
    if (localStorage.getItem('teams') === null) {
      fetch(`${domain}/teams`)
        .then(response => {
          return response.json();
        })
        .then(teams => {
          this.setState({ teams })
          localStorage.setItem('teams', JSON.stringify(teams))
        });
    } else {
      this.setState({teams: JSON.parse(localStorage.getItem('teams'))})
    }

    if (localStorage.getItem('players') === null) {
      fetch(`${domain}/players`)
        .then(response => {
          return response.json();
        })
        .then(players => {
          this.setState({ players })
          localStorage.setItem('players', JSON.stringify(players))
        });
    } else {
      this.setState({players: JSON.parse(localStorage.getItem('players'))})
    }

    if (localStorage.getItem('pichichis') === null) {
      fetch(`${domain}/pichichis`)
        .then(response => {
          return response.json();
        })
        .then(pichichis => {
          this.setState({ pichichis })
          localStorage.setItem('pichichis', JSON.stringify(pichichis))
        });
    } else {
      this.setState({pichichis: JSON.parse(localStorage.getItem('pichichis'))})
    }
  }

  render() {
    const { teams, players } = this.state

    return <div className="App">
      <Header players={this.state.players} teams={this.state.teams} pichichis={this.state.pichichis}></Header>
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
