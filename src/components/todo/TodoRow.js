import React from 'react'
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import ReactNbsp from 'react-nbsp';
import { Link } from 'react-router-dom';
import './todo.css';

const propTypes = {
    i: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onMark: PropTypes.func.isRequired
};

const TodoRow = props => {

    const { i, item, onDelete, onMark } = props;

    const generateClass = todo => {
        
        if (todo.doneBy 
            && todo.hasDone === false
            && Date.parse(todo.doneBy) < new Date() ) {
            return "text-danger";
        }
    };    

    const GenerateMarkButton = todo => {        
        return todo.hasDone
            ?
            <i 
                onClick={() => onMark(todo.id, false)} 
                className='fab fa-stripe-s pointer'
                title="Mark as un-done" />            
            :
            <i 
                onClick={() => onMark(todo.id, true)} 
                className='fa fa-strikethrough pointer'
                title="Mark as done" />                  
    }

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
                {GenerateMarkButton(item)}<ReactNbsp count="3" />
                <Link to={`todo/${item.id}`} className="fa pointer fa-pencil-alt" style={{color: "#E85B0C"}} />
                <ReactNbsp count="3" />
                <i title="Remove" className="fa pointer fa-trash-alt" style={{color: "red"}} onClick={() => onDelete(item.id)} />
            </td>
        </tr>
    );
};

TodoRow.propTypes = propTypes;

export default TodoRow;