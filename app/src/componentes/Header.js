import React from 'react'
import Modal from './Modal'
import './css/header.css'

class Header extends React.Component {

  state = {
    showModal: false
  }
  
  toggleModal = () => {
    console.log("toggle")
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
        {this.state.showModal ? <Modal toggle={this.toggleModal} /> : null}
      </header>
    )
  }
}

export default Header
