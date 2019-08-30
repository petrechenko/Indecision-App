const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/, //if the file is loaded with ending ".js"
        exclude: /node_modules/ //we do not to run babel through it
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devtool: "cheap-module-eval-source-map", //easier to find errors in the code
  devServer: {
    contentBase: path.join(__dirname, "public")
  }
};
