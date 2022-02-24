const path = require('path')
// const Dotenv = require('dotenv-webpack')
const { DefinePlugin } = require('webpack')
module.exports = (env) => {
  console.log('env: ', env)
  // target: 'node',
  return {
    plugins: [
      // new Dotenv({
      //   path: path.resolve(__dirname, '../.env')
      // })
      new DefinePlugin({
        'process.env.LOGIN_KEY': JSON.stringify('bz888dev@gmail.com'),
        'process.env.RECAPTCHA_KEY': JSON.stringify('6Lc9tZceAAAAAOtP6LgstLdu6Kx0H_GVhBEsBW1b')
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
    },
    devtool: 'source-map'
  }
}
