import React from 'react'
import styles from './UserTimeline.module.css'
import Post from '../Post/Post'
import PostV2 from '../Post/PostV2'

function UserTimeline () {
  return (
    <div className={styles.container}>
      <div className={styles.post_container}>
        <div className={styles.posts}>
          <PostV2 />
          <PostV2 />
        </div>
      </div>
    </div>
  )
}

export default UserTimeline
