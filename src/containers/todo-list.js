import { connect } from "react-redux";

import TodoGrid from '../components/todo-grid';

const mapStateToProps = state => {
  return { tasks: state.tasks };
};

export default connect(mapStateToProps) (TodoGrid);