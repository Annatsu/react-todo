// React
import React, { Component } from "react";


// App's Components
import FilterableList from './FilterableList';
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


  /**
   * @constructor
   * @param {Object} props 
   */
  constructor(props) {
    super(props);


    /**
     * The property that will be used, incrementally, to create new todos.
     * 
     * @property {Number} idCounter
     * @default 0
     */
    this.idCounter = 0;


    // Bind the `this` keyword to be used in this class's context.
    this.setDisplayFilter = this.setDisplayFilter.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }


  /**
   * Changes the display filter of the Application.
   * 
   * @method setDisplayFilter
   * 
   * @param {Number} filter - an integer represented by a constant in the Constants file.
   */
  setDisplayFilter(filter) {
    this.setState({
      filter
    });
  }


  /**
   * Adds a Todo item into the Application's state.
   * 
   * @method addTodo
   * 
   * @param {String} desc - an string representing the new todo description.
   */
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

        <FilterableList filter={filter}>
          <TodoList
            todos={todos} />
        </FilterableList>
      </div>
    );
  }

}


/**
 * @export App
 */
export default App;
