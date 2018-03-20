import { connect } from "react-redux";
import { removeTodoItem } from "../actions";

import TodoGrid from '../components/todo-grid';

const mapStateToProps = state => {
  return { tasks: state.tasks };
};

const mapDispatchToProps = dispatch => {
  return {
    removeTodoItem: index => dispatch(removeTodoItem(index))
  };
};

export default connect(mapStateToProps,mapDispatchToProps) (TodoGrid);