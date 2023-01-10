const baseConfig = require("./webpack.config");
const merge = require("webpack-merge");
const serve = require("../server/server.js");

module.exports = merge(baseConfig, {
  devtool: "#eval-source-map",
  devServer: {
    hot: true,
    compress: true,
    port: 9001,
    open: true,
    proxy: {
      "*": "http://localhost:18889"
    },
    before() {
      serve.run(18889, "n");
    }
  }
});
