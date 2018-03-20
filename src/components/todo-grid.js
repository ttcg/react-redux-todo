import React, {Component} from 'react';

class TodoGrid extends Component {

    handleRemove = index => {
        this.props.removeTodoItem(index);
    }

    render() {

        const { tasks } = this.props;    

        return (
            <div>
                <h4>Todo List</h4>
                <ol>
                    {
                        tasks.map((item, i) =>    
                            <li key={i} style={{lineHeight: '30px'}}>
                                {item}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                
                                <span style={{color:'red'}} onClick={() => this.handleRemove(i)}>Remove</span>
                            </li>
                        )
                    }
                </ol>
            </div>
        )
    }
} 

export default TodoGrid;