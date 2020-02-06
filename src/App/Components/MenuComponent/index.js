// Author: Cesar Miranda
// Date: 02/04/2020
// Description: Composes a Menu Component for users to navigate the Scheduler App.

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

// Numbers
const LOGO_IMAGE_WIDTH_NUMBER = 30;
const LOGO_IMAGE_HEIGHT_NUMBER = 30;
//Strings
const LOGO_IMAGE_SOURCE_STRING = 'https://img.icons8.com/cute-clipart/64/000000/clock.png';
const LOGO_ALT_STRING = 'clockIcon';
const SCHEDULER_STRING = 'SCHEDULER'

////////////////////////////////
// Component 
///////////////////////////////

const menuComponent = () => {

    return (
      <div className="MenuComponent">
        <div className="MenuComponent__menuPanelLogo">
          <div className="MenuComponent__clockIcon">
            <img 
              width={LOGO_IMAGE_WIDTH_NUMBER} 
              height={LOGO_IMAGE_HEIGHT_NUMBER} 
              src={LOGO_IMAGE_SOURCE_STRING} 
              alt={LOGO_ALT_STRING}/>
          </div>
           <div>
            {SCHEDULER_STRING}
           </div>
        </div>
      </div>
    );  

}

////////////////////////////////
// Export  
///////////////////////////////

export default menuComponent