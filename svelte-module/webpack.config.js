const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const sveltePreprocess = require("svelte-preprocess");
const { ModuleFederationPlugin } = require("webpack").container;
const CopyWebpackPlugin = require("copy-webpack-plugin");

const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

module.exports = {
  entry: {
    "build/bundle": ["./src/main.ts"],
  },
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"],
    conditionNames: ["svelte", "browser"],
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].js",
    chunkFilename: "[name].[id].js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.png$/,
        type: "asset/resource",
      },
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
          options: {
            compilerOptions: {
              dev: !prod,
            },
            emitCss: prod,
            hotReload: !prod,
            preprocess: sveltePreprocess({ sourceMap: !prod }),
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  mode,
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new ModuleFederationPlugin({
      name: "SvelteChild",
      filename: "SvelteChildModule.js",
      exposes: {
        "./App": "./src/App.svelte",
      },
      shared: {
        svelte: {
          singleton: true,
          eager: true,
        },
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          to: ".",
        },
      ],
    }),
  ],
  devtool: prod ? false : "source-map",
  devServer: {
    hot: true,
    port: 3004,
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
};
