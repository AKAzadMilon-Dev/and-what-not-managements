import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap'

const Menu = () => {
  return (
        <Navbar bg="white" >
        <Container>
          <img src='/assets/images/logo.png'></img>
          <Nav className='menuitems'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#pricing">Agent</Nav.Link>
          </Nav>
          <button className='menuButton'>Contact Us</button>
        </Container>
      </Navbar>
  )
}

export default Menu