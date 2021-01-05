import React, { Component } from 'react';
//import React, { useState } from 'react';
import './App.css';

import Person from './Components/Person/Person';



/**
 *      using class and state:
 */

class App extends Component {

    state = {
        persons: [
            { id: '1', name: 'Max', age: 28 },
            { id: '2', name: 'Monica', age: 22 },
            { id: '3', name: 'Jane', age: 27 },
        ],
        otherState: 'some other value',
        showPersons: false
    };

    // switchNameHandler = () => {
    switchNameHandler = (newName) => {
        //console.log('was clicked')
        // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
        this.setState({
            persons: [
                // { name: 'Maxi!', age: 22 },
                { name: newName, age: 22 },
                { name: 'Elena', age: 20 },
                { name: 'Jane', age: 21 },
            ],
        })
    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                // { name: 'Maxi!', age: 22 },
                { name: "Max", age: 22 },
                { name: event.target.value, age: 20 },
                { name: 'Jane', age: 18 },
            ],
        })
    }

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons;
        //const persons = this.state.persons.slice();
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
                            name={person.name}
                            age={person.age}
                            key={person.id}
                        />
                    })}
                    {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        // click={this.switchNameHandler}>My hobbies: racing</Person>
                        click={this.switchNameHandler.bind(this, 'Max!!')}
                        changed={this.nameChangeHandler}>My hobbies: racing</Person>
                    <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> */}
                </div>
            );
        }
        return (
            <div className="App">
                <h1>Let's Start</h1>
                {/* <button onClick={this.switchNameHandler}>Switch Name</button> */}
                {/* <button onClick={this.switchNameHandler.bind(this, 'Maximilian!!')}>Switch Name</button> */}
                {/* <button
                    style={style}
                    onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name
                </button> */}
                <button
                    style={style}
                    onClick={this.togglePersonHandler}>toggle list</button>
                {/* {
                    this.state.showPersons === true ?
                        <div>
                            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                            <Person
                                name={this.state.persons[1].name}
                                age={this.state.persons[1].age}
                                // click={this.switchNameHandler}>My hobbies: racing</Person>
                                click={this.switchNameHandler.bind(this, 'Max!!')}
                                changed={this.nameChangeHandler}>My hobbies: racing</Person>
                            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
                        </div> : null
                } */}

                {persons}
            </div>
        );

        // return (
        //     <div className="App">
        //         <h1>Let's Start</h1>
        //         <button>Switch Name</button>
        //         <Person name='Max' age='30' />
        //         <Person name='Manu' age='24'> - My hobbies: racing</Person>
        //         <Person name='Stephanie' age='19' />
        //     </div>
        // );

        /* return (React.createElement('div', null, 'h1', 'createElement')); */

        /*return (React.createElement('div', null, React.createElement('h1', null, 'nested createElement')));*/

        /*return (React.createElement('div', {className: 'App' }, React.createElement('h1', null, 'nested createElement with css')));*/
    }
}
export default App;


/**
 *      using React Hook:
 */

// const App = props => {

//     const [personsState, setPersonsState] = useState({
//         persons: [
//             { name: 'Max', age: 28 },
//             { name: 'Monica', age: 22 },
//             { name: 'Jane', age: 27 },
//         ],
//         //otherState: 'some other value'
//     });

//     //useState({ otherState: 'some other value' })
//     const [otherState, setOtherState] = useState('some other value')

//     console.log(personsState, otherState);

//     const switchNameHandler = () => {
//         //console.log('was clicked')
//         // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
//         setPersonsState({
//             persons: [
//                 { name: 'Jason', age: 22 },
//                 { name: 'Elena', age: 20 },
//                 { name: 'Jane', age: 21 },
//             ],
//             //otherState: personsState.otherState
//         })
//     }

//     return (
//         <div className="App">
//             <h1>Let's Start</h1>
//             <button onClick={switchNameHandler}>Switch Name</button>
//             <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//             <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> - My hobbies: racing</Person>
//             <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//         </div>
//     );

//     // return (
//     //     <div className="App">
//     //         <h1>Let's Start</h1>
//     //         <button>Switch Name</button>
//     //         <Person name='Max' age='30' />
//     //         <Person name='Manu' age='24'> - My hobbies: racing</Person>
//     //         <Person name='Stephanie' age='19' />
//     //     </div>
//     // );

//     /* return (React.createElement('div', null, 'h1', 'createElement')); */

//     /*return (React.createElement('div', null, React.createElement('h1', null, 'nested createElement')));*/

//     /*return (React.createElement('div', {className: 'App' }, React.createElement('h1', null, 'nested createElement with css')));*/

// }

// export default App;
