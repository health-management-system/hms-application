const { defineConfig } = require("cypress");

module.exports = defineConfig({
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
              test: /\.jsx$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-env", "@babel/preset-react"],
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
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
