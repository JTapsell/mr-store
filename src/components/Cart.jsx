import React, { Component } from 'react'

export default class Cart extends Component {
  state = {

  }
  render () {
    return (
      <div>
        <ul className='cart-list-items'>
          {this.props.shirts.map(shirt =>
            <li key={shirt.size}>
            <img src={require("../assets/images/classic-tee.jpg")}
              className='cart-image'
              width='120' height='170' alt=''/>
              <div className='cart-details'>
                <p>{shirt.teeName}</p>
                <p>{shirt.quantity} x <b>$75</b></p>
                <p>Size {shirt.size}</p>  
              </div>     
            </li>)}
        </ul>
      </div>
    )
  }
}
