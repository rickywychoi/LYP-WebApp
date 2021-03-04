import React, { useState }  from 'react'
import { makeStyles } from '@material-ui/core/styles';
import WithNavBar from '../../hoc/WithNavbar/WithNavbar'
import Avatar from '@material-ui/core/Avatar';
import styles from './UserProfile.module.css'
import Nav from 'react-bootstrap/Nav'

import UserMedia from '../../components/UserNavigation/UserMedia'
import UserFriends from '../../components/UserNavigation/UserFriends'
import UserTimeline from '../../components/UserNavigation/UserTimeline'
import UserGroups from '../../components/UserNavigation/UserGroups'
import ProfileInformation from '../../components/layout/ProfileInformation'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function UserProfile() {
    const classes = useStyles();

    const [nav, setNav] = useState("timeline");

    let navHandler;
    
    const navigationTool = () => {
      if(nav === 'timeline'){
        navHandler = <UserTimeline/>
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

        <div className={styles.grid_container}>
          <div className={styles.avatar_container}>
            <Avatar style={{height: '100px', width: '100px'}}alt="Tyler Lee" className={classes.large} src="https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg" />
          </div>

          <div className={styles.name_container}>
            <h1> Tyler Lee</h1>
          </div>
          <div className={styles.user_follower}>
            followers
          </div>
          <div className={styles.user_information}>
            <ProfileInformation/>
          </div>
        </div>

        <div className={styles.grid_child}></div>
      </div>

      <br></br>

      <div className={styles.wrapper}>
        <Nav justify variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link onClick={() => setNav('timeline')}>Timeline</Nav.Link>
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
      {
        navigationTool()
      }
    </div>
    </>
  )
};

export default WithNavBar(UserProfile);
