import common from "./webpack.config.babel";
import * as path from "path";
import merge from "webpack-merge";
import webpack from "webpack";

let config = merge(common, {
  devtool: "source-map",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    host: "0.0.0.0",
    disableHostCheck: true,
    port: 9000,
    hot: true,
    stats: {
      colors: true
    },
    open: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});

export default config;
