import React from 'react'
// import styles from './DashboardHome.module.css'
import LYPColumns from '../../../hoc/LYPColumns/LYPColumns'

import SideWidget from '../../../containers/SideWidget/SideWidget'
import AdSection from '../../../containers/AdSection/AdSection'

function DashboardHome () {
  return (
    <LYPColumns>
      <SideWidget />
      <div style={{ backgroundColor: 'azure', height: '1500px' }}>2</div>
      <AdSection />
    </LYPColumns>
  )
}

export default DashboardHome
