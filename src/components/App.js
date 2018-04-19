// React
import React, { Component } from 'react';


// Application's constants
import Constants from '../constants';


/**
 * The main Application's class.
 * It will hold all of the logic and hold all of the data.
 * 
 * @name App
 * @class
 * @extends Component
 */
class App extends Component {

    state = {
        todos: [
            {
                desc: 'Study React'
            },
            {
                desc: 'Study TDD'
            },
            {
                desc: 'Be nice to people :)'
            }
        ],
        filter: Constants.filters.FILTER_SHOW_ALL
    }


    render() {


    render() {
        const {
            todos,
            filter
        } = this.state;


        return (
            <div>
                <ul>
                    {
                        todos.map((todo, i) => (
                            <li key={i}>
                                {todo.desc}
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }

}


/**
 * @export App
 */
export default App;
