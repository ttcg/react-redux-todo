import { connect } from "react-redux";
import * as actions from "../actions";

import TodoGrid from '../components/todo-grid';
//import { bindActionCreators } from "redux";

const mapStateToProps = state => {
  return { tasks: state.tasks };
};

const mapDispatchToProps = dispatch => {
  return {
    removeTodoItem: index => dispatch(actions.removeTodoItem(index))
    //actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps,mapDispatchToProps) (TodoGrid);