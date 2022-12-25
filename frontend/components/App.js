import React from 'react'
import TodoList from './TodoList'
import Form from './Form'



export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos:  [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  handleAdd = () => {
    //1. setState
    //2. Change todos
    //3. Make a copy todos
    //4. Add a new todo to the end of our new todo list

    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    });
  }


  handleClear = () => {
    // 1. setState
    // 2. loop through all todos
    // 3. remove all todos that have completed === true
    // 4. save filtered todos to state
    this.setState({
      ...this.state, 
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false);
      })
    });
  }

  handleToggle = (clickedId) => {
    //1. setState
    //2. Change todos
    //3. Find the todo that we clicked on
    //4. Flip the value of completed for that todo
    //5. Keep all other todos the same

    this.setState({
      ...this.state,
      todos: todos.map(todo => {
        if(todo.id === clickedId){
          return {
            ...todo,
            completed: !todo.completed
          }
        }
      })
    })
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Todos</h1>
        
        <TodoList handleToggle = {this.handleToggle} todos={todos}/>

        <Form handleAdd = {this.handleAdd}/>
        <button onClick={this.handleClear}>Clear</button>
      </div>
    )
  }
}
