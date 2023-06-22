const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  resolve: {
    extensions: [".js", ".ts"],
  },
  output: {
    filename: "script.js",
    path: path.resolve(__dirname, "dist"),
    environment: {
      arrowFunction: false,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      inject: "body",
    }),
    new CopyPlugin({
      patterns: [
        { from: "./public/manifest.json", to: "" },
        { from: "./src/sw.js", to: "" },
        { from: "./public/avatar-96x96.png", to: "" },
        { from: "./public/avatar-144x144.png", to: "" },
        { from: "./public/avatar-256x256.png", to: "" },
        { from: "./public/avatar-512x512.png", to: "" },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(t|j)s$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
    ],
  },
  devServer: {
    compress: true,
    port: 9000,
    hot: true,
  },
};
