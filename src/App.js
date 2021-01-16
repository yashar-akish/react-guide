import React, { Component } from 'react';
import './App.css';

import Person from './Components/Person/Person';

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

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangeHandler(event, person.id)}
              name={person.name}
              age={person.age}
              key={person.id}
            />
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Let's Start</h1>

        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle list</button>

        {persons}
      </div>
    );
  }
}
export default App;