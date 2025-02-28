const { defineConfig } = require("@vue/cli-service");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "auto",
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "VueChild",
        filename: "VueChildModule.js",
        exposes: {
          "./App": "./src/main.ts",
        },
        shared: {
          vue: {
            eager: true,
          },
        },
      }),
    ],
  },
});
