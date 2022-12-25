import React from 'react'

class TodoList extends React.Component{
  render(){
    return(<ul>
      {
        this.props.todos.map(todo => {
          return  (<Todo key={todo.id} handleToggle={this.props.handleToggle} todo = {todo}/>)
        })
      }
    </ul>)
  }
}

export default TodoList;
