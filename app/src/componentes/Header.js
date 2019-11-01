import React from 'react'
import Modal from './Modal'
import './css/header.css'

class Header extends React.Component {

  state = {
    showModal: false,
    modal: ""
  }
  
  toggleModal = modal => {
    console.log(modal)
    this.setState({showModal: !this.state.showModal, modal})
  }

  render() {
    return (
      <header className="App-heading App-flex">
        <button 
          className="button pichichis"
          onClick={() => this.toggleModal("pichichis")}
        >
          Pichichis
        </button>
        <button 
          className="button traspasos"
          onClick={() => this.toggleModal("traspasos")}
        >
          Traspasos
        </button>
        {
          this.state.showModal ? 
            <Modal 
              modal={this.state.modal} 
              players={this.props.players} 
              teams={this.props.teams} 
              pichichis={this.props.pichichis} 
              toggle={() => this.toggleModal("")}
            /> 
          : null
        }
      </header>
    )
  }
}

export default Header
