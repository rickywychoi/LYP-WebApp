import React from 'react'
import styles from './UserTimeline.module.css'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

function UserTimeline() {
    const classes = useStyles();
    return(
        <div className={styles.container}>

        </div>
    )
};

export default UserTimeline;
