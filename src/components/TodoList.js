// React
import React from "react";
import PropTypes from "prop-types";


// Application's Constants
import Constants from '../constants';


const completeCompare = {
  [Constants.filters.FILTER_SHOW_COMPLETED]: true,
  [Constants.filters.FILTER_SHOW_UNCOMPLETED]: false
};


const TodoList = ({ todos, filter }) => {
  const shownTodos = filter === Constants.filters.FILTER_SHOW_ALL
    ? todos
    : todos.filter((todo) => todo.completed === completeCompare[filter]);

  return (
    <ul>
      {
        shownTodos.map((todo, i) => (
          <li key={i}>
            {todo.desc}
          </li>
        ))
      }
    </ul>
  );
};


TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  filter: PropTypes.number
};


export default TodoList;
