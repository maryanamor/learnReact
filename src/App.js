import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ReactDOM from "react-dom";



class App extends Component {
    state = {
        persons: [
            {id: "125", name: 'Max', age: '29'},
            {id: "155", name: 'Menu', age: '30'},
            {id: "135", name: 'Rom', age: '40'}
        ],
        otherState: 'some other value',
        showPersons: false
    }

    switchNameHandler = (newName) => {
        // console.log('was clicked!');
        // Dont this.state.persons[0].name = '';
        this.setState({
            persons: [
                {name: newName, age: '29'},
                {name: 'Menu', age: '30'},
                {name: 'Rom', age: '50'}
            ]
        })
    }
    deletePersonHandler = (personIndex) =>{
        // const persons = this.state.persons.slice();
        const persons = [... this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => p.id === id);

        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;

        const persons = [
            ...this.state.persons
        ];
        persons[personIndex] = person;
        // console.log('persons', persons);

        this.setState( {persons: persons});

    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

  render() {
        let persons = null;
        let btnClass = '';
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click ={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}
                        />
                    })}
                </div>
            );

            btnClass = classes.Red;
        }

        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }


    return (
          <div className={classes.App}>
            <h3>HI,  i`m  a react App </h3>
              <p className={assignedClasses.join(' ')}>This is really working!</p>
              <button
                  className={btnClass}
                  onClick={this.togglePersonsHandler}>Toggle Persons</button>
              {persons}
          </div>
    );
      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

