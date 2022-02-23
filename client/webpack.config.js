const path = require('path')
const { EnvironmentPlugin } = require('webpack')
// const Dotenv = require('dotenv-webpack')
module.exports = (env) => {
  console.log('env: ', env)
  // target: 'node',
  return {
    plugins: [
      // new Dotenv()
      new EnvironmentPlugin({
        REACT_APP_FIREBASE_API_KEY: 'firebase key',
        REACT_APP_AUTH_DOMAIN: 'auth domain',
        REACT_APP_PROJECT_ID: 'project id',
        REACT_APP_STORAGE_BUCKET: 'storage bucket',
        REACT_APP_MESSAGING_SENDER_ID: 'messaging sender id',
        REACT_APP_APP_ID: 'app id',
        REACT_APP_MEASURE_ID: 'measure id'
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
