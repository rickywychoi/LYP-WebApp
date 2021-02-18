import React from 'react'
import styles from './ProfileHeader.module.css'
import DefaultBackground from "../../assets/images/background.png"
import DefaultProfile from "../../assets/images/profile.png"
import { Switch, Route, Link, useParams } from "react-router-dom";

function ProfileHeader(props) {
    const { email: emailParam ="" } = useParams();
    console.log(props);
  return ( 
    <>
      <div className={styles.row}>
        <div className="offset-md-1 col-md-8">
            <div className = {styles.profileBlock}>
                <div style = {{
                    backgroundImage: `url(${DefaultBackground})`,
                    backgroundSize: "cover",
                }}
                className = {`${styles.profileBlockThumb} ${styles.profileCoverContainer}`}/>
                <div className = {styles.profileFloat}>
                  <div className = {styles.profileImg}>
                    <img src = {DefaultProfile} alt = "Default Profile" className = {styles.profileImgElement}/>
                  </div>
              </div>
            </div>
            <div className={styles.profileMenu}> 
            <ul className = {styles.profileMenuUL}>
                <li className = {styles.profileMenuList}>
                    <Link to={`/${emailParam}`} className = {styles.profileMenuA}>Timeline</Link>
                </li>
                <li className = {styles.profileMenuList}>
                    <Link to={`/${emailParam}/about`} className = {styles.profileMenuA}>About</Link>
                </li>
                <li className = {styles.profileMenuList}>
                    <Link to={`/${emailParam}/friends`} className = {styles.profileMenuA}>Friends</Link>
                </li>
                <li className = {styles.profileMenuList}>
                    <Link to={`/${emailParam}/groups`} className = {styles.profileMenuA}>Groups</Link>
                </li>
                <li className = {styles.profileMenuList}>
                    <Link to={`/${emailParam}/media`} className = {styles.profileMenuA}>Media</Link>
                </li>
            </ul>
            </div>
            <div className = {styles.row}>
                <h2 className = {styles.test}>Posts Area</h2>
            </div>
        </div>
      </div>
    </>
  )
}

export default ProfileHeader;