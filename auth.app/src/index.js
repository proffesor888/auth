import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './store';
import 'E:/React/auth/auth.app/node_modules/bootstrap/dist/css/bootstrap.min.css';
import {firebaseApp} from './firebase';
import App from './components/App';
import User from './components/user';
import Reg from './components/reg';
import registerServiceWorker from './registerServiceWorker';


firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('Logged IN', user);
        browserHistory.push('user')
    } else {
        console.log('Failed');
        browserHistory.replace('/');
    }
})

ReactDOM.render(<Provider store={store}>
                <Router history={browserHistory}>
                <Route path='user' component={User} />
                <Route path='reg' component={Reg} />
                <Route path='/' component={App} />
                </Router>
                </Provider>,
                document.getElementById('root'));
registerServiceWorker();
