import { connect } from "react-redux";
//import { removeTodoItem } from "../actions";

import ListTodo from '../components/todo/listtodo';

const mapStateToProps = state => {
	return { tasks: state.tasks };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     removeTodoItem: index => dispatch(removeTodoItem(index))
//   };
// };

//export default connect(mapStateToProps,mapDispatchToProps) (ListTodo);
export default connect(mapStateToProps)(ListTodo);