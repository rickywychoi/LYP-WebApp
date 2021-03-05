import React from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';


function CardV2() {
    return (
    <MDBCol style={{ maxWidth: "25rem" }}>
      <MDBCard>
        {/* <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
          waves /> */}
        <MDBCardBody>
          <MDBCardTitle>Group 1</MDBCardTitle>
          <MDBCardText>Love Your Planet is a social media platform for connecting people in the world who love nature, collaborating, and having voices towards sustainable living.</MDBCardText>
        </MDBCardBody>
      </MDBCard>
      <br>
      </br>

      <MDBCard>
        {/* <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
          waves /> */}
        <MDBCardBody>
          <MDBCardTitle>Group2</MDBCardTitle>
          <MDBCardText>Love Your Planet is a social media platform for connecting people in the world who love nature, collaborating, and having voices towards sustainable living..</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    )
}

export default CardV2;