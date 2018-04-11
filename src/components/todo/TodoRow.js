import React from 'react'
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import ReactNbsp from 'react-nbsp';
import './todo.css';

const propTypes = {
    i: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired
};

const TodoRow = props => {

    const { i, item, onDelete } = props;

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
            <td className="text-center">
                <i className="fa pointer fa-strikethrough" title="Mark as done"></i><ReactNbsp count="3" />
                <i title="Edit" className="fa pointer fa-pencil-alt" style={{color: "#E85B0C"}} /><ReactNbsp count="3" />
                <i title="Remove" className="fa pointer fa-trash-alt" style={{color: "red"}} onClick={() => onDelete(item.id)} />
            </td>
        </tr>
    );
};

TodoRow.propTypes = propTypes;

export default TodoRow;