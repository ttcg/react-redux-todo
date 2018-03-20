import { connect } from "react-redux";
import { addTodoItem } from "../actions";

import AddTodo from '../components/add-todo';

const mapDispatchToProps = dispatch => {
  return {
    addTodoItem: todo => dispatch(addTodoItem(todo))
  };
};

export default connect(null, mapDispatchToProps) (AddTodo);