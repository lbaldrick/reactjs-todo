import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reducer from './redux/reducers/TodoReducer';
import { Provider } from 'react-redux';
import App from './App';

const loggerMiddleware = createLogger()

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
    )
);

ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root'));

registerServiceWorker();
