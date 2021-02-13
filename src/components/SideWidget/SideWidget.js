import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import styles from './SideWidget.module.css'
import { useHistory } from 'react-router-dom'

function SideWidget (props) {
  console.log(props)

  const history = useHistory()
  
  return (
    <div {...props}>
      <ButtonGroup vertical className={styles.body}>
        <Button variant='outline-success' className={styles.menuItem} onClick={() => history.push('/groups')}>
          Groups
        </Button>
        <Button variant='outline-success' className={styles.menuItem}>
          Bill Tracker (Coming)
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default SideWidget
