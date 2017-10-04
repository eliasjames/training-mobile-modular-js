module.exports = {
  context: __dirname,
  entry: './03-promises.js',
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
    filename: '03-bundle.js'
  }
};
