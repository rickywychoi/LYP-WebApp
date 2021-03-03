import React from 'react';
import FriendDropDown from '../Search/FriendDropDown'
import styles from './UserMedia.module.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'


function UserMedia() {
    return(
        <div className={styles.container}>

            <div className={styles.empty_div}></div>
            <div className={styles.form_container}>
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} />
                        <Button variant="outline-primary">Share</Button>
                        <Form.File/>
                    </Form.Group>
                </Form>
            </div>
            <div className={styles.empty_div}></div>
            <div className={styles.posts_container}>
                photo gallery container
            </div>
        </div>
        
    )
};

export default UserMedia;