// React
import React, { Component } from "react";
import PropTypes from 'prop-types';


/**
 * The component responsible for adding more todos into the App's state.
 *
 * @name AddTodo
 * @class
 * @extends Component
 */
class AddTodo extends Component {

  state = {
    text: ''
  };


  /**
   * Gets called to update the input field of the AddTodo component.
   * 
   * @method onChange
   */
  onChange() {
    this.setState({
      text: this.input.value
    });
  }

  /**
   * Identifies the key that was pressed, and, if it is 'Enter', adds the Todo into the App's state.
   * 
   * @method
   * 
   * @param {KeyboardEvent} arg0 - an keyboard event object fired from the AddTodo's input field.
   */
  onKeyUp({ key }) {
    if (key === 'Enter')
      this.onAddTodo();
  }

  /**
   * The click handler to the button that will add the todo into the App' state.
   * 
   * @method onAddTodo
   */
  onAddTodo() {
    const { text } = this.state;

    if (text === '')
      return;

    this.props.addTodo(text);
    this.setState({
      text: ''
    });
  }


  render() {
    const { text } = this.state;

    return (
      <div>

        <input
          placeholder="Add the task description"
          ref={(ref) => this.input = ref}
          onChange={() => this.onChange()}
          onKeyUp={(e) => this.onKeyUp(e)}
          value={text} />

        <button onClick={() => this.onAddTodo()}>
          +
        </button>

      </div>
    );
  }

}



AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};


export default AddTodo;
