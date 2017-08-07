const webpack = require('webpack')

module.exports = {
  entry: './examples/index.js',
  output: {
    filename: './examples/examples.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['env', {
            modules: false
          }]
        ]
      }
    }]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}
