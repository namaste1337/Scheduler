// Author: Cesar Miranda
// Date: 02/04/2020
// Class: SchedulerHelper
// Descriptions: Itterates through a set of times to determine
// the most optomized sub sets of resources to allocate to each time.

//////////////////////////////
// Class
//////////////////////////////

class SchedulerHelper {


  //////////////////////////////
  // Constructor
  //////////////////////////////

  constructor(duration ,coolOffPeriod){

      /**
       * _coolOffPeriod
       * The cool off period defines the amount of break time a resource has between 
       * task. The value defaults to 5 minutes if undefined.
       */
      this._coolOffPeriod = coolOffPeriod || 5;


      /**
       * _duration
       * The duration of time a resource requires to accoumplish a task
       * The value defaults to 15 if undefined.
       */

      this._duration = duration || 15;

  }

  //////////////////////////////
  // Private Methods
  //////////////////////////////
  
  // Determines if there is an existing driver that can take on 
  // the required pick up time. 
  // Returns the index of the resource that is available take on the time.
  // If no resource is available -1 will be returned.
  // scheduleArray {String} A schedule array containing reseource subsets.
  // time {number} The time that be validates against all subsets for availablilty.
  _isResourceAvailable(scheduleArray, time){

    let schedule = [...scheduleArray];
    let resource = -1;

    // Itterate through each resource subset and determine if a 
    // resource is available.
    for(let i = 0; i <= schedule.length - 1; i++){

      let subset = schedule[i];
      let lastTime = subset[subset.length - 1]; // Get the last entered time of subset
      let start = parseInt(lastTime);
      let end = parseInt(lastTime) + this._duration + this._coolOffPeriod;

      // If the time overlaps with the last entry of the subset
      // continue to the next subset.
      if(time === start || (time > start && time < end)){
        continue;
      }else{
        // If the time does not overlap assign the 
        // resource index.
        resource = i;
        break;
      }

    }

    return resource;

  }
  
  // Method: _findAndAddPickUpTime
  // Description: Locates a resource with availability and assigns the time privoided as a parameter.
  // scheduleArray {Array} The schedule array containing the resource subsets.
  // resourceIndex {number} The index of the subset where the time will be appended.
  // time {number} The time that will be added to the existing subset.
  _addTimeToExistingResource(scheduleArray, resourceIndex, time){

      let schedule = [...scheduleArray];

      schedule[resourceIndex].push(time);

      return schedule;

  }
  // Method: _addTimeToNewResource
  // Description: Creates a new resource and assigns the time to the newly created
  // resource.
  // scheduleArray {Array} The schedule array containing the resource subsets.
  // time {number} The time that will be added to the new resource.
  _addTimeToNewResource(scheduleArray, time){

    let schedule = [...scheduleArray];

    // Push a new subset resource with the time
    schedule.push([time]);

    return schedule
  }


  // Method: _addTimeToSchedule
  _addToSchedule(scheduleArray, time){

    return new Promise (resolve => {

      if(scheduleArray === null || scheduleArray === undefined){
          console.error("Error Type: Parameter, Method: _addTimeToSchedule, Message: scheduleArray parameter must be defined");
          return;
      }else if(time === null || time === undefined){
          console.error("Error Type: Parameter, Method: _addTimeToSchedule, Message: time parameter must be defined");
          return;
      }

      // Keep the scheduleArray immutable
      let schedule = [...scheduleArray];

      // If there are no resources in the schedule array
      // Create the first resource, and assign the time.
      if (schedule.length === 0) {
        schedule[schedule.length] = [time];
        resolve(schedule);
        return;
      }

      //Find a resource
      let resourceIndex = this._isResourceAvailable(schedule, time);

      if(resourceIndex !== -1){
        // Add the time to an existing resource
        schedule  = this._addTimeToExistingResource(schedule, resourceIndex, time)
      }else{
        // Add the time to a new resource.
        schedule = this._addTimeToNewResource(schedule, time)
      }

      // Sort the schedule array in asccending order by subset length. 
      // This will help balance the resources work load when looking for
      // an available resource, since we will try to retreive resources
      // with the least amoutn of work first.
      schedule = schedule.sort((a, b) => a.length - b.length);

      // resolve(time);
      resolve(schedule);
      return;

    });

  }

  //////////////////////////////
  // Public Methods
  //////////////////////////////
  
  // Method: generate
  // Description: Determines the number of resources for a set times.
  // pickUpTimes {String} A string of times in minutes sepreated by comma.
  async generate(pickUpTimes){

    let pickUpTimesArray = pickUpTimes.split(',');
    let schedule = [];

    for(let time of pickUpTimesArray){
      schedule = await this._addToSchedule(schedule, parseInt(time));
    }

    return schedule;

  }


}

//////////////////////////////
// Export
//////////////////////////////

export default SchedulerHelper;