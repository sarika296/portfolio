import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Jokes from './client/components/jokes'
import './client/styles/index.css';
import createBrowswrHistory from 'history/createBrowserHistory';
import MasterApp from './client/master/masterApp';


ReactDOM.render(
    <Router history ={createBrowswrHistory()}>
        <Switch>
            <Route exact={true} path='/' component={App} />
            <Route path='/jokes' component={Jokes} />
            <Route path='/music-master' component={MasterApp} />
        </Switch>
    </Router>,
    document.getElementById('root')
); 