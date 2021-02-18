import React from 'react'
import { connect } from 'react-redux'
import styles from './UserProfile.module.css'
import WithNavBar from '../../hoc/WithNavbar/WithNavbar'
import ProfileHeader from './ProfileHeader'


function UserProfile() {
  return (
    <>
      <ProfileHeader name = "Brian"/>
    </>
  )
}

export default WithNavBar(UserProfile)