import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import RegisterForm from './components/RegisterForm';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    id: 0,
    todoList: [],
  }

  handleCreate = (content) => {
    this.setState((prevState) => ({
      todoList: prevState.todoList.concat({
        id: prevState.id++,
        content,
        checked: false,
      })
    }));
  }

  handleRemove = (id) => {
    this.setState((prevState) => ({
      todoList: prevState.todoList.filter((item) => {
        return item.id !== id;
      })
    }));
  }

  handleCheck = (id) => {
    this.setState((prevState) => ({
      todoList: prevState.todoList.map((item) => {
        if (id === item.id) {
          item.checked = !item.checked;
        }

        return item;
      })
    }));
  }

  render() {
    return (
      <TodoListTemplate form={<RegisterForm onCreate={this.handleCreate}/>}>
        <TodoList todoItems={this.state.todoList} onCheck={this.handleCheck} onRemove={this.handleRemove}/>
      </TodoListTemplate>
    );
  }
}

export default App;
