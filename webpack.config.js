// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
		publicPath: '/'
  },
  devServer: {
    open: true,
    host: "localhost",
    port: 3000,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),

    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      "process.env.BASEURL":JSON.stringify(process.env.NODE_ENV==='production'?"http://gateway01.ithred.io/":"http://172.16.9.253:5005/api/"),
      "process.env.SITE":JSON.stringify("app"),
      "process.env.ENV":JSON.stringify(process.env.NODE_ENV==='production'?"prod":"dev")
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  resolve: {
    modules: [ path.resolve(__dirname, "/src"), "node_modules" ],
    extensions: [ "*", ".js", ".jsx", ".json" ],
    fallback: { "crypto": false }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.(css|scss)$/,
        use: [stylesHandler, "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
