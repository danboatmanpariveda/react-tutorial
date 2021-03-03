import React from 'react';
import './../index.css';

export default function Square(props) {
    return (
        <button className="square" style={props.style} onClick={props.onClick}>
            {props.value}
        </button>
    );
}
