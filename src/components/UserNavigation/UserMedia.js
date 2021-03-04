import React,  {useState, useEffect} from 'react';
import FriendDropDown from '../Search/FriendDropDown'
import styles from './UserMedia.module.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import RUG from 'react-upload-gallery'
import ProfileCard from '../../components/ProfileCard/ProfileCard'


function UserMedia() {
    

    return(
        <div className={styles.container}>

            <div className={styles.empty_div}></div>
            <div className={styles.grid_container}>
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <div className={styles.textarea}>
                            <Form.Control as="textarea" rows={3} />
                        </div>
                        <div className={styles.upload_file}>     
                            <Button variant="outline-primary">Share</Button>
                        </div>
                        <div className={styles.share}>
                        {/* <RUG
                            action="/api/upload" // upload route
                            source={response => response.source} // response image source
                        /> */}
                        </div>
                        
                    </Form.Group>
                </Form>
            </div>
            <div className={styles.empty_div}></div>
            <div className={styles.posts_container}>
            </div>
        </div>
        
    )
};

export default UserMedia;