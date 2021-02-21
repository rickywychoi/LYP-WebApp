import React from 'react'
import styles from './LYPColumns.module.css'

function LYPColumns (props) {
  const { children } = props

  return (
    <div className={`row ${styles.mainRow}`}>
      <div className={`col-3 ${styles.sideLeft}`}>
        { React.cloneElement(children[0], {className: `sticky-top ${styles.sideWrapee}`}) }
      </div>
      <div className={`col-6 ${styles.center}`}>
        { children[1] }
      </div>
      <div className={`col-3 ${styles.sideRight}`}>
        { React.cloneElement(children[2], {className: `sticky-top ${styles.sideWrapee}`}) }
      </div>
    </div>
  )
}

export default LYPColumns
