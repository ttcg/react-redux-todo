import React, { Component } from 'react';
import {
    Col,
    Row,
    Table
} from 'reactstrap';
import TodoRow from './TodoRow';

export default class ListTodo extends Component {
    render() {

        const { tasks } = this.props;

        const rows = tasks.map((item, i) => (
            <TodoRow key={item.id} item={item} i={i} />
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
}