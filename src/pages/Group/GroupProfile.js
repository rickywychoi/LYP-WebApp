import React from 'react'
import styles from './GroupProfile.module.css'

import WithNavBar from '../../hoc/WithNavbar/WithNavbar'
import LYPColumns from '../../hoc/LYPColumns/LYPColumns'
import SideWidget from '../../components/SideWidget/SideWidget'
import AdSection from '../../components/AdSection/AdSection'
import FriendDropDown from '../../components/Search/FriendDropDown'

function GroupProfile() {
  return (
    <>
      <LYPColumns>
      <SideWidget />
      
      <div style={{ backgroundColor: 'azure', height: '1500em' }}>
          <FriendDropDown />
          <div class="dropdown">
          <button onclick="myFunction()" class="dropbtn">Dropdown</button>
          <div id="myDropdown" class="dropdown-content">
            <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()"></input>
            
            <div>
              
            </div>
          </div>
      </div>
      </div>
      <AdSection />
    </LYPColumns>
    </>
  )
}

export default WithNavBar(GroupProfile);