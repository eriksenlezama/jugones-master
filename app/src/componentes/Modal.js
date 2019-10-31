import React from 'react'
import './css/modal.css'

class Modal extends React.Component {

  state = {
    pichichis: [],
    orden: true,
    clicked: false
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
  
  
  toggleGoals = () => {
    this.setState({orden: !this.state.orden, clicked: true})
    this.state.pichichis.sort((a, b) => this.state.orden === true ? b.goals - a.goals : a.goals - b.goals)
  }

  render(){

    return (
      <div className="modal">
        <div className="modal_inner">
          <div className="contenido">
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
          </div>
          <div className="cerrar">
            <button className="button" onClick={ this.props.toggle }>Cerrar</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
