import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import AboutPage from './components/about';
import TimerPage from './components/timer';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={TimerPage}/>
        <Route path="about" component={AboutPage}/>
    </Route>
);
