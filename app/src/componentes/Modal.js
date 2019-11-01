import React from 'react'
import './css/modal.css'
const domain = 'http://localhost:3001'

class Modal extends React.Component {

  state = {
    pichichis: [],
    orden: true,
    clicked: false,
    team: "",
    player: "",
    playerId: 0,
    teamId: 0,
    transferResponse: false
  }

  componentDidMount = () => {
    let pichichis = []

    this.props.pichichis.map(pichichi => {
      let goals = parseInt(pichichi.goals || 0)
      let name = this.props.players
        .filter(player => player.id === pichichi.playerId ? player.name : null)
      pichichis.push({name: name[0].name, goals: goals })
    })

    this.setState({pichichis})
  }
  
  changeTeam = event => {
    this.setState({team: event.target.selectedOptions[0].label, teamId: event.target.value});
  }

  changePlayer = event => {
    this.setState({player: event.target.selectedOptions[0].label, playerId: event.target.value})
  }
  
  toggleGoals = () => {
    this.setState({orden: !this.state.orden, clicked: true})
    this.state.pichichis.sort((a, b) => this.state.orden === true ? b.goals - a.goals : a.goals - b.goals)
  }

  transferir = () => {
    
    const request = fetch(`${domain}/transfer`, {
      method: 'POST', 
      body: JSON.stringify({
        playerId: this.state.playerId,
        teamId: this.state.teamId
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    const response = request.then(res => res.json())
    response.then(res => this.setState({transferResponse: res}))

  }

  render(){

    let dinero = [{money:0}]
    this.state.team !== "" ? dinero = this.props.teams.filter(t => t.name === this.state.team) : null 

    let costo = [{price:0}]
    this.state.player !== "" ? costo = this.props.players.filter(p => p.name === this.state.player) : null

    let content
    if (this.props.modal === "pichichis") {
      content = 
      <ul>
        <li className="pichichi negrita">
          <span>Nombre</span>
          <div onClick={this.toggleGoals}>
            <span className="goles">Goles</span>
            <div className={this.state.orden && !this.state.clicked ? "flecha" : this.state.orden && this.state.clicked ? "flecha up" : "flecha down"}>&gt;</div>
          </div>
        </li>
        {
          this.state.pichichis.map((pichichi,i) => (
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
    } else if (this.props.modal === "traspasos"){
      content = 
        <div className="traspasos">
          <form>
            <p>Selecciona un equipo</p>
            <select value={this.state.team} onChange={this.changeTeam}>
              <option value="">Equipos</option>
              {
                this.props.teams
                .map(team => <option key={team.id} name={team.name} value={team.id}>{team.name}</option> )
              }
            </select>
            <p className="dinero">$ {dinero[0].money}</p>
            <p>Selecciona al jugador que quieres traspasar</p>
            <select name="players" id="players" onChange={this.changePlayer}>
              <option value="">Jugadores</option>
              {
                this.props.players.map(player => (
                  (player.teamName !== this.state.team) ?
                  <option key={player.id} name={player.name} value={player.id}>{player.name}</option>
                  : null
                  )
                )
              }
            </select>
            <p className="dinero">$ {costo[0].price}</p>
          </form>
          {
            this.state.transferResponse !== false && !this.state.transferResponse.message ? 
              <p>El traspaso se ha realizado con exito</p>
            : this.state.transferResponse !== false && this.state.transferResponse.message ?
            <p>{this.state.transferResponse.message}</p>
            : null
          }
        </div>
    }

    return (
      <div className="modal">
        <div className="modal_inner">
          <div className="contenido">
            {content}
          </div>
          <div className="buttons">

            <div className="cerrar">
              <button className="button" onClick={ this.props.toggle }>Cerrar</button>
            </div>
            {
              this.state.player !== "" && this.state.team !== "" ? 
                <div className="aceptar">
                  <input className="button" type="submit" onClick={ this.transferir } value="Aceptar" />
                </div>
              : null
            }

          </div>
        </div>
      </div>
    )
  }
}

export default Modal
