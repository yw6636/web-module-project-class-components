import React from 'react'
import Todo from './Todo'

class Todo extends React.Copmonent{
  handleClick = () => {
    this.props.handleToggle(this.props.todo.id);
  }

  render(){
    return (<li onClick={handleClick}>
      {this.props.todo.task} { this.props.todo.completed?<span>- completed</span>: <span></span> }</li>)
  }
}

export default Todo;
