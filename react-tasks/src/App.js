import React, { Component } from 'react';
import TaskList from './TaskList'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      task: ''
    };
  }

  inputOnChange(e) {
    e.preventDefault();

    var task = e.target.value;

    this.setState((prevState) => {
      return { task }
    }); 
    
  }

  addTask(e) {
    e.preventDefault();

    this.setState((prevState) => {
      return {
        items: prevState.items.concat([this.state.task]),
        task: ''
      };
    });

  }

  render() {
    return (
      <div>
        <h1>My tasks</h1>

        <TaskList items={ this.state.items } />

        <form onSubmit={(e)=>this.addTask(e)}>
          <input onChange={(e) => this.inputOnChange(e)} value={ this.state.task }/>
          <button>Add task</button>
        </form>
      </div>
    );
  }
}

export default App;
