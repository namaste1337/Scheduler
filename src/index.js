//////////////////////////////////
// Imports
//////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import configureStore from './App/Config/Redux';
import { Provider } from 'react-redux';

//////////////////////////////////
// Main Render
//////////////////////////////////

ReactDOM.render(
  <Provider store={configureStore({})}>
    <App />
  </Provider>,
  document.getElementById('root')
);
