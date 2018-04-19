// React
import React from "react";
import PropTypes from "prop-types";


const TodoList = ({ todos }) => (
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
  ).isRequired
};


export default TodoList;
