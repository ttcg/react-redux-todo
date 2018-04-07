import React from 'react';
import Moment from 'react-moment';
import pkg from '../../../package.json';

import {
    Container
} from 'reactstrap';

const footer = () => {

    return (
        <React.Fragment>
            <hr style={{ marginTop: 100 }} />
            <Container>
                <p className="float-right"><small>v {pkg.version}</small></p>
                <p>&copy; <Moment format='YYYY' /> TTCG</p>
            </Container>
        </React.Fragment>
    );

}

export default footer;