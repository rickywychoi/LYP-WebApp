import React from 'react'
import { Card, Button } from 'react-bootstrap'
import styles from './PostCard.module.css'

function PostCard () {
  return (
    <Card className={styles.body}>
      <img
        src=''
        alt='placeholder'
        className={styles.media}
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default PostCard
