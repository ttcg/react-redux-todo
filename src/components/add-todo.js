import React, { Component } from 'react';

class AddTodo extends Component {

    constructor() {
        super();
        this.state = {      
            value: ''
        };
    }    

    handleTextChange = (e) => {
        this.setState({
        value: e.target.value
        });    
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.value.trim()) {
            alert('Please enter something to add a task.');
            return;
        }

        this.props.addTodoItem(this.state.value);
        this.setState({ value: '' });
    }

    render () { 
        const { value } = this.state;
        
        return (
            <form onSubmit={this.handleSubmit}>
            Type Task: <input type="textbox" value={value}
                onChange={this.handleTextChange}
                />&nbsp;
                <input type="submit" value="Add Task" />              
            </form>
        );
    }
} 

export default AddTodo;