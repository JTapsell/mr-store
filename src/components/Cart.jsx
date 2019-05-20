import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

export default class Cart extends Component {
  state = {

  }
  render () {
    return (
      <div>
        <ul className='cart-list-items'>
          {this.props.shirts.map(shirt =>
            <li key={shirt.size}>
            <Col><img src={require("../assets/images/classic-tee.jpg")}
              width='80' height='100' alt=''/></Col>
              <Col>{shirt.teeName}
              <br/>
              {shirt.quantity} x $75
              <br/>
              Size {shirt.size}
              <br/>
              </Col>
            </li>)}
        </ul>
      </div>
    )
  }
}
