# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `serve -s dist`

Run production build for the application locally

### Technical Choices:

I created this app using npm create-react-app as:

The app includes its own Babel preset React app that supports a variety of ES6 and ES7 capabilities.

It provides support for importing assests in a convenient way.

It is a pretty straight forward application with just 2 screens and I wanted the application to be based purely on react js instead of using any related framework.

### Architectural choices :

I have tried and use minimal dependencies for the project

I have used react-router-dom for routing operations throuout the app.

Application has a layout as a parent component which is rendered on all the pages that includes the header and body layout where content is rendered based on the path. Since header needs to be visible in all the pages it is a part of layout and as children components we have Homepage and ComicPage which displays the screens provided as reference.

I have also created an error page which is rendered on pages which are not a part of this project and in case there was an error that occured in the application.

Three pages futher uses components for rendering the entire application, components folder is further divided in 4 folders : header, comic, brand and UI. As per naming all the folders inlcude components that are required by their section and UI folder includes components which are or can be usable in multiple places in future such as slider component and side panel component.

I have used module css approach to keep styling scoped to particular components and avoid any styles overflowing to differenct components apart from that there are some css presemt in app.css file which is being used by shared components such as buttons and text across the application.

I have created 2 api files for comics and brands in the api folder which are using the json provided as a part of this exercise as a response and fetching results from those to render the application.

### Improvements :

I havent used any store context in the application to store the data for brands and comics which can be implemented in case this was actually fetching data from backend but since I was provided with json files with data I have directly performed operations over those.

I havent included error boundaries for the application that can be implemented for better understanding of the errors that we recieve and can show different error messages accordingly.

I havent included any tests for this application as it was a pretty straight forward application with just dummy data to render but for bith the screens respective test cases can be included that can help automate the testing process.

Could have implemented memoizing for more static components as of now it is used on for header navigation links but since the application had only 2 pages this wasn't necessary to be implemented as memoizing itself has performance overloads.

Could have implemented lazy loading as there are 10 comics on home screen and a few data could have been loaded lazily but since there were only 2 screens I havent implemented lazy loading

### Plans if I had more than 8 hours to develop the application:

Implementing store context for storing comics and brand data as it is being used in different pages and filter functions are making additional calls to fetch the data again and again

Implement proper error boundaries for different possible scenairos that might occur during the application run.

Implement proper unit test cases as well as integration and e2e test cases for all the implemeted screens and functionalities.

Implemented lazy loading to further improve app performance.

Added a few additional functionalities for components that are right now not doing anything such as save comic etc.

### Considerations id this was a production app

Using minimal dependencies, the ones that are necessary for the app to run only.

Bundling the files for prod deployment using build functionality to make sure we get best performance for the application.
