import React from 'react'
import styles from './DashboardHome.module.css'
import WithNavBar from '../../../hoc/WithNavbar'

function DashboardHome () {
  return (
    <div className={`row ${styles.mainRow}`}>
      <div
        style={{ backgroundColor: 'azure', height: '150px', top: '54px' }}
        className='col-3 sticky-top'
      >
        1
      </div>
      <div
        style={{ backgroundColor: 'azure', height: '1500px' }}
        className='col-5'
      >
        2
      </div>
      <div
        style={{ backgroundColor: 'azure', height: '150px', top: '54px' }}
        className='col-4 sticky-top'
      >
        3
      </div>
    </div>
  )
}

export default WithNavBar(DashboardHome)
