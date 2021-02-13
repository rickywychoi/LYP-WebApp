import React from 'react'
import styles from './DashboardHome.module.css'
import WithNavBar from '../../../hoc/WithNavbar/WithNavbar'
import LYPColumns from '../../../hoc/LYPColumns/LYPColumns'

import SideWidget from '../../../components/SideWidget/SideWidget'
import AdSection from '../../../components/AdSection/AdSection'

function DashboardHome () {
  return (
    <LYPColumns>
      <SideWidget />
      <div style={{ backgroundColor: 'azure', height: '1500px' }}>2</div>
      <AdSection />
    </LYPColumns>
  )
}

export default WithNavBar(DashboardHome)
