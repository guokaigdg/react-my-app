import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import App from './components/Login/index';
// import NavigationBar from './components/NavigationBar'
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
        {/* <NavigationBar /> */}
        <App /> 
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();