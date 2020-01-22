import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

class Secondhead extends React.Component {
    render() {
        return (
            <Jumbotron fluid>
                <Container>
                    <h1>Clicky Game!</h1>
                    <p>
                        Click on an image to earn points, but don't click on any more than once!
    </p>
                </Container>
            </Jumbotron>
        )
    }
}
export default Secondhead;