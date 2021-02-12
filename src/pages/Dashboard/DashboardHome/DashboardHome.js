import React from 'react'
import styles from './DashboardHome.module.css'
import WithNavBar from '../../../hoc/WithNavbar'

function DashboardHome() {
  return (
    <div className="container">
      <h1>Dashboard Home</h1>
    </div>
  )
}

export default WithNavBar(DashboardHome)