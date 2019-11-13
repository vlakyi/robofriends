import React from 'react';   //react Fragment is a new feature form React 16.2+ it helps to have more semantic HTML code like in function below, so we don't have to use milions of divs any more, but if we want to use className tag we have to use div or sth like that
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';      // redux
import {createStore, applyMiddleware, combineReducers} from 'redux';              // redux store function import, applyMiddleware to apply Middleware in our app
import {createLogger} from 'redux-logger';  // redux middleware
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons'; 
// import {robots} from './robots';        // we have to use {} syntax because we aren't export default module, but collection of modules, 
                                        // so if we want to ad more than 1 module use {module1, module2} syntax 
const logger = createLogger();

const rootReducer = combineReducers({searchRobots, requestRobots})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
            <Provider store = {store}>
                <App />
            </Provider>, document.getElementById('root'));
// to render more than 1 module we hav to use div tag for example and add all components insight it

// If you want your app to work offline and load faster, you can change unregister() to register() below. Note this comes with some pitfalls. Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

