import React from 'react'
import Modal from './Modal'
import './css/header.css'

class Header extends React.Component {

  state = {
    showModal: false
  }
  
  toggleModal = () => {
    this.setState({showModal: !this.state.showModal})
  }

  render() {
    return (
      <header className="App-heading App-flex">
        <button 
          className="button pichichis"
          onClick={this.toggleModal}
        >
          Pichichis
        </button>
        {this.state.showModal ? <Modal players={this.props.players} pichichis={this.props.pichichis} toggle={this.toggleModal} /> : null}
      </header>
    )
  }
}

export default Header
