# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Line Coverage for Cypress Component Tests
1. Run all compoent tests using `npx cypress run --component`
2. Open `./coverage/lcov-report/index.html` to see coverage

Documentation: [Guide Found Here](https://glebbahmutov.com/blog/component-code-coverage/)

## Cypress Component Testing
The component tests are files ending in `*.cy.jsx` and are contained in the same directory as the react component (`.jsx`) they test. A sample of the testing can be seen in `./src/components/sample/` where `sample.jsx` is tested by `sample.cy.jsx`.

## Cypress E2E:
- Run the instrumented code using `npm run coverage`
- After running the cypress tests on the program see the line coverage in `./coverage/lcov-report/index.html` 
- Documentation:
    - https://www.npmjs.com/package/@cypress/instrument-cra
    - https://docs.cypress.io/guides/tooling/code-coverage 

#### Steps to run tests:
1. In the terminal run `npx cypress open`.
2. A Cypress window should open showing, select the component testing option (this should be configured)
3. Next select a browser (pick a browser you have already installed) and click the "start component testing in ..." button.
4. Now in your selected browser you can select the component spec you would like to view.
5. At this point you should be able to see the component tests.

## Setting up the amplify folder (Do this before testing)
1. Delete amplify folder in the project directory
2. Run `npm install -g @aws-amplify/cli`
3. Run `amplify pull` (if there is a security error try `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted`)
4. Enter AccessKey and SecretKey
5. Select the first region choice
6. Select project hms
7. Configure as Javascript and React


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
