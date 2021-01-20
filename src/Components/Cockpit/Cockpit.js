import React from 'react';
import styled from 'styled-components';
import classes from './Cockpit.css';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;
const cockpit = (props) => {
  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push('red')
  }
  if (props.persons.length <= 1) {
    assignedClasses.push('bold')
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Let's Start</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>

      <StyledButton alt={props.showPersons} onClick={props.clicked}>Toggle list</StyledButton>

    </div>
  );
};

export default cockpit;