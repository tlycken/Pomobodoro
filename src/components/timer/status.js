import React from 'react';
import Timer from './timer';

const Status = (props) => {
    return (
        <div>
            {(props.state == 'mobbing')
                ? <Timer {...props.time}/>
                : props.state == 'switch'
                    ? <div className="timer">switch!</div>
                    : ''}

            {props.state != 'init'
                ? <span className="mobster">
                        {props.mobster}
                    </span>
                : <span className="instructions">
                    get started by clicking the gear wheel on the top right
                </span>}
        </div>
    );
};

Status.propTypes = {
    state: React
        .PropTypes
        .oneOf(['mobbing', 'switch'])
        .isRequired,
    mobster: React.PropTypes.string.isRequired,
    time: React
        .PropTypes
        .shape({minutes: React.PropTypes.number.isRequired, seconds: React.PropTypes.number.isRequired})
        .isRequired
};

export default Status;
