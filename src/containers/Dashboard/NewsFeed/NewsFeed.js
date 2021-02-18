import React from 'react'
import PostCard from '../../../components/PostCard/PostCard'
import styles from './NewsFeed.module.css'

function NewsFeed () {
  return (
    <div className={styles.body}>
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  )
}

export default NewsFeed
