const webpack = require("webpack");
// const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development", // this indicate our app is in dev mode
  devServer: {
    hot: true,
    open: true,
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Vishwas"),
    }),
    // new ReactRefreshWebpackPlugin(),
  ],
};
