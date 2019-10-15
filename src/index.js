import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'
import roorReducer from './reducers';
import { Provider } from 'react-redux'
const store = createStore(
    roorReducer,
    composeWithDevTools(
        applyMiddleware(thunk, logger)
    )
);

ReactDOM.render(
    <Provider store = { store }>
        <App /> 
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA