import React, { useState }  from 'react'
import WithNavBar from '../../hoc/WithNavbar/WithNavbar'
import Image from 'react-bootstrap/Image'
import Avatar from 'react-avatar'
import styles from './UserProfile.module.css'
import Nav from 'react-bootstrap/Nav'
import UserMedia from '../../components/UserNavigation/UserMedia'
import UserFriends from '../../components/UserNavigation/UserFriends'
import UserTimeline from '../../components/UserNavigation/UserTimeline'
import UserAbout from '../../components/UserNavigation/UserAbout'
import UserGroups from '../../components/UserNavigation/UserGroups'

function UserProfile() {
    const [nav, setNav] = useState("about");
    let navHandler;
    const navigationTool = () => {
      if(nav === 'timeline'){
        navHandler = <UserTimeline/>
      }else if (nav === 'about') {
        navHandler = <UserAbout/>
      } else if (nav === 'friends') {
        navHandler = <UserFriends/>
      } else if (nav === 'groups') {
        navHandler = <UserGroups/>
      } else {
        navHandler = <UserMedia/>
      }
      return navHandler;
    }

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
            <Nav.Link onClick={() => setNav('timeline')}>Timeline</Nav.Link>
            
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setNav('about')}>About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setNav('friends')}>Friends</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setNav('groups')}>Groups</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setNav('media')}>Media</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      {navigationTool()}
    </div>
    </>
  )
};

export default WithNavBar(UserProfile);