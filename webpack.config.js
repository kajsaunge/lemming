var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.handlebars$/, loader: "handlebars-loader"}
    ]
  },
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    port: 9000
  }
}
