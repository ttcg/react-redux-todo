import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodoItem } from "../actions/index";

import TodoList from '../components/todo-list';
import AddTodo from '../components/add-todo';

class TodoForm extends Component {

    render () {
        return (
            <div style={{marginLeft: 20}}>
                <AddTodo />
                <TodoList />
            </div>
        );
    }
}

export default TodoForm;