import React, { Component } from 'react';
import { render } from '@testing-library/react';


function Score(props) {
    return (
        <div>
            <div class="score">Score: {props.score} </div>
            <div class="tscore">Top Score: {props.tScore}</div>
        </div>

    )
}

export default Score;