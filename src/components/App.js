// React
import React, { Component } from "react";


// App's Components
import TodoList from './TodoList';
import AddTodo from './AddTodo';


// Application's constants
import Constants from "../constants";


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
        id: 0,
        desc: "Study React",
        completed: false
      },
      {
        id: 1,
        desc: "Study TDD",
        completed: false
      },
      {
        id: 2,
        desc: "Be nice to people :)",
        completed: false
      }
    ],
    filter: Constants.filters.FILTER_SHOW_ALL
  };


  constructor(props) {
    super(props);


    this.idCounter = 0;

    this.setDisplayFilter = this.setDisplayFilter.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }


  setDisplayFilter(filter) {
    this.setState({
      filter
    });
  }


  addTodo(desc) {
    const newTodo = {
      desc,
      id: this.idCounter++,
      completed: false
    };

    this.setState((prevState) => ({
      todos: [ ...prevState.todos, newTodo ]
    }));
  }


  render() {
    const {
      todos,
      filter
    } = this.state;

    return (
      <div>
        <AddTodo
          addTodo={this.addTodo} />
        <TodoList
          todos={todos} />
      </div>
    );
  }

}


/**
 * @export App
 */
export default App;
