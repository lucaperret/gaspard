module.exports = {
  mode: 'production',
  entry: './examples/index.js',
  output: {
    filename: 'examples.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            modules: false
          }]
        ]
      }
    }]
  }
}
