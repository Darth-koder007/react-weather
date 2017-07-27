/**
 * Vendor imports
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

/**
 * Custom imports
 */
import App from './components/app';
import reducers from "./reducers";
import styles from '../style/style.scss';
import fonts from '../style/fontello.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

/**
 * Render function call
 */
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
    ,document.querySelector('.container')
  );
