import React from "react";
import { Component } from "react";
import { nanoid } from "nanoid";

import { TodoList } from "./ToDo/TodoList";
import initialTodos from "../todo.json"
import { TodoEditor } from "./ToDo/TodoEditor";
// import { Todo } from "./ToDo/Todo";

import './Modal/Modal';

export class App extends Component {
  state = {
    todos: initialTodos,
    filter: ''
  }

  addTodo = (text) => {
    const newTodo = {
      text: text,
      completed: false,
      id: nanoid()
    }

    this.setState((prevState) => {
      return {
        todos: [newTodo, ...prevState.todos]
      }
    })
  }

  deleteTodo = (todoID) => {}

  toggleCompleted = (todoID) => {
    this.setState(prevState => {
      {
        todos: prevState.todos.map(todo =>
          todo.id === todoID
            ? { ...todo, completed: !todo.completed}
            : todo)
      }
    })
  }

  componentDidUpdate(prexProps, prevState) {
    console.log('');

    console.log();
    console.log();

    if (prevState.todos !== this.state.todos) {
      window.localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }
  }

  toggleModal = () => {
    this.setState(prev=>({showModal: !prev.}))
  }

  render(){
   return (
    <div>
      <button type="button" onClick={this.toggleModal}></button>
      {this.state.showModal && <Modal>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, obcaecati id nulla nam ea harum placeat incidunt suscipit vitae aperiam, similique consectetur temporibus ratione odit corrupti maiores sed repellendus mollitia.</p>
      </Modal>}
      <TodoEditor addTodo={this.addTodo}/>
      <TodoList TodoList={this.state.todos}/>
    </div>
  );
  }
  
};
