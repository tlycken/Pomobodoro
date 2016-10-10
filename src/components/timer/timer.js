import React, {PropTypes} from 'react';
import {sprintf} from 'sprintf-js';

const Timer = (props) => {
    return (
        <time className="timer">
            {sprintf('%02d', props.minutes)}
            {':'}
            {sprintf('%02d', props.seconds)}
        </time>
    );
};

Timer.propTypes = {
    minutes: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired
};

export default Timer;
