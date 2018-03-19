import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodoItem } from "../actions/index";

class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {      
      value: ''
    };
  }

  handleTextChange = (e) => {
    this.setState({
      value: e.target.value.trim()
    });    
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.value) {
      alert('Please enter something to add a task.');
      return;
    }

    this.props.addTodoItem(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    const { value } = this.state;
    
    
    return (

      <div style={{marginLeft: 20}}>

        

        

      </div>

    );
  }
}

// TODO: Refactor to use a container
const mapStateToProps = state => {
  return { tasks: state.tasks };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodoItem: todo => dispatch(addTodoItem(todo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (Todo);