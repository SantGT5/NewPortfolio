const webpack = require("webpack")
// hot refresh config
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

module.exports = {
  mode: "development", // this indicate our app is in dev mode
  devServer: {
    // hot refresh config
    hot: true,
    open: true,
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Development"),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
}
