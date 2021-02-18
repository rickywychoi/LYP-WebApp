import React, { useEffect, useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ProfileImageProcessor from '../../components/ProfileImageProcessor/ProfileImageProcessor'
import useQuery from '../../util/useQuery'
import constants from '../../config/constants'
import styles from './SearchResult.module.css'

function SearchResult () {
  let query = useQuery('q')
  const [usersResult, setUsersResult] = useState([])
  const [groupsResult, setGroupsResult] = useState([])

  useEffect(() => {
    axios
      .get(`${constants.BACKEND_BASE_URL}/api/search/${query}`)
      .then(({ data }) => {
        setUsersResult(data.users)
        setGroupsResult(data.groups)
      })
      .catch(error => console.log(error))
  }, [query])

  const profileImgStyle = {
    width: '54px',
    height: '54px',
    padding: '0'
  }

  const noResult = <div>There is no result.</div>

  const usersSection = (
    <Card className={styles.usersSection}>
      <Card.Header>Users</Card.Header>
      <Card.Body>
        {usersResult.length > 0 ? (
          <ListGroup>
            {usersResult.map(
              ({ address, email, firstName, lastName, profilePicUrl, _id }) => {
                return (
                  <ListGroup.Item key={_id} className={styles.resultItem}>
                    <Link to={`/profile/${email}`}>
                      <ProfileImageProcessor
                        src={profilePicUrl}
                        id={_id}
                        style={profileImgStyle}
                      />
                    </Link>
                    <div className={styles.description}>
                      <p className={styles.name}>
                        {firstName} {lastName}
                      </p>
                      {address ? <p>{address}</p> : null}
                    </div>
                  </ListGroup.Item>
                )
              }
            )}
          </ListGroup>
        ) : (
          noResult
        )}
      </Card.Body>
    </Card>
  )

  const groupsSection = (
    <Card>
      <Card.Header>Groups</Card.Header>
      <Card.Body>
        {groupsResult.length > 0 ? (
          <ListGroup>
            {groupsResult.map(
              ({
                isPublic,
                isVisible,
                groupName,
                description,
                numOfUsers,
                groupPhotoUrl,
                _id
              }) => {
                return (
                  <ListGroup.Item key={_id} className={styles.resultItem}>
                    <Link to={`/groupprofile/${groupName}`}>
                      <ProfileImageProcessor
                        src={groupPhotoUrl}
                        id={_id}
                        style={profileImgStyle}
                      />
                    </Link>
                    <div className={styles.description}>
                      <p className={styles.name}>{groupName}</p>
                      <p className={styles.name}>{description}</p>
                      <p className={styles.name}>
                        There {numOfUsers > 1 ? 'are' : 'is'} {numOfUsers}{' '}
                        member
                        {numOfUsers > 1 ? 's' : ''} in this group.
                      </p>
                    </div>
                  </ListGroup.Item>
                )
              }
            )}
          </ListGroup>
        ) : (
          noResult
        )}
      </Card.Body>
    </Card>
  )

  return (
    <div className={`container ${styles.body}`}>
      <h3>
        <span style={{ color: '#969696' }}>Search results for: </span>
        {query}
      </h3>
      <hr />
      {usersSection}
      {groupsSection}
    </div>
  )
}

export default SearchResult