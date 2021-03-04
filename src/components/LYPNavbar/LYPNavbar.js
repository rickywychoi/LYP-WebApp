import React, { useState, Fragment, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Image,
  Button,
  Overlay,
  OverlayTrigger,
  Popover
} from 'react-bootstrap'
import styles from './LYPNavbar.module.css'
import logo from '../../assets/images/LYP-Logo-no-link.png'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'
import NotificationList from '../../containers/NotificationList/NotificationList'

const LYPNavbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const ref = useRef(null)
  const history = useHistory()
  const [query, setQuery] = useState('')
  const [show, setShow] = useState(false)
  const [target, setTarget] = useState(null)

  const handleInputChange = e => {
    e.preventDefault()
    setQuery(e.target.value)
  }

  const handleSubmit = target => {
    if (target.charCode === 13) {
      history.push(`/search?q=${query}`)
    }
  }

  const handleClick = e => {
    setShow(!show)
    setTarget(e.target)
  }

  const authLink = (
    <Nav className={styles.menus}>
      {/* <Button variant='success' onClick={handleClick}>
        Click me to see
      </Button>
      <Overlay
        show={show}
        target={target}
        placement='bottom'
        container={ref.current}
      >
        <NotificationList />
        <Popover id='popover-positioned-bottom'>
          <Popover.Content>
            And here's some <strong>amazing</strong> content. It's very
            engaging. right?
          </Popover.Content>
        </Popover>
      </Overlay> */}
      <OverlayTrigger trigger='click' placement='bottom' overlay={NotificationList}>
        <Button variant='success'>Noti</Button>
      </OverlayTrigger>
      <Nav.Link href='#home'>Home</Nav.Link>
      <Nav.Link href='#features'>Features</Nav.Link>
      <Nav.Link onClick={logout}>Logout</Nav.Link>
    </Nav>
  )

  return (
    <div className={`sticky-top`}>
      <Navbar bg='light' variant='light' className={styles.navbar}>
        <Form
          inline
          onSubmit={e => {
            e.preventDefault()
            return false
          }}
        >
          <FormControl
            type='text'
            placeholder='Search'
            className={
              !loading && isAuthenticated ? 'mr-sm-2' : `${styles.hide}`
            }
            onChange={handleInputChange}
            onKeyPress={handleSubmit}
          />
        </Form>
        <Navbar.Brand href='/home' className={styles.brand}>
          <Image src={logo} className={styles.logo} />
        </Navbar.Brand>
        {!loading && (
          <Fragment>
            {isAuthenticated ? authLink : <Fragment></Fragment>}
          </Fragment>
        )}
      </Navbar>
    </div>
  )
}

LYPNavbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(LYPNavbar)
