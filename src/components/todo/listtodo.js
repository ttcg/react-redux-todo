import React, { Component } from 'react';
import {
    Container,
    Table
} from 'reactstrap';

export default class ListTodo extends Component {
    render() {

        const { tasks } = this.props;
        return (
            <Container>
                <h4>List Todo</h4>
                {
                    tasks.length > 0
                        ?
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
                                {tasks.map((item, i) =>
                                    <tr key={i}>
                                    <th scope="row">{i+1}</th>
                                    <td>{item}</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Action buttons</td>
                                </tr>
                                )
                            }
                            </tbody>
                        </Table>

                        : <h5>No items to display.</h5>
                }
            </Container>
        );
    }
}