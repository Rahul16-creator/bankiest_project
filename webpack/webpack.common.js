const commonPaths = require("./path");
const webpack = require("webpack");
const pnpWebpackPlugins = require("pnp-webpack-plugin");

module.exports = {
  entry: commonPaths.entryPath,
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(js|jsx)?$/,
        use: "babel-loader",
        exclude: [/node_modules/],
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.imagesFolder,
            },
          },
        ],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: '@svgr/webpack',
            options: {
              babel: false,
              icon: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ["src", "node_modules"],
    extensions: ["*", ".js", ".jsx",  ".css"],
    plugins: [pnpWebpackPlugins],
  },
  resolveLoader: {
    plugins: [pnpWebpackPlugins.moduleLoader(module)],
  },
  plugins: [new webpack.ProgressPlugin()],
};
