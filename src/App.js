import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

import Person from './Components/Person/Person';


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
class App extends Component {

  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Monica', age: 22 },
      { id: 3, name: 'Jane', age: 27 },
    ],
    otherState: 'some other value',
    showPersons: false
  };
  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangeHandler(event, person.id)}
            />
          })}
        </div>
      );
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }
    return (
      <div className="App">
        <h1>Let's Start</h1>
        <p className={classes.join(' ')}>This is really working</p>

        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandler}>Toggle list</StyledButton>

        {persons}
      </div>
    );
  }
}
export default App;