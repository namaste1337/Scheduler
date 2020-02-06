// Author: Cesar Miranda
// Date: 02/04/2020 
// Descriptions: Combine all reducers in this file and export the combined reducers.

////////////////////////////
// Imports
////////////////////////////

import { combineReducers } from 'redux';
import SchedulerReducer from '../../Reducers/Scheduler-Reducer';


////////////////////////////
// Config
////////////////////////////

/**
 * Merges the main reducer with the router state.
 */
export default function createReducer() {
  const rootReducer = combineReducers({
    scheduler: SchedulerReducer,
  });

  return rootReducer;
}
