const { defineConfig } = require("@vue/cli-service");
const {
  ModuleFederationPlugin,
} = require("@module-federation/enhanced/webpack");
const moduleFederationConfig = require("./module-federation-config.json");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "auto",
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [new ModuleFederationPlugin(moduleFederationConfig)],
  },
});
