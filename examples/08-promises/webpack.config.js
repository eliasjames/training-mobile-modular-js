module.exports = {
  context: __dirname,
  entry: './01-ajax-decoupled.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /( dist | node_modules | bower_components )/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ 'env' ]
          }
        }
      }
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: '01-bundle.js'
  }
}
