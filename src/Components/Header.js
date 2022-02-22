import React from 'react'
import './Header.css'

import { Navbar, Container } from 'react-bootstrap';
export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container maxWidth="sm" >
        <Navbar.Brand>
          IMSAS
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
