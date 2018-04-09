import React from 'react'
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import './todo.css';

const TodoRow = props => {

    const { i, item } = props;

    const generateClass = todo => {
        
        if (todo.doneBy 
            && todo.hasDone === false
            && Date.parse(todo.doneBy) < new Date() ) {
            return "text-danger";
        }
    };    

    return (
        <tr>
            <th scope="row">{i + 1}</th>
            <td>{item.taskItem}</td>            
            <td className={`text-center ${generateClass(item)}`}>{
                item.doneBy &&
                    <Moment date={item.doneBy} fromNow />
                }
            </td>
            <td className="text-center">{
                item.hasDone &&
                    <i className="fas fa-check-circle fa-2x doneItem" /> 
                }
            </td>
            <td>Action buttons</td>
        </tr>
    );
};

TodoRow.propTypes = {
    i: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired
}


export default TodoRow;