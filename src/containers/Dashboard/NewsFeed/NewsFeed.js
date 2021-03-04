import React from 'react';
import PostCard from '../../../components/PostCard/PostCard';
// import styles from './NewsFeed.module.css'
import PostForm from '../../../components/PostForm/PostForm';
function NewsFeed() {
  return (
    <div>
      <PostForm />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
}

export default NewsFeed;
