const myPath = require("path");
const autoprefixer = require("autoprefixer");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: myPath.resolve(__dirname, "dist") /** this gives us absolute path */,
    filename: "bundle.js",
    publicPath: "",
  },
  devtool: "cheap-module-eval-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[name]_[local]_[hash:base64:5]",
              },
            },
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [autoprefixer()],
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "url-loader?limit=8000&name=images/[name].[ext]",
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: __dirname + "/src/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
};
