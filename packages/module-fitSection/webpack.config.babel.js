import * as path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

let config = {
  entry: {
    app: "./index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "scrolling",
      template: "index.html",
      inject: "head"
    })
  ],
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".json", ".jsx", ".css"]
  }
};

export default config;
