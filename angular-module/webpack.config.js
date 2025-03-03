const {
  ModuleFederationPlugin,
} = require("@module-federation/enhanced/webpack");
const moduleFederationConfig = require("./module-federation-config.json");

const config = {
  output: {
    publicPath: "auto",
    scriptType: "text/javascript",
  },
  plugins: [new ModuleFederationPlugin(moduleFederationConfig)],
};

module.exports = config;
