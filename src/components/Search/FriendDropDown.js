import React from 'react'
import {filter} from '../Search/utils'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function FriendDropDown() {
    return (
        <Form>
            <Row>
                <Col sm={1}>
                </Col>
                <Col sm={7}>
                    <Form.Group controlId="friendSearch">
                        <Form.Control type="friend_search" placeholder="Invite some friends" />
                    </Form.Group>
                </Col>
                <Col sm={4}>
                    <Button variant="primary" type="submit"> Submit </Button>
                </Col>
            </Row>
        </Form>
    )
}
export default FriendDropDown;
