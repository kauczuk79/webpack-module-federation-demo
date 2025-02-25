const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const { FederatedTypesPlugin } = require("@module-federation/typescript");
const moduleFederationConfig = require("./module-federation-config.json");

module.exports = {
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3000,
    historyApiFallback: {
      index: "/public/index.html",
    },
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin(moduleFederationConfig),
    new FederatedTypesPlugin({
      federationConfig: moduleFederationConfig,
      typeFetchOptions: {
        maxRetryAttempts: 1,
      },
    }),
  ],
};
