// Author: Cesar Miranda
// Date: 02/04/2020
// Description: Defines the main entry component for the Scheduler app.

//////////////////////////////
// Imports
//////////////////////////////

import React, { Component } from 'react';
import { connect } from 'react-redux';

//////////////////////////////
// Custom Components
//////////////////////////////

import {
  MenuComponent,
  TimesInputComponent,
  ScheduleTableComponent
} from './Components';

//////////////////////////////
// Actions
//////////////////////////////

import {
  generateSchedule
} from './Actions/Scheduler-Actions';

//////////////////////////////
// Styles
//////////////////////////////

import './index.css'

//////////////////////////////
// Component
//////////////////////////////

class App extends Component {

  //////////////////////////////
  // Callbacks
  //////////////////////////////

  onCreateButtonPress = (text) => {

    if(this.props.generateSchedule !== undefined){
      this.props.generateSchedule(text);
    }else{
      console.error("Missing required generateSchedule action");
    }


  }

  //////////////////////////////
  // Render
  //////////////////////////////



  render() {

    let {
      schedule
    } = this.props;

    let data = schedule[1];

    console.log("Rendering App");
    return (
      <div className="App">
          <MenuComponent />
          <div className="App__contentPanel">
            <TimesInputComponent onCreateButtonPress={this.onCreateButtonPress} />
            <ScheduleTableComponent scheduleData={data} />
          </div>
      </div>
    );
  }
}

///////////////////////////////
// Mappers
//////////////////////////////

const mapDispatchToProps = (dispatch) => ({
  generateSchedule: (times) => dispatch(generateSchedule(times)),
});

const mapStateToProps = (state) => ({
  schedule: state.scheduler.schedule
})
  


export default connect(mapStateToProps, mapDispatchToProps)(App);
