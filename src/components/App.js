// React
import React, { Component } from 'react';

import Constants from '../constants';


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


export default App;
