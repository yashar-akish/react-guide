import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I'm  {props.name} and I'm {props.age} years old {props.children}</p>
        </div>
    )
    //return <p>I'm a person! and I'm {Math.floor(Math.random() * 30)} years old</p>
};

export default person;