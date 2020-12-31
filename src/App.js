import React, { Component } from 'react';
import './App.css';

import Person from './Components/Person/Person';


class App extends Component {

    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Monica', age: 22 },
            { name: 'Jane', age: 27 },
        ],
    }

    switchNameHandler = () => {
        //console.log('was clicked')
        this.setState({
            persons: [
                { name: 'Jason', age: 22 },
                { name: 'Elena', age: 20 },
                { name: 'Jane', age: 21 },
            ],
        })
    }
    render() {
        return (
            <div className="App">
                <h1>Let's Start</h1>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> - My hobbies: racing</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
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
