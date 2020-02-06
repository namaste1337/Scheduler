// Author: Cesar Miranda
// Date: 02/04/2020
// Descriptions: Composes an input field for users to input times 
// that will be allocated to many resources.

////////////////////////////////
// Imports 
///////////////////////////////

import React from 'react';

////////////////////////////////
// Styles 
///////////////////////////////

import './index.css'

////////////////////////////////
// Constants 
///////////////////////////////

//Strings
const TIMES_PLACEHOLDER_STRING = 'times...';
const CREATE_BUTTON_LABEL_STRING = 'Create'

////////////////////////////////
// Component 
////////////////////////////////

const TimesInputComponent = (props) => {

  let timesInputValue = '';

  ////////////////////////////////
  // Callbacks 
  ////////////////////////////////

  // Handles event for when the create button in pressed.
  const onCreateButtonPressed = () => {
    
    let onCreateButtonPress = props.onCreateButtonPress;

    if(timesInputValue.length > 0){
      if(onCreateButtonPress !== undefined){
        onCreateButtonPress(timesInputValue);
      }
    }

  }


  // Handles text changes for the Time input form.
  const onTextChange = (event) => {

    let text = event.target.value;

    if(text.length > 0){
      timesInputValue = text;
    }

  }

  ////////////////////////////////
  // Render 
  ////////////////////////////////

  return (
    <div className="TimesInput">
      <div className="TimesInput__inputHeaderWrapper">
        <input className="TimesInput__form" placeholder={TIMES_PLACEHOLDER_STRING} onChange={onTextChange}></input>
        <button className="TimesInput__generateButton" onClick={onCreateButtonPressed}>{CREATE_BUTTON_LABEL_STRING}</button>
      </div>
    </div>
  );
}

////////////////////////////////
// Export  
////////////////////////////////

export default TimesInputComponent;