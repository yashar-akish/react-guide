import React from 'react';
// import styled from 'styled-components';

//import './person.css';
import classes from './Person.module.css';

// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid yellow;
//     box-shadow: 0 2px 3px gold;
//     padding: 16px;
//     text-align: center;
//     border-radius: 7px;
//     color: blue;

//     @media(min-width:500px){
//       width: 450px;
//     }
//     `
const person = (props) => {

  return (
    //<div className="Person" style={style}>
    // <StyledDiv>
    <div className={classes.Person}>
      <p onClick={props.click} > I'm  {props.name} and I'm {props.age} years old</p>
      <p> {props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>

    // </StyledDiv>
    //</div>
  )
};

export default person;