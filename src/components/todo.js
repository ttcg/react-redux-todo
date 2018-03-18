import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodoItem } from "../actions/index";

class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {       
      tasks: props.tasks,
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
    if (!this.state.value)
      alert('Please enter something to add a task.');

    this.props.addTodoItem(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    const { value, tasks } = this.state;
    
    return (

      <React.Fragment>

        <form onSubmit={this.handleSubmit}>
        Type Task: <input type="textbox" value={value}
              onChange={this.handleTextChange}
            />&nbsp;
            <input type="submit" value="Add Task" />  
        </form>

        <div>
          <ol>
            {tasks.map((item, i) =>            
                <li key={i}>{item}</li>
            )}
          </ol>
        </div>

      </React.Fragment>

    );
  }
}

const mapStateToProps = state => {
  return { tasks: state.tasks };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodoItem: todo => dispatch(addTodoItem(todo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (Todo);