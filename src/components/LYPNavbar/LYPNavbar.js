import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Image } from 'react-bootstrap'
import styles from './LYPNavbar.module.css'
import logo from '../../assets/images/LYP-Logo-no-link.png'

function LYPNavbar () {
  const [query, setQuery] = useState('')
  const history = useHistory()

  const handleChange = e => {
    e.preventDefault()
    setQuery(e.target.value)
  }

  const handleSubmit = (target) => {
    if (target.charCode === 13) {
      history.push(`/search/${query}`)
    }
  }

  return (
    <div className={`sticky-top`}>
      <Navbar bg='light' variant='light' className={styles.navbar}>
        <Form inline>
          <FormControl
            type='text'
            placeholder='Search'
            className='mr-sm-2'
            onChange={handleChange}
            onKeyPress={handleSubmit}
          />
        </Form>
        <Navbar.Brand href='/' className={styles.brand}>
          <Image src={logo} className={styles.logo} />
        </Navbar.Brand>
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
