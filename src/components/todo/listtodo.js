import React from 'react';
import {
    Col,
    Row,
    Table
} from 'reactstrap';
import PropTypes from 'prop-types';
import TodoRow from './TodoRow';

const propTypes = {
    tasks: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onMark: PropTypes.func.isRequired
};

const ListTodo = props => {

    const { tasks, onDelete, onMark } = props;

    const rows = tasks.map((item, i) => (
        <TodoRow
            key={item.id}
            item={item}
            i={i}
            onDelete={onDelete}
            onMark={onMark} />
    ));

    return (
        <Row>
            <Col>
                {
                    tasks.length > 0
                        ?
                        <Table bordered striped>
                            <thead>
                                <tr>
                                    <th className="w-10">#</th>
                                    <th className="w-50">Task</th>
                                    <th className="w-10">Done By</th>
                                    <th className="w-10">Has Done</th>
                                    <th className="w-20">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows}
                            </tbody>
                        </Table>

                        : <h5>No items to display.</h5>
                }
            </Col>
        </Row>
    );
}

ListTodo.propTypes = propTypes;

export default ListTodo;