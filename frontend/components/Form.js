import e from 'cors';
import React from 'react'

class Form extends React.Component{
  constructor (){
    super();
    this.state={
      input: ""
    }
  }
  handleSubmit = (event) => {
    event.preventDefault(); 
    this.props.handleAdd(this.state.input);
  }
  handleChange = () => {
    this.setState({
      ...this.state,
      input: e.target.value
    })
  }
  render(){
    return(
      <form>
        <input onChange = {this.handleChange}/>
        <button onClick = {this.handleSubmit}>Add</button>
      </form>
    );
  }
}


export default Form;