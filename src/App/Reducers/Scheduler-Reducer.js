// Author: Cesar Miranda
// Date: 02/04/2020
// Class: 
// Descriptions:

///////////////////////////
// Imports
////////////////////////////

import {
  SCHEDULE
} from './Constants'

///////////////////////////
// Intial State
////////////////////////////

// The initial state of the App
const initialState = {
  schedule: [],
};

///////////////////////////
// Reducer
////////////////////////////

function SchedulerReducer(state = initialState, action) {
  
  switch (action.type) {
    case SCHEDULE.UPDATE_SCHEDULE: {
      
      console.log('SchedulerReducer::UpdateSchedule');
      console.log(action.payload);
      
      const newState = {
        ...state,
        schedule: action.payload
      };

      return newState;

    }
    default:
      return state;
  }
}

export default SchedulerReducer;
