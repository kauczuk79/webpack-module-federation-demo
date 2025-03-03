const {
  ModuleFederationPlugin,
} = require("@module-federation/enhanced/webpack");
const deps = require("./package.json").dependencies;

const config = {
  output: {
    publicPath: "auto",
    scriptType: "text/javascript",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "angular-module",
      filename: "AngularChildModule.js",

      library: {
        type: "var",
        name: "AngularChild",
      },

      exposes: {
        "./Component": "./src/app/remote-entry.ts",
      },

      dts: {
        generateTypes: true,
      },
    }),
  ],
};

module.exports = config;
