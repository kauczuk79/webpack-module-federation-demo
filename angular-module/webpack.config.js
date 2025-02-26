const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const webpackConfig = withModuleFederationPlugin({
  name: "angular-module",
  filename: "AngularChildModule.js",

  library: {
    type: "var",
    name: "AngularChild",
  },

  exposes: {
    "./Component": "./src/app/remote-entry.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});

module.exports = {
  ...webpackConfig,
  output: {
    publicPath: "auto",
    scriptType: "text/javascript",
  },
};
