const path = require('path')
const webpack = require('webpack')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const BabiliPlugin = require('babili-webpack-plugin')

const resolve = dir => path.join(__dirname, dir)

// const plugins = [
//   // new BabiliPlugin(),
//   new webpack.optimize.UglifyJsPlugin(),
//   new webpack.optimize.ModuleConcatenationPlugin()
// ]
// if (process.env.npm_config_report) {
//   plugins.push(new BundleAnalyzerPlugin())
// }
// new webpack.BannerPlugin(options) https://webpack.js.org/plugins/banner-plugin/

// module.exports = [
//   {
//     entry: './src/index.js',
//     output: {
//       filename: 'gaspard.esm.js',
//       path: resolve('dist')
//     },
//     plugins: [
//       new BabiliPlugin(),
//       new webpack.optimize.ModuleConcatenationPlugin()
//     ]
//   }, {
//     entry: './src/index.js',
//     output: {
//       filename: 'gaspard.umd.js',
//       path: resolve('dist'),
//       library: 'Gaspard',
//       libraryTarget: 'umd'
//     },
//     module: {
//       rules: [
//         {
//           test: /\.js$/,
//           loader: 'babel-loader',
//           include: [resolve('src')]
//         }
//       ]
//     },
//     devtool: 'inline-source-map',
//     devServer: {
//       contentBase: resolve('examples'),
//       hot: true
//     },
//     plugins: [
//       new webpack.optimize.UglifyJsPlugin(),
//       new webpack.optimize.ModuleConcatenationPlugin(),
//       new webpack.HotModuleReplacementPlugin()
//     ]
//   }
// ]

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'gaspard.umd.js',
    path: resolve('dist'),
    library: 'Gaspard',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: [resolve('examples'), resolve('dist')],
    hot: true,
    watchContentBase: true
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
