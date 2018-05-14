import React from 'react';
//import Delay from 'react-delay';
import './LoadingSpinner.css';

const LoadingSpinner = () =>  (
    //<Delay wait={1000}>
        <div className="modal-loading">
            <div className="modal-loading-content">
                <i className="fa fa-spinner fa-spin" /> Loading...
            </div>
        </div>
    //</Delay>
);

export default LoadingSpinner;