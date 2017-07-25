/**
 * Vendor imports
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

/**
 * Custom imports
 */
import App from './components/app';
// import reducers from "./reducers";
import styles from '../style/style.scss';
import fonts from '../style/fontello.css';

/**
 * Render function call
 */
ReactDOM.render(
  // <Provider store={createStore(reducers)}>
    <App />
  // </Provider>,
    ,document.querySelector('.container')
  );
