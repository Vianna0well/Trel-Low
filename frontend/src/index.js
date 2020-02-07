import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/App.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducers from './main/reducers';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

