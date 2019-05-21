import React, { Component } from 'react'
import Cart from './Cart'
import { Col, Row } from 'react-bootstrap'

export default class Dashboard extends Component {
  state = {
    shirts: [],
    currentSize: '',
    quantity: 0
  }

  updateSize (size) {
    this.setState({
      currentSize: size
    })
  }

   addShirt = () => {
     let { currentSize, shirts, quantity } = this.state
     console.log(this.state)
     const newShirt = {
       teeName: 'Classic Tee',
       quantity: 1,
       price: '$75.00',
       size: currentSize
     }
     const shirtExists = shirts.filter(shirt => shirt.size === currentSize).length > 0
     if (currentSize === '') {
       alert('No size selected!')
     } else if (!shirtExists) {
       this.setState({
         shirts: [...shirts, newShirt],
         quantity: quantity + 1,
         currentSize
       })
     } else {
       const newShirts = shirts.map(shirt => {
         if (shirt.size === currentSize) {
           return { ...shirt, quantity: shirt.quantity + 1 }
         } else {
           return { ...shirt }
         }
       })
       console.log(newShirts)
       this.setState({ shirts: newShirts, quantity: quantity + 1, currentSize })
     }
   }
   render () {
     return (
      <>
        <Row className='header justify-content-end'>
          <img src={require('../assets/images/cart.png')}
            className='cart-logo'
            width='30'
            height='30'
            alt={this.state.quantity}>
          </img>
          <div className='nav-cart'>
            My Cart ( {this.state.quantity} )
            <div className='cart'> <Cart shirts={this.state.shirts}/></div>
          </div>
        </Row>
        <div className='store-container'>
          <Row>
            <Col xs='12' md='8' lg='6'>
              <div>
                <img
                  src={require('../assets/images/classic-tee.jpg')}
                  className='tee-image'
                  width="400"
                  height="600"
                  alt="" />
              </div>
            </Col>
            <Col xs='12' md='8' lg='6'>
              <div>
                <h2 className='title'> Classic Tee </h2>
                <p className='price'> $75.00 </p>
                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse ac aliquam dui. Donec commodo mattis metus ut euismod.
                Curabitur gravida dignissim nibh, nec volutpat enim feugiat sit amet.
                Morbi lectus urna, gravida in mi et, sodales dictum purus.
                Proin rhoncus ipsum vel euismod ullamcorper.</p>
              </div>
              <span className='show-size'>Size</span>
              <span className='shown-size'>{this.state.currentSize}</span>
              <div >
                <button className='size-buttons' onClick={() => this.updateSize('S')}>S</button>
                <button className='size-buttons' onClick={() => this.updateSize('M')}>M</button>
                <button className='size-buttons' onClick={() => this.updateSize('L')}>L</button>
              </div>
              <button className='add-cart' onClick={() => this.addShirt()}>add to cart</button>
            </Col>
          </Row>
        </div>
      </>
     )
   }
}
