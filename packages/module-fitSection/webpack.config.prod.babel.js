import common from "./webpack.config.babel";
import * as path from "path";
import merge from "webpack-merge";
import webpack from "webpack";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";

let config = merge(common, {
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true
      })
    ]
  }
});

export default config;
