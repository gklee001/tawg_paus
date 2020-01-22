import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'



class Headbar extends React.Component {
    render() {
        return (
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Clickity Game</Navbar.Brand>
                <Nav className="mr-auto">
                    <div class="score">Score: </div>
                    <div class="score">Top Score: </div>

                </Nav>
            </Navbar >

        )


    }
};

export default Headbar;