const path = require('path')
const Dotenv = require('dotenv-webpack')
module.exports = (env) => {
  console.log('env: ', env)
  // target: 'node',
  return {
    plugins: [
      new Dotenv({
        // path: './.env',
        systemvars: true
      })
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
      }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      fallback: {
        fs: false
      }
    }
  }
}
