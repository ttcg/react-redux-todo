import React, { Component } from 'react';
import {
    Container,
    Table
} from 'reactstrap';

export default class ListTodo extends Component {
    render() {
        return (
            <Container>
                <h4>List Todo</h4>
                <Table bordered striped>
                    <thead>
                        <tr>
                            <th className="w-10">#</th>
                            <th className="w-50">Task</th>
                            <th className="w-10">Has Done</th>
                            <th className="w-10">Done By</th>
                            <th className="w-20">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Action buttons</td>
                        </tr>
                    </tbody>
                </Table>
                
            </Container>
        );
    }
}