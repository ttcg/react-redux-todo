import React from 'react';
import PropTypes from 'prop-types';
//import ReactNbsp from 'react-nbsp';


const TodoGrid = (props) => {

    const handleRemove = index => {
        props.removeTodoItem(index);
    }    

    const { tasks } = props;    

    return (
        <div>
            <h4>Todo List</h4>
            <ol>
                {
                    tasks.length > 0 
                    ? tasks.map((item, i) =>    
                        <li key={i} style={{lineHeight: '30px'}}>
                            {item}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                            <span style={{color:'red', cursor: 'pointer'}} onClick={() => handleRemove(i)}>Remove</span>
                        </li>
                    )
                    : <h5>No items to display.</h5>
                }
            </ol>
        </div>
    )    
} 

TodoGrid.propTypes = {
    tasks: PropTypes.array.isRequired,
    removeTodoItem: PropTypes.func.isRequired
}

export default TodoGrid;