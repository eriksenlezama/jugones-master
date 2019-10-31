import React from 'react'
import './css/modal.css'

const Modal = props => {

  return (
    <div className="modal">
      <div className="modal_inner">
        <div className="contenido">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat dapibus mi, quis lobortis arcu ultricies ut. Ut tincidunt blandit libero et scelerisque. Vestibulum ac sagittis tellus. Donec commodo odio et consequat ultrices. Duis volutpat odio velit. Nullam eget aliquet elit. Duis convallis blandit orci, sed volutpat turpis hendrerit non.
          </p>
          <p>
            Praesent vitae aliquam sapien. Donec in tempus dolor, vel maximus felis. Nam tincidunt nunc ex, in fringilla dui suscipit bibendum. In consectetur velit sed aliquam luctus. Fusce hendrerit non nunc ac euismod. In hac habitasse platea dictumst. Morbi dictum neque nec odio pellentesque, in tincidunt tortor iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur in tincidunt lorem.
          </p>
          <p>
            Ut eget porttitor odio. Aenean nisi tortor, imperdiet a purus ac, convallis semper leo. Donec sodales dictum tortor quis ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec non ex pellentesque, laoreet purus sit amet, blandit sapien. Vivamus in ornare dolor. Curabitur tincidunt malesuada posuere.
          </p>
        </div>
        <div className="cerrar">
          <button className="button" onClick={ props.toggle }>Cerrar</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
