// Author: Cesar Miranda
// Date: 02/04/2020
// Descriptions: Configures and creates the redux store.

//////////////////////////////////
// Imports
//////////////////////////////////

import { createStore, applyMiddleware } from 'redux';
import createReducer from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//////////////////////////////////
// Config
//////////////////////////////////

export default function configureStore(initialState = {}) {

  const store = createStore(createReducer(), {}, applyMiddleware(logger, thunk));

  return store;
}
