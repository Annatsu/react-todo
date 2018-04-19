// React
import React, { Component } from "react";


class AddTodo extends Component {

  state = {
    text: ''
  };


  onChange() {
    this.setState({
      text: this.input.value
    });
  }

  onAddTodo() {
    this.props.addTodo(this.state.text);
    this.setState({
      text: ''
    });
  }


  render() {
    const { text } = this.state;


    return (
      <div>
        <input placeholder="Add the task description" ref={(ref) => this.input = ref} onChange={() => this.onChange()} value={text} />
        <button onClick={() => this.onAddTodo()}>+</button>
      </div>
    );
  }

}


export default AddTodo;
