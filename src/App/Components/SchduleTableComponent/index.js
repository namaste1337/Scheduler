// Author: Cesar Miranda
// Date: 02/04/2020
// Descriptions: Configures and creates the redux store.

////////////////////////////////
// Imports 
///////////////////////////////

import React from 'react';
import Moment from 'react-moment';

////////////////////////////////
// Styles 
///////////////////////////////

import './index.css'

////////////////////////////////
// Constants 
///////////////////////////////

//Strings
const DRIVER_COUNT_STRING = 'Driver #';
const DRIVER_HEADER_STRING = 'Driver';
const TIMES_HEADER_STRING = 'Times';
const CREATE_HEADER_STRING = 'Created';
const NO_SCHEDULES_TO_DISPLAY_STRING = 'No schedules to display.';

////////////////////////////////
// Sub Components
///////////////////////////////

// Handles rendering the table for the 
// Driver Schdules.
const RenderTableHeader = () => {

  return (
    <div className="SchedulesTableComponent__scheduleRow">
      <div className="SchedulesTableComponent__rowHeader">
        {DRIVER_HEADER_STRING}
      </div>
      <div className="SchedulesTableComponent__rowHeader"> 
        {TIMES_HEADER_STRING}
      </div>
      <div className="SchedulesTableComponent__rowHeader">
        {CREATE_HEADER_STRING}
      </div>
    </div>
  );
  
}
  
// Renders each of the schedules rows
// for the data provided.
const  RenderTableRows = props => {

  let {
    data
  } = props;

  return data.map((data, row)=> (
    <div className="SchedulesTableComponent__scheduleRow">
      <div className="SchedulesTableComponent__rowCell">
        { /* Index always starts at 0 so we add one to display the proper driver count */}
        {DRIVER_COUNT_STRING}{row+1}
      </div>
      <div className="SchedulesTableComponent__rowCell"> 
        {data.toString()}
      </div>
      <div className="SchedulesTableComponent__rowCell">
      <Moment format={'MM/DD/YYYY - HH:mm'} date={new Date()} />
      </div>
    </div>     
  ));
}

////////////////////////////////
// Component 
///////////////////////////////

const ScheduleTableComponent = props => {

  let {
    scheduleData
  } = props;

  if(scheduleData === 0 || scheduleData === undefined){
    return (
      <div className="SchedulesTableComponent">
        <div className="SchedulesTableComponent_noDataMessage">
          {NO_SCHEDULES_TO_DISPLAY_STRING}
        </div>
      </div>
    )
  }

  return (
    <div className="SchedulesTableComponent">
      <RenderTableHeader />
      <RenderTableRows data={scheduleData} />
    </div>
  );

}

////////////////////////////////
// Export 
///////////////////////////////

export default ScheduleTableComponent;