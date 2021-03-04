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
import ProfileCard from '../../components/ProfileCard/ProfileCard'
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
            <Avatar style={{height: '100px', width: '100px'}}alt="Cindy Baker" className={classes.large} src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F998C113C5E5660FA29" />
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
