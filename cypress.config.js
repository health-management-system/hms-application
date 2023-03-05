const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  projectId: 'pbx1kz',
  component: {
    setupNodeEvents(on, config) {
      console.log("setupNodeEvents for components");

      // https://github.com/bahmutov/cypress-code-coverage
      require("@bahmutov/cypress-code-coverage/plugin")(on, config);

      return config;
    },
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
      webpackConfig: {
        mode: "development",
        devtool: false,
        module: {
          rules: [
            // application and Cypress files are bundled like React components
            // and instrumented using the babel-plugin-istanbul
            // (we will filter the code coverage for non-application files later)
            {
              test: [/\.jsx$/, /\.tsx$/],
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
                  plugins: [
                    // we could optionally insert this plugin
                    // only if the code coverage flag is on
                    "istanbul",
                  ],
                },
              },
            },
          ],
        },
      },
    },
  },

  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      // include any other plugin code...

      // It's IMPORTANT to return the config object
      // with any changed environment variables
      return config
    },
  },
});
