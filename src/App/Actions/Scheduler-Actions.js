// Author: Cesar Miranda
// Date: 02/04/2020
// Descriptions: Defines actions to modifiy the scheduler state.



////////////////////////////////
/// Helpers
////////////////////////////////

import SchedulerHelper from './Helpers/SchedulerHelper';

////////////////////////////////
/// Constants
////////////////////////////////

import { 
  SCHEDULE
} from "../Reducers/Constants";

////////////////////////////////
/// Action Creators
////////////////////////////////

// Creates an action for updating the schedule state.
const updateSchedule = (schedule) => {

    console.log("Scheduler-Actions::updateSchedule");
    console.log(schedule);

    return {
        type: SCHEDULE.UPDATE_SCHEDULE,
        payload: schedule
    };

}

////////////////////////////////
// Public Thunks
////////////////////////////////

// ACction: generate
// Description: Determines the number of dreivers required for following day.
// pickUpTimes {String} A string of times in minutes sepreated by a comma.
export const generateSchedule = (pickUpTimes) => {

  return async function (dispatch, getState) {

    let scheduleHelper = new SchedulerHelper();
    let schedule = await scheduleHelper.generate(pickUpTimes);
    
    // Update the scheduler state.
    dispatch(updateSchedule([schedule.length, schedule]));

  }

}