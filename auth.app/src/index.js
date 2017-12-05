import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, browserHistory} from 'react-router'
import 'E:/React/auth/auth.app/node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import User from './components/user';
import Reg from './components/reg';
import Form from './components/form';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router history={browserHistory}>
                <Route path='user' component={User} />
                <Route path='reg' component={Reg} />
                <Route path='form' component={Form} />
                <Route path='/' component={App} />
                </Router>, document.getElementById('root'));
registerServiceWorker();
