import React, { PureComponent } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass'





class App extends PureComponent {
    constructor (props) {
        super(props);
        console.log('[App.js] Inside Constructur', props);
        this.state = {
            persons: [
                {id: "125", name: 'Max', age: 29},
                {id: "155", name: 'Menu', age: 30},
                {id: "135", name: 'Rom', age: 40}
            ],
            otherState: 'some other value',
            showPersons: false,
            toggleClicked: 0
        }
    }

    componentWillMount() {
        console.log('[App.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[App.js] Inside componentDidMount()')
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Update App.js] Inside shouldComponentUpdate()', nextProps, nextState);
    //     return nextState.persons !== this.state.persons ||
    //         nextState.showPersons !== this.state.showPersons;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[Update App.js] Inside componentWillUpdate()', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[Update App.js] Inside componentDidUpdate()');
    }
    // state = {
    //     persons: [
    //         {id: "125", name: 'Max', age: '29'},
    //         {id: "155", name: 'Menu', age: '30'},
    //         {id: "135", name: 'Rom', age: '40'}
    //     ],
    //     otherState: 'some other value',
    //     showPersons: false
    // }

    switchNameHandler = (newName) => {
        // console.log('was clicked!');
        // Dont this.state.persons[0].name = '';
        this.setState({
            persons: [
                {name: newName, age: 29},
                {name: 'Menu', age: 30},
                {name: 'Rom', age: 50}
            ]
        })
    }
    deletePersonHandler = (personIndex) =>{
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
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
        this.setState((prevState, props) => {
            return {
                showPersons: !doesShow,
                toggleClicked: prevState.toggleClicked + 1
            }
        });
    }

  render() {
      console.log('[App.js] Inside render()');

        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}/>;
        }

    return (
          <Aux >
              <button onClick={() => {this.setState({showPersons:true})}}>Show Persons</button>
              <Cockpit
                  appTitle={this.props.title}
                  showPersons={this.state.showPersons}
                  persons={this.state.persons}
                  clicked={this.togglePersonsHandler}/>
              {persons}
          </Aux>
    );
      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);

