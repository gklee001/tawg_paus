import React from "react";
import button from 'react-bootstrap/button'
import { render } from "react-dom";


function TarotCard(props) {

    return (
        <button onClick={() => props.updateScore(props.id)} className="card">
            <div className="img-container">
                <img src={props.image} />
            </div>
            <div className="content">
                <strong>ID: </strong> {props.id}
            </div>
        </button>
    )


}

export default TarotCard;