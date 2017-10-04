module.exports = {
  context: __dirname,
  entry: './02-state-anti-pattern.js',
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
    filename: '02-bundle.js'
  }
};
