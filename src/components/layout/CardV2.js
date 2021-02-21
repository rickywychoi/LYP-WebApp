import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import CardColumns from 'react-bootstrap/CardColumns'


function CardV2() {
    return (
        <CardDeck>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    1st Card
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <a href="#"> Click </a>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    2nd Card
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <a href="#">Click </a>
                </Card.Footer>
            </Card>
            
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    3rd card
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <a href="#">Click </a>
                </Card.Footer>
            </Card>
        </CardDeck>
    )
}

export default CardV2;