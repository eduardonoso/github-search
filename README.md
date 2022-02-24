# Overview
This project allows the user to search github by username and list associated repositories sorted by popularity descending through the use of the [GitHub REST API](https://docs.github.com/en/rest). I set out to build a simple UI with clear feedback to notify the user when data is loading or when an error has occured, such as hitting the low rate limit. The default per page value of 30 was used and pagination is implemented to allow for navigation of larger user repository libraries.

# Constraints
As this was a time-boxed project some constraints were applied in an attempt to deliver richer functionality and design with the limited time available. Some of these limitations include:
- No state management tool such as Redux or MobX is used as there is limited state and only minor prop drilling was necessary to provide the search functionality
- TypeScript was skipped for sake of time and to reduce additional overhead, however strongly typed interfaces assist in catching errors at compile time and preventing runtime errors
- Testing was limited to the Button component and fetchData utility

# Directory Structure
Directories are used to contain all associated styles, tests and child components belonging to a view or component. I find this helps maintainability by keeping all associated files tightly grouped. An index.js file is used to export each directories main component.

- Views - Contains layout and state for individual views/screens
- Components - Contains reusable shared components
- Utils - Utility functions

# Future Improvements
Due to the time constraint of 6 hours I was unable to complete/add several features I had in mind:
- Cache API calls to reduce risk of hitting the rate limiter
- GitHub user authentication to allow a higher rate limit and provide expanded access to data
- Providing users a toggle for light/dark modes
- Allowing the user to sort the results by various parameters such as repo name, last updated at, etc
- Allowing the user to set a page limit
- Using rem and em units when styling for improved responsive design

# System Requirements
[Node and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) are required to install dependencies and run the app

# To Develop Locally
In the project directory run:
### `npm i`
This will install all required packages

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# To Build for Production and Run
In the project directory run:
### `npm i`
This will install all required packages

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm install -g serve`
### `serve -s build`
