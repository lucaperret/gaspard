const PACKAGE = require('./package.json')
const path = require('path')
const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = dir => path.join(__dirname, dir)
const banner = PACKAGE.name + ' - ' + PACKAGE.version + ' | ' +
  '(c) ' + new Date().getFullYear() + '  ' + PACKAGE.author + ' | ' +
  PACKAGE.license + ' | ' +
  PACKAGE.homepage

const configDevevelopment = {
  entry: {
    example: './examples/index.js'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('examples')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('dist'), resolve('examples')]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: [resolve('src'), resolve('dist'), resolve('examples')],
    hot: true,
    watchContentBase: true
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './examples/index.html'
    })
  ]
}

const configProduction = {
  entry: './src/index.js',
  output: {
    filename: 'gaspard.umd.js',
    path: resolve('dist'),
    library: {
      root: 'Gaspard',
      amd: 'gaspard',
      commonjs: 'common-gaspard'
    },
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      }
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.BannerPlugin(banner),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: true
      }
    })
  ]
}

module.exports = (env) => {
  return env && env.production ? configProduction : configDevevelopment
}
