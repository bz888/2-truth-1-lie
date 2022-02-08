const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  // target: 'node',
  plugins: [
    new Dotenv()
  ],
  entry: path.join(__dirname, './index.js'),
  output: {
    path: path.join(__dirname, '../server/public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    fallback: {
      fs: false
    }
  },
  devtool: 'source-map'
}
