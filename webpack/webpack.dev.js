const commonPaths = require("./path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    filename: "[name].js",
    path: commonPaths.outputPath,
    publicPath: "/",
    chunkFilename: "chunk.[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template/index.html",
      favicon: commonPaths.faviconPath,
    }),
  ],
  devServer: {
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 3000,
  },
};
