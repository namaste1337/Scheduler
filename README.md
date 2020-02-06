# Welcome to Scheduler

To run the Scheduler Application please follow the steps below.

1. Install dependencies

    `npm install`
3. Run:

    `npm start`

# Features implemented
- Allocates inputted times to many drivers.
- All Inputs are variable, duration, cool off, and time inputs.
- Balances work across drivers.

# Notes

- The application utilizes a FLUX architecture via Redux.
- In `src/App/Actions/Helpers/SchedulerHelper.js` is where you can find the Class which sorts the times to each driver.
- `srcs/App/Componenets` defines the reusable components for the application.
- `srcs/App/Actions/` defines the Redux action files that may be called by our application.
- `src/App/Reducers` defines the Redux reducers which manage the state.
- `src/App/Config/Redux` sets up and configures the Redux store.
- `src/App/index.js` Defines the entry component for the application

