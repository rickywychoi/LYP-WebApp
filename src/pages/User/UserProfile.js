import React from 'react'
import WithNavBar from '../../hoc/WithNavbar/WithNavbar'
import LYPColumns from '../../hoc/LYPColumns/LYPColumns'
import Image from 'react-bootstrap/Image'
import Avatar from 'react-avatar';
import styles from './UserProfile.module.css'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";


function UserProfile() {
  return (
    <>
    <div className={styles.sample}>
      <div className={styles.wrapper}>
        <Avatar name="Tyler Lee" />
      </div>
      <br></br>
      <div className={styles.wrapper}>
        <Nav justify variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Timeline</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Friends</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">Groups</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-4">Media</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
    </>
  )
}

export default WithNavBar(UserProfile);