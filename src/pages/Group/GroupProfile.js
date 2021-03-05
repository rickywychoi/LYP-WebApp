import React from 'react'
import styles from './GroupProfile.module.css'

import LYPColumns from '../../hoc/LYPColumns/LYPColumns'
import SideWidget from '../../containers/SideWidget/SideWidget'
import AdSection from '../../containers/AdSection/AdSection'
import FriendDropDown from '../../components/Search/FriendDropDown'
import CardV2 from '../../components/layout/CardV2'

function GroupProfile() {
  return (
    <>
      <LYPColumns>
      <SideWidget />
      <div className={styles.container}>
        <br/>
        <FriendDropDown />
          <CardV2 />
        <br/>
          <CardV2 />
      </div>
      <AdSection />
    </LYPColumns>
    </>
  )
}

export default GroupProfile;
