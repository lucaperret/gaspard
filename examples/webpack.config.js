const webpack = require('webpack')
const BabiliPlugin = require('babili-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'examples.js'
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       loader: 'babel-loader',
  //       options: {
  //         'presets': [
  //           [
  //             'env',
  //             {
  //               'modules': false
  //             }
  //           ]
  //         ]
  //       }
  //     }
  //   ]
  // },
  devtool: 'source-map',
  plugins: [
    // new webpack.LoaderOptionsPlugin({
    //   minimize: true,
    //   debug: false
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //   beautify: false,
    //   mangle: {
    //     screw_ie8: true,
    //     keep_fnames: true
    //   },
    //   compress: {
    //     screw_ie8: true
    //   },
    //   comments: false
    // }),
    new BabiliPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}
