# Search Dropdown
Search Dropdown is a wrapper of the original [Autocomplete](https://material-ui.com/components/autocomplete/) component of React [Material-UI](https://material-ui.com/)

## How it differs from the original Autocomplete
`Search Dropdown` was developed as an extension to the original Autocomplete to make it easy to provide search and pagination support via API instead of querying and paginating static data on client side. Some features that this wrapper component provides are:
* Loading Progress
* Pagination Support
* Search Support

## Project structure

```
|-- README.md
|-- package.json
|-- public
|   |-- favicon.ico
|   |-- index.html
|   |-- logo192.png
|   |-- logo512.png
|   |-- manifest.json
|   `-- robots.txt
|-- src
|   |-- App.css
|   |-- App.js
|   |-- App.test.js
|   |-- components
|   |   |-- CitySelect.js
|   |   |-- CountrySelect.js
|   |   |-- DegreeDropdown.js
|   |   |-- InterestsDropdown.js
|   |   |-- ProfessionDropdown.js
|   |   |-- SearchDropdown.js           <--- The main component
|   |   |-- SkillsDropdown.js
|   |   `-- StudyFieldsDropdown.js
|   |-- index.css
|   |-- index.js
|   |-- logo.svg
|   |-- serviceWorker.js
|   `-- setupTests.js
`-- yarn.lock
```

This repo contains come examples of components that were made using this SearchDropdown. This allowed us to strip away most of the pagination and filteration logic into one component and just build new components right on top of it.
The API calls in all these components has been commented out because those were project specific, but to reuse these components, all you'd have to do is replace those API calls with yours, and it'll work just fine.

## Development

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
