import React, {Component} from 'react';

import Person from "./Person/Person";

class Persons extends Component {
    constructor (props) {
        super(props);
        console.log('[Persons.js] Inside Constructur', props);
    }
    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount()')
    }


    componentWillReceiveProps(nextProps) {
        console.log('[Update Person.js] Inside componentWillReceiveProps()', nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Update Person.js] Inside shouldComponentUpdate()', nextProps, nextState);
        return nextProps.persons !== this.props.persons;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[Person.js] Inside componentWillUpdate()', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[Person.js] Inside componentDidUpdate()');
    }

    render () {
        console.log('[Persons.js] Inside render()')

        return this.props.persons.map((person, index) => {
            return <Person
                click ={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
            />
        } );
    }
}

export default Persons;