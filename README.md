# Welcome to Scheduler

To run the Scheduler Application please follow the steps below.

1. Install dependencies:

    `npm install`
3. Run:

    `npm start`

# Features implemented
- Allocates inputted times to many drivers.
- All Inputs are variable; duration, cool off, and time inputs.
- Balances work across drivers.

# Notes

- The application utilizes a FLUX architecture via Redux.
- `src/App/Actions/Helpers/SchedulerHelper.js` defines the class which allocates the times to each driver.
- `srcs/App/Componenets` defines the reusable components for the application.
- `srcs/App/Actions/` defines the Redux action files that may be called by our application.
- `src/App/Reducers` defines the Redux reducers which manage the state.
- `src/App/Config/Redux` sets up and configures the Redux store.
- `src/App/index.js` defines the entry component for the application

