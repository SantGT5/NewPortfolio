const webpack = require("webpack")
// const BundleAnalyzerPlugin =
//  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: "production", // this indicate our app is in production mode
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Production"),
    }),
    // new BundleAnalyzerPlugin(), // Show more details of App bundles size
  ],
}
