import React from 'react'
import CardV2 from '../layout/CardV2'
import styles from './UserGroup.module.css'
import Typography from '@material-ui/core/Typography'

function UserGroup () {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.grid_container}>
          <div className={styles.usergroup_container}>
            <Typography gutterBottom variant='h5' component='h2'>
              Your Group
            </Typography>
            <CardV2 />
          </div>
          <div className={styles.empty_container}>
            <br></br>
          </div>
          <div className={styles.recommendation_container}>
            <Typography gutterBottom variant='h5' component='h2'>
              Recommended Group
            </Typography>
            <CardV2 />
          </div>
        </div>
      </div>
    </>
  )
}

export default UserGroup
