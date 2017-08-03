const webpack = require('webpack')
const BabiliPlugin = require('babili-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'examples.js'
  },
  plugins: [
    new BabiliPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}
