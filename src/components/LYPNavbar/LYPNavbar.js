import React, { useState, useEffect, Fragment } from 'react'
import { useHistory, Link } from 'react-router-dom'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Image,
  OverlayTrigger,
  Popover
} from 'react-bootstrap'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import moment from 'moment'
import styles from './LYPNavbar.module.css'
import logo from '../../assets/images/LYP-Logo-no-link.png'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'

const LYPNavbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const history = useHistory()
  const [query, setQuery] = useState('')
  const [notifications, setNotifications] = useState([
    {
      message: 'Notification One Message - home',
      createdDate: new Date(),
      linkTo: '/home'
    },
    {
      message: 'Notification Two Message - user',
      createdDate: new Date(),
      linkTo: '/user'
    },
    {
      message: 'Notification Three Message - group',
      createdDate: new Date(),
      linkTo: '/group'
    }
  ])
  let notificationsLength = notifications.length

  // useEffect(() => {
  //   axios
  //     .get(`/api/notification/receive`)
  //     .then(res => {
  //       setNotifications(res)
  //     })
  //     .catch(e => console.error(e))
  // }, [])

  const handleInputChange = e => {
    e.preventDefault()
    setQuery(e.target.value)
  }

  const handleSubmit = target => {
    if (target.charCode === 13) {
      history.push(`/search?q=${query}`)
    }
  }

  const NotificationList = (
    <Popover id='popover-positioned-bottom' style={{ zIndex: '9999' }}>
      <Popover.Content>
        {notifications.map(({ message, createdDate, linkTo }, idx) => {
          if (notificationsLength === idx + 1) {
            return (
              <Link to={linkTo} className={styles.notificationItemLink}>
                <div style={{ padding: '10px 5px 0 5px' }}>
                  <p>{message}</p>
                  <p>{moment(createdDate.getTime()).calendar()}</p>
                </div>
              </Link>
            )
          } else {
            return (
              <Link to={linkTo} className={styles.notificationItemLink}>
                <div className={styles.notificationItem}>
                  <p>{message}</p>
                  <p>{moment(createdDate.getTime()).calendar()}</p>
                </div>
              </Link>
            )
          }
        })}
      </Popover.Content>
    </Popover>
  )

  const authLink = (
    <Nav className={styles.menus}>
      <Nav.Link>
        <OverlayTrigger
          trigger='click'
          placement='bottom'
          overlay={NotificationList}
        >
          <NotificationsNoneIcon />
        </OverlayTrigger>
      </Nav.Link>
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
