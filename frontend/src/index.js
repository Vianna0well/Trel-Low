import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/App.js';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import reducers from './main/reducers';

import promise from 'redux-promise'
import multi from 'redux-multi';
import thunk from 'redux-thunk'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, promise, thunk)(createStore)(reducers, devTools);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

