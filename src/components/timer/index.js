import React from 'react';
import Timer from './timer';
import Status from './status';

class TimerPage extends React.Component {
    render() {
        let props = {
            time: {
                minutes: 0,
                seconds: 0
            },
            mobster: 'chuck',
            state: 'init'
        };

        return (
            <div className="timerpage" style={{background: '#4d4d4d'}}>
                <Status {...props} />
            </div>
        );
    }
}

export default TimerPage;
