const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  // inform webpack tah we're building a bundle
  // for nodeJS, rather than for the browser.
  target: "node",
  // Tell webpack the root file of our server application.
  entry: "./src/index.js",
  //   Tell webpack where to put the output file that is generated.
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  //   Tell webpack to not include node modules inside the bundle
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
