import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import styles from './LYPNavbar.module.css'

function LYPNavbar () {
  return (
    <div className={`sticky-top ${styles.body}`}>
      <Navbar bg='light' variant='light' className={styles.navbar}>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-success'>Search</Button>
        </Form>
        <Navbar.Brand href='#home' className={styles.brand}>Navbar</Navbar.Brand>
        <Nav className={styles.menus}>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#features'>Features</Nav.Link>
          <Nav.Link href='#pricing'>Pricing</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
}

export default LYPNavbar
