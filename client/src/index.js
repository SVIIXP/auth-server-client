import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import {Provider} from 'react-redux'
import reducers from 'reducers'
import thunk from 'redux-thunk'
import App from 'components/App';
import Welcome from 'components/Welcome'
import Signup from 'components/auth/Signup'
import Feature from 'components/Feature'
import Signout from 'components/auth/Signout'
import Signin from 'components/auth/Signin'

ReactDOM.render(
  <Provider store={ createStore(reducers,{ auth: { authenticated: localStorage.getItem('token')} },compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f)) }>
    <Router>
  <App>
    <Route path='/' exact component={Welcome} />
    <Route path='/signup' exact component={Signup} />
    <Route path='/feature' exact component={Feature} />
    <Route path='/signout' exact component={Signout} />
    <Route path='/signin' exact component={Signin} />
    
  </App>
</Router>
  </Provider>
, document.getElementById('root'));

 
