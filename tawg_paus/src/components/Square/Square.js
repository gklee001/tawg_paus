import React from "react";


function TarotCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img src={props.image} />
            </div>
            <div className="content">
                <strong>ID: </strong> {props.id}
            </div>
        </div>
    )
}

export default TarotCard;