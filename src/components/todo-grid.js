import React from 'react';

const TodoGrid = (props) => {
    const { tasks } = props;

    return (
        <div>
            <h4>Todo List</h4>
            <ol>
                {
                    tasks.map((item, i) =>    
                        <li key={i}>{item}</li>
                    )
                }
            </ol>
        </div>
    )
} 

export default TodoGrid;