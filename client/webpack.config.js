const path = require('path')

module.exports = {
  // target: 'node',
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
