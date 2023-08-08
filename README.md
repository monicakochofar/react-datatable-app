# Getting Started with react-datatable-app

This is a data table application that uses Typescript and React. The application displays a table with data, allowing users to interact with table columns, and sort data. 
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- This app uses [faker](https://fakerjs.dev) to generate the fake data stored in the data table.

<img width="1307" alt="image" src="https://github.com/monicakochofar/react-datatable-app/assets/7142197/eecf6d30-dafe-4af9-a046-ff8e1fd8c3da">

## Available Scripts

In the project directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Recommended Changes/Upgrades

1. **Dragging Functionality** - currently to drag the columns, you are only able to do it by dragging the column header exclusively. To change it so that the whole column is draggable, I would need to restructure the data to go from a list that is per row, to a list that is per column. Perhaps using lists like for ex. "cityList" and acting accordingly from there.
2. **Pagination** - need to create a component that would display pages and their links based on how many items we require per page. When clicking a page link, it would update the "current page" number and shift the index we are referencing in order to display the data accordingly.
3. **Sorting** - currently it sorts by ascending order only, will eventually update to add a descending order option

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

