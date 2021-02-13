import React from 'react'
import styles from './DashboardHome.module.css'
import WithNavBar from '../../../hoc/WithNavbar/WithNavbar'
import LYPColumns from '../../../hoc/LYPColumns/LYPColumns'

function DashboardHome () {
  return (
    <LYPColumns>
      <div style={{backgroundColor: 'azure', height: '150px'}}>
        1
      </div>
      <div style={{backgroundColor: 'azure', height: '1500px'}}>
        2
      </div>
      <div style={{backgroundColor: 'azure', height: '150px'}}>
        3
      </div>
    </LYPColumns>
  )
}

export default WithNavBar(DashboardHome)
