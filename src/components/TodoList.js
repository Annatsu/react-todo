// React
import React from "react";
import PropTypes from "prop-types";


const TodoList = ({ todos, filter }) => (
  <ul>
    {
      todos.map((todo, i) => (
        <li key={i}>
          {todo.desc}
        </li>
      ))
    }
  </ul>
);


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
